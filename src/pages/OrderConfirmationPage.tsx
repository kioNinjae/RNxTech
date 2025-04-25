import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Package, Printer } from 'lucide-react';
import Button from '../components/ui/Button';
import axios from 'axios';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const date = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Fetch order details from the backend
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`/api/orders/${orderId}`);
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  // If order details are not yet fetched or loading
  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg font-semibold text-slate-900 dark:text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle className="h-6 w-6" />
            </div>
            
            <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
              Order Confirmed!
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          <div className="mt-8">
            <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Order Number</p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{orderDetails.orderId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Order Date</p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{date}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 text-lg font-medium text-slate-900 dark:text-white">
                What's Next?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Package className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                      Order Processing
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      We're preparing your items for shipment. You'll receive a notification when your order ships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Printer className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                      Order Details
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      A confirmation email has been sent to your registered email address with your order details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <Button variant="primary" size="lg" fullWidth>
                <Link to={`/orders/${orderDetails.orderId}`}>View Order Status</Link>
              </Button>
              <Button variant="outline" size="lg" fullWidth>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
