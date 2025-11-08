// components/payment/DonationForm.tsx
import React, { useState } from 'react';
import '../../styles/globals.css';

interface DonationFormProps {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

// Define TypeScript interfaces
interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  country?: string;
  currencies: string[];
  icon: string;
}

interface CurrencyInfo {
  symbol: string;
  name: string;
  presetAmounts: number[];
}

interface Currencies {
  [key: string]: CurrencyInfo;
}

interface PollingProgress {
  attempt: number;
  maxAttempts: number;
  status: 'polling' | 'completed' | 'failed' | 'error' | 'timeout';
  message: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ onSuccess, onError }) => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('KES');
  const [paymentMethod, setPaymentMethod] = useState<string>('mpesa');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [country] = useState<string>('KE');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [mpesaPolling, setMpesaPolling] = useState<boolean>(false);
  const [pollingProgress, setPollingProgress] = useState<PollingProgress | null>(null);

  // API Base URL - adjust based on your environment
  const API_BASE_URL = 'http://localhost:5000/api';

  // Payment methods configuration
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      type: 'mobile_money',
      country: 'KE',
      currencies: ['KES'],
      icon: '📱'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      type: 'card',
      currencies: ['USD', 'EUR', 'GBP', 'KES'],
      icon: '💳'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      type: 'card',
      currencies: ['USD', 'EUR', 'GBP'],
      icon: '🔵'
    }
  ];

  // Currency options
  const currencies: Currencies = {
    KES: { symbol: 'KES', name: 'Kenyan Shilling', presetAmounts: [100, 500, 1000, 2000, 5000] },
    USD: { symbol: '$', name: 'US Dollar', presetAmounts: [10, 25, 50, 100, 250] },
    EUR: { symbol: '€', name: 'Euro', presetAmounts: [10, 25, 50, 100, 250] },
    GBP: { symbol: '£', name: 'British Pound', presetAmounts: [10, 25, 50, 100, 250] }
  };

  const currentCurrency = currencies[currency];

  // Simple API request function
  const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error: any) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  };

  // M-Pesa functions
  const initiateMpesaPayment = async (paymentData: any) => {
    return await apiRequest('/mpesa/initiate-payment', {
      method: 'POST',
      body: paymentData,
    });
  };

  const checkMpesaStatus = async (checkoutRequestID: string) => {
    return await apiRequest(`/mpesa/status/${checkoutRequestID}`);
  };

  // Stripe functions
  const createStripePaymentIntent = async (paymentData: any) => {
    return await apiRequest('/stripe/create-payment-intent', {
      method: 'POST',
      body: paymentData,
    });
  };

  // Utility functions
  const validateMpesaPhone = (phone: string): boolean => {
    if (!phone) return false;
    const cleaned = phone.replace(/\D/g, '');
    return (cleaned.startsWith('254') && cleaned.length === 12) ||
           (cleaned.startsWith('0') && cleaned.length === 10) ||
           (cleaned.startsWith('7') && cleaned.length === 9);
  };

  const formatMpesaPhone = (phone: string): string => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('254') && cleaned.length === 12) return cleaned;
    if (cleaned.startsWith('0') && cleaned.length === 10) return '254' + cleaned.slice(1);
    if (cleaned.startsWith('7') && cleaned.length === 9) return '254' + cleaned;
    return cleaned;
  };

  const getSupportedCurrencies = (method: string): string[] => {
    const currenciesMap: { [key: string]: string[] } = {
      mpesa: ['KES'],
      card: ['USD', 'EUR', 'GBP', 'KES'],
      paypal: ['USD', 'EUR', 'GBP']
    };
    return currenciesMap[method] || [];
  };

  const isCurrencySupported = (method: string, curr: string): boolean => {
    return getSupportedCurrencies(method).includes(curr);
  };

  const handleAmountSelect = (amt: number) => {
    setSelectedAmount(amt);
    setAmount(amt.toString());
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    setSelectedAmount(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 2) {
      setExpiryDate(value.slice(0, 2) + '/' + value.slice(2));
    } else {
      setExpiryDate(value);
    }
  };

  const validateForm = (): boolean => {
    onError?.('');

    if (!amount || parseFloat(amount) <= 0) {
      onError?.('Please enter a valid amount');
      return false;
    }

    const minAmounts = { KES: 10, USD: 1, EUR: 1, GBP: 1 };
    const minAmount = minAmounts[currency as keyof typeof minAmounts] || 1;
    if (parseFloat(amount) < minAmount) {
      onError?.(`Minimum donation amount is ${currentCurrency.symbol}${minAmount}`);
      return false;
    }

    if (paymentMethod === 'mpesa') {
      if (!phoneNumber || phoneNumber.length < 9) {
        onError?.('Please enter a valid M-Pesa phone number');
        return false;
      }
      if (!validateMpesaPhone(phoneNumber)) {
        onError?.('Please enter a valid Kenyan phone number (e.g., 07XX XXX XXX)');
        return false;
      }
    }

    if (paymentMethod === 'card') {
      if (!name?.trim()) {
        onError?.('Please enter your name');
        return false;
      }
      if (!email?.trim() || !/\S+@\S+\.\S+/.test(email)) {
        onError?.('Please enter a valid email address');
        return false;
      }
      if (!cardNumber || cardNumber.replace(/\s/g, '').length !== 16) {
        onError?.('Please enter a valid card number');
        return false;
      }
      if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
        onError?.('Please enter a valid expiry date (MM/YY)');
        return false;
      }
      
      const [month, year] = expiryDate.split('/');
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiry < new Date()) {
        onError?.('Card has expired');
        return false;
      }

      if (!cvv || cvv.length < 3) {
        onError?.('Please enter a valid CVV');
        return false;
      }
    }

    if (!isCurrencySupported(paymentMethod, currency)) {
      onError?.(`${currency} is not supported for ${paymentMethod} payments`);
      return false;
    }

    return true;
  };

  const pollMpesaStatus = async (
    checkoutRequestID: string, 
    onProgress: ((progress: PollingProgress) => void) | null = null, 
    maxAttempts: number = 30
  ): Promise<{ success: boolean; data?: any; error?: string }> => {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        if (onProgress) {
          onProgress({
            attempt: attempt + 1,
            maxAttempts,
            status: 'polling',
            message: 'Waiting for payment confirmation...'
          });
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const status = await checkMpesaStatus(checkoutRequestID);
        
        if (status.data?.status === 'completed') {
          if (onProgress) {
            onProgress({
              attempt: attempt + 1,
              maxAttempts,
              status: 'completed',
              message: 'Payment confirmed!'
            });
          }
          return { success: true, data: status.data };
        }
        
        if (status.data?.status === 'failed') {
          if (onProgress) {
            onProgress({
              attempt: attempt + 1,
              maxAttempts,
              status: 'failed',
              message: status.data.failureReason || 'Payment failed'
            });
          }
          return { success: false, error: status.data.failureReason || 'Payment failed' };
        }
        
      } catch (error: any) {
        console.error('Error polling M-Pesa status:', error);
        if (onProgress) {
          onProgress({
            attempt: attempt + 1,
            maxAttempts,
            status: 'error',
            message: 'Error checking payment status'
          });
        }
      }
    }
    
    const timeoutError = 'Payment confirmation timeout - please check your phone';
    if (onProgress) {
      onProgress({
        attempt: maxAttempts,
        maxAttempts,
        status: 'timeout',
        message: timeoutError
      });
    }
    
    return { success: false, error: timeoutError };
  };

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMpesaPolling(false);
    setPollingProgress(null);

    try {
      const donationData = {
        amount: parseFloat(amount),
        currency,
        paymentMethod,
        phoneNumber: paymentMethod === 'mpesa' ? formatMpesaPhone(phoneNumber) : undefined,
        email: paymentMethod === 'card' ? email : undefined,
        name: paymentMethod === 'card' ? name : undefined,
        country
      };

      let result;

      if (paymentMethod === 'mpesa') {
        result = await initiateMpesaPayment(donationData);
      } else if (paymentMethod === 'card') {
        result = await createStripePaymentIntent(donationData);
      } else {
        onError?.('Payment method not yet implemented');
        setIsLoading(false);
        return;
      }

      if (result.success) {
        if (paymentMethod === 'mpesa' && result.checkoutRequestID) {
          setMpesaPolling(true);
          
          const pollingResult = await pollMpesaStatus(
            result.checkoutRequestID,
            (progress) => {
              setPollingProgress(progress);
              
              if (progress.status === 'completed') {
                onSuccess?.({
                  transactionId: result.checkoutRequestID,
                  amount: parseFloat(amount),
                  currency,
                  paymentMethod,
                  phoneNumber: donationData.phoneNumber,
                  email: donationData.email,
                  name: donationData.name,
                  country: donationData.country,
                  timestamp: new Date().toISOString(),
                  status: 'completed'
                });
                setMpesaPolling(false);
              } else if (progress.status === 'failed') {
                onError?.(progress.message);
                setMpesaPolling(false);
              }
            }
          );

          if (pollingResult.success) {
            onSuccess?.({
              transactionId: result.checkoutRequestID,
              amount: parseFloat(amount),
              currency,
              paymentMethod,
              phoneNumber: donationData.phoneNumber,
              email: donationData.email,
              name: donationData.name,
              country: donationData.country,
              timestamp: new Date().toISOString(),
              status: 'completed'
            });
          } else {
            onError?.(pollingResult.error || 'M-Pesa payment failed');
          }
          
        } else {
          onSuccess?.({
            transactionId: result.paymentIntentId,
            amount: parseFloat(amount),
            currency,
            paymentMethod,
            phoneNumber: donationData.phoneNumber,
            email: donationData.email,
            name: donationData.name,
            country: donationData.country,
            timestamp: new Date().toISOString(),
            clientSecret: result.clientSecret
          });
        }
      } else {
        onError?.(result.error || 'Payment failed. Please try again.');
      }

    } catch (error: any) {
      console.error('Payment error:', error);
      onError?.(error.message || 'Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle currency change
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    setAmount('');
    setSelectedAmount(null);
    
    const supportedMethods = paymentMethods.filter(method => 
      method.currencies.includes(newCurrency)
    );
    
    if (!supportedMethods.some(method => method.id === paymentMethod)) {
      setPaymentMethod(supportedMethods[0]?.id || 'mpesa');
    }
  };

  // Handle payment method change
  const handlePaymentMethodChange = (newMethod: string) => {
    setPaymentMethod(newMethod);
    
    if (newMethod !== 'mpesa') {
      setPhoneNumber('');
    }
    if (newMethod !== 'card') {
      setName('');
      setEmail('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'mpesa':
        return (
          <div className="payment-fields">
            <div className="form-group">
              <label className="form-label">M-Pesa Phone Number</label>
              <input
                type="tel"
                placeholder="e.g., 07XX XXX XXX"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="form-input"
                required
                disabled={isLoading}
              />
              <small className="input-hint">
                Enter your M-Pesa registered number. You will receive a payment prompt.
              </small>
            </div>
            
            {mpesaPolling && pollingProgress && (
              <div className="polling-status">
                <div className="polling-message">
                  {pollingProgress.status === 'polling' && '⏳ '}
                  {pollingProgress.status === 'completed' && '✅ '}
                  {pollingProgress.status === 'failed' && '❌ '}
                  {pollingProgress.message}
                  {pollingProgress.status === 'polling' && (
                    <span> ({pollingProgress.attempt}/{pollingProgress.maxAttempts})</span>
                  )}
                </div>
                {pollingProgress.status === 'polling' && (
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${(pollingProgress.attempt / pollingProgress.maxAttempts) * 100}%` 
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'card':
        return (
          <div className="payment-fields">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="As shown on card"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
                disabled={isLoading}
              />
              <small className="input-hint">Receipt will be sent to this email</small>
            </div>

            <div className="form-group">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="form-input"
                maxLength={19}
                required
                disabled={isLoading}
              />
            </div>

            <div className="card-details">
              <div className="form-group">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  className="form-input"
                  maxLength={5}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="form-input"
                  maxLength={4}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        );

      case 'paypal':
        return (
          <div className="payment-fields">
            <div className="paypal-notice">
              <p>You will be redirected to PayPal to complete your donation securely.</p>
              <small>PayPal supports USD, EUR, and GBP currencies.</small>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonText = () => {
    if (isLoading) {
      return (
        <>
          <span className="loading-spinner"></span>
          Processing...
        </>
      );
    }
    
    if (mpesaPolling) {
      return 'Waiting for Payment...';
    }
    
    return `Donate ${currentCurrency.symbol}${parseFloat(amount || '0').toLocaleString()}`;
  };

  return (
    <div className="donation-form-container">
      <div className="donation-header">
        <h3>Support Our Mission</h3>
        <p>Your donation helps transform communities worldwide</p>
      </div>

      <form onSubmit={handleDonation} className="donation-form">
        {/* Currency Selection */}
        <div className="form-group">
          <label className="form-label">Currency</label>
          <div className="currency-selector">
            {Object.entries(currencies).map(([code, currencyInfo]) => (
              <button
                key={code}
                type="button"
                className={`currency-btn ${currency === code ? 'selected' : ''}`}
                onClick={() => handleCurrencyChange(code)}
                disabled={isLoading || mpesaPolling}
              >
                {currencyInfo.symbol} {code}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="form-group">
          <label className="form-label">Select Amount ({currency})</label>
          <div className="amount-buttons">
            {currentCurrency.presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                className={`amount-btn ${selectedAmount === amt ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amt)}
                disabled={isLoading || mpesaPolling}
              >
                {currentCurrency.symbol}{amt.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="custom-amount">
            <input
              type="number"
              placeholder={`Or enter custom amount in ${currency}`}
              value={amount}
              onChange={handleCustomAmount}
              className="custom-amount-input"
              min="1"
              step="0.01"
              disabled={isLoading || mpesaPolling}
            />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div className="payment-methods">
            {paymentMethods
              .filter(method => method.currencies.includes(currency))
              .map((method) => (
                <label key={method.id} className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                    disabled={isLoading || mpesaPolling}
                  />
                  <span className="payment-method-content">
                    <span className="payment-icon">{method.icon}</span>
                    <span className="payment-name">{method.name}</span>
                  </span>
                </label>
              ))}
          </div>
        </div>

        {/* Dynamic Payment Fields */}
        {renderPaymentFields()}

        {/* Submit Button */}
        <button 
          type="submit" 
          className="donate-button"
          disabled={isLoading || mpesaPolling || !amount || parseFloat(amount) <= 0}
        >
          {getButtonText()}
        </button>

        {/* Security Badge */}
        <div className="security-badge">
          <span>🔒 Secure Payment · PCI Compliant</span>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;