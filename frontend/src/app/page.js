"use client";
import React, { useState } from "react";
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
  User,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CRMDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,532",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Active Leads",
      value: "347",
      change: "+3.2%",
      icon: Target,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Conversions",
      value: "89",
      change: "+8.1%",
      icon: TrendingUp,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Activities",
      value: "1,429",
      change: "+2.4%",
      icon: Activity,
      color: "text-orange-600 bg-orange-50",
    },
  ];

  const recentDeals = [
    {
      company: "Acme Corp",
      contact: "John Smith",
      value: "$45,000",
      stage: "Negotiation",
      probability: 75,
    },
    {
      company: "Tech Solutions",
      contact: "Sarah Johnson",
      value: "$32,000",
      stage: "Proposal",
      probability: 60,
    },
    {
      company: "Global Industries",
      contact: "Mike Brown",
      value: "$78,000",
      stage: "Qualified",
      probability: 40,
    },
    {
      company: "StartupXYZ",
      contact: "Lisa Davis",
      value: "$22,000",
      stage: "Discovery",
      probability: 25,
    },
  ];

  const recentActivities = [
    {
      type: "call",
      contact: "John Doe",
      action: "Called about proposal",
      time: "2 hours ago",
    },
    {
      type: "email",
      contact: "Jane Smith",
      action: "Sent follow-up email",
      time: "4 hours ago",
    },
    {
      type: "meeting",
      contact: "Bob Johnson",
      action: "Product demo completed",
      time: "1 day ago",
    },
    {
      type: "task",
      contact: "Alice Brown",
      action: "Contract review scheduled",
      time: "2 days ago",
    },
  ];

  return (
    <div className="">
      {activeTab === "dashboard" && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-600 font-medium mt-2">
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Deals */}
            <Card>
              <CardHeader className="flex items-center justify-between p-6 border-b border-gray-200">
                <CardTitle>Recent Deals</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {recentDeals.map((deal, index) => (
                  <Card
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition-colors p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {deal.company}
                        </h4>
                        <p className="text-sm text-gray-600">{deal.contact}</p>
                        <Badge variant="outline" className="mt-1">
                          {deal.stage}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {deal.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {deal.probability}% probability
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader className="flex items-center justify-between p-6 border-b border-gray-200">
                <CardTitle>Recent Activities</CardTitle>
                <Button className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Add Activity</span>
                </Button>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {activity.type === "call" && (
                        <Phone className="h-5 w-5 text-green-600" />
                      )}
                      {activity.type === "email" && (
                        <Mail className="h-5 w-5 text-blue-600" />
                      )}
                      {activity.type === "meeting" && (
                        <Calendar className="h-5 w-5 text-purple-600" />
                      )}
                      {activity.type === "task" && (
                        <Activity className="h-5 w-5 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.contact}
                      </p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Other tab content */}
      {activeTab !== "dashboard" && (
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="capitalize">{activeTab} Section</CardTitle>
            <CardDescription>
              This section is under development. The {activeTab} features will
              be available soon.
            </CardDescription>
            <Button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              Coming Soon
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CRMDashboard;
