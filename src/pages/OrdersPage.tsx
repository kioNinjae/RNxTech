import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Your mock data or dynamic data fetching
const fetchOrders = async () => {
  // Simulate an API call (replace with your actual API logic)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'ORD123456',
          date: '2024-02-15',
          status: 'delivered',
          total: 82999,
          items: [
            {
              name: 'UltraPhone 13 Pro',
              quantity: 1,
              price: 82999,
              imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          ]
        },
        {
          id: 'ORD123457',
          status: 'shipped',
          date: '2024-02-20',
          total: 24998,
          items: [
            {
              name: 'NoiseCancel Pro Headphones',
              quantity: 1,
              price: 20999,
              imageUrl: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              name: 'Wireless Charging Pad',
              quantity: 1,
              price: 3999,
              imageUrl: 'https://images.pexels.com/photos/5717960/pexels-photo-5717960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          ]
        }
      ]);
    }, 1500); // Simulating network delay
  });
};

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders();
      setOrders(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Orders</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Track and manage your orders
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order: any) => (
          <div
            key={order.id}
            className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Order Header */}
            <div className="border-b border-slate-200 p-4 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-slate-400" />
                    <span className="font-medium text-slate-900 dark:text-white">
                      Order #{order.id}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1">{getStatusText(order.status)}</span>
                  </div>
                  <Link
                    to={`/order/${order.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {order.items.map((item: any, index: number) => (
                <div key={index} className="flex items-center p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                      ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Footer */}
            <div className="border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Total Amount
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  ₹{order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
