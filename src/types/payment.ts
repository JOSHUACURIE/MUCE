// types/payment.ts
export interface PaymentMethod {
  id: string;
  name: string;
  type: 'mobile_money' | 'card' | 'bank';
  country?: string;
  currencies: string[];
  icon: string;
}

export interface DonationFormData {
  amount: number;
  currency: string;
  paymentMethod: string;
  // M-Pesa specific
  phoneNumber?: string;
  // Card specific
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
  email?: string;
  // International
  country?: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  transactionId?: string;
  checkoutRequestID?: string;
  paymentMethod?: string;
}