import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CreditCard, Smartphone } from 'lucide-react';
import Button from '../ui/Button';

interface PaymentOptionsProps {
  amount: number;
  onPaymentComplete: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ amount, onPaymentComplete }) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | null>(null);
  const [upiId, setUpiId] = useState('');

  // Mock UPI payment link - in production, this would come from your backend
  const upiPaymentLink = `upi://pay?pa=your-merchant-upi@bank&pn=RNxTech&am=${amount}&cu=INR&tn=Order%20Payment`;

  const handleCardPayment = async () => {
    // Implement Stripe card payment logic here
    try {
      // Mock successful payment
      setTimeout(() => {
        onPaymentComplete();
      }, 1500);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  const handleUpiPayment = async () => {
    // In a real app, verify UPI ID and process payment
    try {
      // Mock successful payment
      setTimeout(() => {
        onPaymentComplete();
      }, 1500);
    } catch (error) {
      console.error('UPI payment failed:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedMethod('card')}
          className={`flex items-center rounded-lg border p-4 transition-colors ${
            selectedMethod === 'card'
              ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
              : 'border-slate-200 hover:border-blue-500 dark:border-slate-700'
          }`}
        >
          <CreditCard className="mr-2 h-5 w-5" />
          <span>Credit/Debit Card</span>
        </button>

        <button
          onClick={() => setSelectedMethod('upi')}
          className={`flex items-center rounded-lg border p-4 transition-colors ${
            selectedMethod === 'upi'
              ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
              : 'border-slate-200 hover:border-blue-500 dark:border-slate-700'
          }`}
        >
          <Smartphone className="mr-2 h-5 w-5" />
          <span>UPI Payment</span>
        </button>
      </div>

      {selectedMethod === 'card' && (
        <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <h3 className="mb-4 text-lg font-medium">Card Payment</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full rounded-md border border-slate-300 p-2 dark:border-slate-600 dark:bg-slate-800"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full rounded-md border border-slate-300 p-2 dark:border-slate-600 dark:bg-slate-800"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full rounded-md border border-slate-300 p-2 dark:border-slate-600 dark:bg-slate-800"
                />
              </div>
            </div>
            <Button variant="primary" onClick={handleCardPayment} fullWidth>
              Pay ₹{amount.toFixed(2)}
            </Button>
          </div>
        </div>
      )}

      {selectedMethod === 'upi' && (
        <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <h3 className="mb-4 text-lg font-medium">UPI Payment</h3>
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <QRCodeSVG value={upiPaymentLink} size={200} />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Scan QR code with any UPI app to pay
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400">Or pay using UPI ID</span>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">UPI ID</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="username@upi"
                  className="flex-1 rounded-md border border-slate-300 p-2 dark:border-slate-600 dark:bg-slate-800"
                />
                <Button variant="primary" onClick={handleUpiPayment}>
                  Verify & Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
        <h4 className="mb-2 font-medium">Secure Payments</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          All payments are secured with end-to-end encryption. We accept all major UPI apps including Google Pay, PhonePe, Paytm, and more.
        </p>
      </div>
    </div>
  );
};

export default PaymentOptions;