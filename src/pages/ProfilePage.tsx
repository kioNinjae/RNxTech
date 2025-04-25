import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Mail, Phone, MapPin, Package, Heart, 
  Settings, LogOut, CreditCard, Bell, Shield,
  Calendar, Clock
} from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 7058116765',
    address: 'Ambivali, Kalyan West, Maharashtra',
    dateJoined: '2024-01-15',
    lastLogin: '2024-02-28',
    notifications: {
      orders: true,
      promotions: false,
      security: true,
      newsletter: false
    }
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would update the user profile in the backend
  };

  const recentOrders = [
    {
      id: 'ORD123456',
      date: '2024-02-25',
      status: 'Delivered',
      total: '₹82,999'
    },
    {
      id: 'ORD123457',
      date: '2024-02-20',
      status: 'Processing',
      total: '₹24,998'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Profile Information</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>

            {isEditing ? (
              <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Address
                    </label>
                    <textarea
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      rows={3}
                      className="block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <Button type="submit" variant="primary">
                    Save Changes
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex items-center">
                      <User className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{profile.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Full Name</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{profile.email}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{profile.phone}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{profile.address}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Address</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="mb-4 font-medium text-slate-900 dark:text-white">Account Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {new Date(profile.dateJoined).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Member Since</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {new Date(profile.lastLogin).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Last Login</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="mb-4 font-medium text-slate-900 dark:text-white">Recent Orders</h3>
                  <div className="space-y-4">
                    {recentOrders.map(order => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Package className="mr-3 h-5 w-5 text-blue-500" />
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              Order #{order.id}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {order.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {order.total}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'orders':
        return (
          <div>
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Order History</h2>
            <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="p-4">
                <Link to="/orders" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  View all orders →
                </Link>
              </div>
            </div>
          </div>
        );
      
      case 'wishlist':
        return (
          <div>
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">My Wishlist</h2>
            <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="p-4">
                <Link to="/wishlist" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  View wishlist →
                </Link>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Account Settings</h2>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 font-medium text-slate-900 dark:text-white">Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.notifications.orders}
                    onChange={(e) => setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        orders: e.target.checked
                      }
                    })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
                  />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Order updates</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.notifications.promotions}
                    onChange={(e) => setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        promotions: e.target.checked
                      }
                    })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
                  />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Promotions and deals</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.notifications.security}
                    onChange={(e) => setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        security: e.target.checked
                      }
                    })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
                  />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Security alerts</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.notifications.newsletter}
                    onChange={(e) => setProfile({
                      ...profile,
                      notifications: {
                        ...profile.notifications,
                        newsletter: e.target.checked
                      }
                    })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
                  />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Newsletter</span>
                </label>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 font-medium text-slate-900 dark:text-white">Security</h3>
              <div className="space-y-4">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Change Password
                </Button>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Two-Factor Authentication
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 font-medium text-slate-900 dark:text-white">Payment Methods</h3>
              <Button variant="outline" size="sm">
                Manage Payment Methods
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <User className="h-full w-full p-4 text-slate-400" />
              </div>
              <h2 className="text-lg font-medium text-slate-900 dark:text-white">{user?.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{user?.email}</p>
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </button>
              
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === 'orders'
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <Package className="mr-3 h-5 w-5" />
                Orders
              </button>
              
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === 'wishlist'
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <Heart className="mr-3 h-5 w-5" />
                Wishlist
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === 'settings'
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>
              
              <button
                onClick={logout}
                className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;