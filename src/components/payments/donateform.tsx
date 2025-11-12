// components/payment/DonationForm.tsx
import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import '../../styles/globals.css';

interface DonationFormProps {
  publicKey: string;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ publicKey, onSuccess}) => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('KES');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currencies = ['KES', 'USD', 'EUR', 'GBP'];

  const validateForm = (): boolean => {
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
  };

  const fwConfig = {
    public_key: publicKey,
    tx_ref: Date.now().toString(),
    amount: amount ? parseFloat(amount) : 0,
    currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email || 'customer@example.com',
      phone_number: phone || '+0000000000',
      name: name || 'Customer',
    },
    customizations: {
      title: 'Millimani United Donations',
      description: 'Support our community projects',
      logo: 'https://yourwebsite.com/logo.png',
    },
  };

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'amount': setAmount(value); break;
      case 'name': setName(value); break;
      case 'email': setEmail(value); break;
      case 'phone': setPhone(value); break;
      case 'currency': setCurrency(value); break;
    }

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePaymentClick = () => {
    if (!validateForm()) {
      return;
    }
    // The FlutterWave button will handle the payment
  };

  return (
    <div className="donation-form-container">
      <h3>Support Our Mission</h3>
      <p>Your donation helps transform communities worldwide</p>

      <div className="form-group">
        <label>Full Name</label>
        <input
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
        <label>Email Address</label>
        <input
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
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+254712345678"
          value={phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={`form-input ${errors.phone ? 'error' : ''}`}
          required
        />
        {errors.phone && <div className="field-error">{errors.phone}</div>}
      </div>

      <div className="form-group">
        <label>Currency</label>
        <select 
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
        <label>Amount ({currency})</label>
        <input
          type="number"
          placeholder={`Enter amount in ${currency}`}
          value={amount}
          onChange={(e) => handleChange('amount', e.target.value)}
          className={`form-input ${errors.amount ? 'error' : ''}`}
          min="1"
          required
        />
        {errors.amount && <div className="field-error">{errors.amount}</div>}
      </div>

      <div onClick={handlePaymentClick}>
        <FlutterWaveButton
          {...fwConfig}
          text={`Donate ${currency} ${amount}`}
          className="flutterwave-button"
          callback={(response) => {
            console.log('Payment response:', response);
            onSuccess?.(response);
            closePaymentModal();
          }}
          onClose={() => console.log('Payment closed')}
        />
      </div>
    </div>
  );
};

export default DonationForm;