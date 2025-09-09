"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Building2, 
  Phone, 
  Mail, 
  Calendar, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown,
  Plus,
  Filter,
  Download,
  TrendingUp,
  DollarSign,
  Target,
  Activity,
  ChevronRight,
  User
} from 'lucide-react';

const CRMDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'leads', label: 'Leads', icon: Target, badge: '12' },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'deals', label: 'Deals', icon: DollarSign, badge: '5' },
    { id: 'activities', label: 'Activities', icon: Activity },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { title: 'Total Revenue', value: '$124,532', change: '+12.5%', icon: DollarSign, color: 'text-green-600 bg-green-50' },
    { title: 'Active Leads', value: '347', change: '+3.2%', icon: Target, color: 'text-blue-600 bg-blue-50' },
    { title: 'Conversions', value: '89', change: '+8.1%', icon: TrendingUp, color: 'text-purple-600 bg-purple-50' },
    { title: 'Activities', value: '1,429', change: '+2.4%', icon: Activity, color: 'text-orange-600 bg-orange-50' }
  ];

  const recentDeals = [
    { company: 'Acme Corp', contact: 'John Smith', value: '$45,000', stage: 'Negotiation', probability: 75 },
    { company: 'Tech Solutions', contact: 'Sarah Johnson', value: '$32,000', stage: 'Proposal', probability: 60 },
    { company: 'Global Industries', contact: 'Mike Brown', value: '$78,000', stage: 'Qualified', probability: 40 },
    { company: 'StartupXYZ', contact: 'Lisa Davis', value: '$22,000', stage: 'Discovery', probability: 25 }
  ];

  const recentActivities = [
    { type: 'call', contact: 'John Doe', action: 'Called about proposal', time: '2 hours ago' },
    { type: 'email', contact: 'Jane Smith', action: 'Sent follow-up email', time: '4 hours ago' },
    { type: 'meeting', contact: 'Bob Johnson', action: 'Product demo completed', time: '1 day ago' },
    { type: 'task', contact: 'Alice Brown', action: 'Contract review scheduled', time: '2 days ago' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">CRM Pro</h1>
                <p className="text-xs text-gray-500">Sales Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                {!sidebarCollapsed && (
                  <>
                    <span className="ml-3 font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
                <p className="text-xs text-gray-500 truncate">Sales Manager</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className={`h-5 w-5 text-gray-600 transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h1>
                <p className="text-sm text-gray-500">Welcome back, Alex! Here's what's happening today.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 overflow-y-auto h-full">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                          <p className="text-sm text-green-600 font-medium mt-2">{stat.change}</p>
                        </div>
                        <div className={`p-3 rounded-lg ${stat.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Deals */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Deals</h3>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Filter className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentDeals.map((deal, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{deal.company}</h4>
                            <p className="text-sm text-gray-600">{deal.contact}</p>
                            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
                              {deal.stage}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{deal.value}</p>
                            <p className="text-sm text-gray-600">{deal.probability}% probability</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
                      <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Plus className="h-4 w-4" />
                        <span>Add Activity</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {activity.type === 'call' && <Phone className="h-5 w-5 text-green-600" />}
                            {activity.type === 'email' && <Mail className="h-5 w-5 text-blue-600" />}
                            {activity.type === 'meeting' && <Calendar className="h-5 w-5 text-purple-600" />}
                            {activity.type === 'task' && <Activity className="h-5 w-5 text-orange-600" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{activity.contact}</p>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tab content placeholder */}
          {activeTab !== 'dashboard' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize">{activeTab} Section</h3>
                <p className="text-gray-600 mt-2">This section is under development. The {activeTab} features will be available soon.</p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Coming Soon
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CRMDashboard;