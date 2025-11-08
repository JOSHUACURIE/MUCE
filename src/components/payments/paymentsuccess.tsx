// components/payment/PaymentSuccess.tsx
import React from 'react';

interface PaymentSuccessProps {
  data?: {
    amount: number;
    currency: string;
    paymentMethod: string;
    phoneNumber?: string;
    transactionId: string;
    timestamp: string;
  };
  onNewDonation?: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ data, onNewDonation }) => {
  // If no data provided, show generic success message
  if (!data) {
    return (
      <div className="payment-success">
        <div className="success-icon">✅</div>
        <h2>Thank You for Your Donation!</h2>
        <p>Your support means the world to us and the communities we serve.</p>
        <div className="success-actions">
          {onNewDonation && (
            <button onClick={onNewDonation} className="new-donation-btn">
              Make Another Donation
            </button>
          )}
          <a href="/impact" className="impact-link">
            See Our Impact
          </a>
        </div>
      </div>
    );
  }

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case 'mpesa': return 'M-Pesa';
      case 'card': return 'Credit/Debit Card';
      case 'paypal': return 'PayPal';
      default: return method;
    }
  };

  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'GBP': return '£';
      default: return 'KES';
    }
  };

  return (
    <div className="payment-success">
      <div className="success-icon">✅</div>
      <h2>Thank You for Your Donation!</h2>
      <p>Your support means the world to us and the communities we serve.</p>
      
      <div className="payment-details">
        <div className="detail-item">
          <strong>Amount:</strong> {getCurrencySymbol(data.currency)}{data.amount.toLocaleString()} {data.currency}
        </div>
        <div className="detail-item">
          <strong>Payment Method:</strong> {getPaymentMethodName(data.paymentMethod)}
        </div>
        {data.phoneNumber && (
          <div className="detail-item">
            <strong>Phone:</strong> {data.phoneNumber}
          </div>
        )}
        <div className="detail-item">
          <strong>Transaction ID:</strong> {data.transactionId}
        </div>
        <div className="detail-item">
          <strong>Date:</strong> {new Date(data.timestamp).toLocaleDateString()}
        </div>
      </div>

      <div className="next-steps">
        <h4>What happens next?</h4>
        <ul>
          {data.paymentMethod === 'mpesa' && (
            <li>You will receive an M-Pesa confirmation message</li>
          )}
          {data.paymentMethod === 'card' && (
            <li>Your card has been charged successfully</li>
          )}
          {data.paymentMethod === 'paypal' && (
            <li>Your PayPal payment has been processed</li>
          )}
          <li>We'll send you a receipt via email</li>
          <li>Your donation will be put to work immediately</li>
          <li>We'll keep you updated on the impact of your gift</li>
        </ul>
      </div>

      <div className="success-actions">
        {onNewDonation && (
          <button onClick={onNewDonation} className="new-donation-btn">
            Make Another Donation
          </button>
        )}
        <a href="/impact" className="impact-link">
          See Our Impact
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;