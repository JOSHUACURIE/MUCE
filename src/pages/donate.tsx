// pages/Donate.tsx
import React, { useState } from 'react';
import DonationForm from '../components/payments/donateform';
import PaymentSuccess from '../components/payments/paymentsuccess';
import '../styles/globals.css';

const Donate: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [paymentData, setPaymentData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePaymentSuccess = (data: any) => {
    setPaymentData(data);
    setPaymentStatus('success');
  };

  const handlePaymentError = (error: string) => {
    setErrorMessage(error);
    setPaymentStatus('error');
  };

  const handleNewDonation = () => {
    setPaymentStatus('idle');
    setPaymentData(null);
    setErrorMessage('');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Donate</span>
        </div>
        <h1 className="page-title">Make a Donation</h1>
        <p className="page-subtitle">
          Your support enables us to continue our community transformation work
        </p>
      </div>

      <div className="page-content">
        {paymentStatus === 'success' ? (
          <PaymentSuccess 
            data={paymentData} 
            onNewDonation={handleNewDonation}
          />
        ) : (
          <div className="donation-layout">
            {/* Donation Form */}
            <div className="donation-main">
              <DonationForm 
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
              
              {paymentStatus === 'error' && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Impact Sidebar */}
            <div className="impact-sidebar">
              <h3>Your Impact</h3>
              <div className="impact-items">
                <div className="impact-item">
                  <div className="impact-icon">🎓</div>
                  <div className="impact-text">
                    <strong>KES 500</strong> provides school supplies for one child
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-icon">💼</div>
                  <div className="impact-text">
                    <strong>KES 1,000</strong> supports small business training
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-icon">🌱</div>
                  <div className="impact-text">
                    <strong>KES 2,000</strong> funds environmental conservation projects
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-icon">🏥</div>
                  <div className="impact-text">
                    <strong>KES 5,000</strong> supports community health initiatives
                  </div>
                </div>
              </div>

              <div className="transparency-note">
                <h4>Transparency Promise</h4>
                <p>We are committed to using your donations effectively and transparently.</p>
                <a href="/transparency" className="transparency-link">
                  View Our Financial Reports →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;