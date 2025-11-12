// components/payment/DonationForm.tsx
import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/globals.css';

declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

interface DonationFormProps {
  publicKey: string;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

interface FlutterwaveConfig {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: {
    email: string;
    phone_number: string;
    name: string;
  };
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
  callback: (response: any) => void;
  onclose: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ publicKey, onSuccess, onError }) => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('KES');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currencies = ['KES', 'USD', 'EUR', 'GBP'];

  // Load Flutterwave script dynamically
  useEffect(() => {
    const scriptId = 'flutterwave-checkout-script';
    
    if (document.getElementById(scriptId)) {
      return; // Script already loaded
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Flutterwave script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load Flutterwave script');
      onError?.('Payment system is temporarily unavailable. Please try again later.');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [onError]);

  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [amount, name, email, phone]);

  const handleFlutterwavePayment = useCallback(() => {
    if (!validateForm()) {
      return;
    }

    if (!window.FlutterwaveCheckout) {
      onError?.('Payment system is still loading. Please try again in a moment.');
      return;
    }

    setIsLoading(true);

    const config: FlutterwaveConfig = {
      public_key: publicKey,
      tx_ref: `donation-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      amount: parseFloat(amount),
      currency,
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email,
        phone_number: phone,
        name,
      },
      customizations: {
        title: 'Millimani United Donations',
        description: 'Support our community projects',
        logo: 'https://yourwebsite.com/logo.png',
      },
      callback: (response: any) => {
        setIsLoading(false);
        console.log('Payment response:', response);
        
        if (response.status === 'successful') {
          onSuccess?.(response);
        } else {
          onError?.(`Payment failed: ${response.message || 'Unknown error'}`);
        }
      },
      onclose: () => {
        setIsLoading(false);
        console.log('Payment modal closed');
      }
    };

    try {
      window.FlutterwaveCheckout(config);
    } catch (error) {
      setIsLoading(false);
      console.error('Flutterwave checkout error:', error);
      onError?.('Failed to initialize payment. Please try again.');
    }
  }, [publicKey, amount, currency, email, phone, name, validateForm, onSuccess, onError]);

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'amount': 
        setAmount(value); 
        break;
      case 'name': 
        setName(value); 
        break;
      case 'email': 
        setEmail(value); 
        break;
      case 'phone': 
        setPhone(value); 
        break;
      case 'currency': 
        setCurrency(value); 
        break;
    }

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFlutterwavePayment();
  };

  return (
    <div className="donation-form-container">
      <h3>Support Our Mission</h3>
      <p>Your donation helps transform communities worldwide</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`form-input ${errors.name ? 'error' : ''}`}
            required
          />
          {errors.name && <div className="field-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`form-input ${errors.email ? 'error' : ''}`}
            required
          />
          {errors.email && <div className="field-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            placeholder="+254712345678"
            value={phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`form-input ${errors.phone ? 'error' : ''}`}
            required
          />
          {errors.phone && <div className="field-error">{errors.phone}</div>}
          <small className="input-hint">
            Include country code (e.g., +254 for Kenya, +44 for UK)
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select 
            id="currency"
            value={currency} 
            onChange={(e) => handleChange('currency', e.target.value)} 
            className="form-input"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount ({currency}) *</label>
          <input
            id="amount"
            type="number"
            placeholder={`Enter amount in ${currency}`}
            value={amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            className={`form-input ${errors.amount ? 'error' : ''}`}
            min="1"
            step="0.01"
            required
          />
          {errors.amount && <div className="field-error">{errors.amount}</div>}
        </div>

        <button
          type="submit"
          className={`flutterwave-button  ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Processing...
            </>
          ) : (
            `Donate ${currency} ${amount || '0'}`
          )}
        </button>
      </form>

      <div className="payment-security">
        <div className="security-badge">
          <span>🔒</span>
          <span>Secure payment powered by Flutterwave</span>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;