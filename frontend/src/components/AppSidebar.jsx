"use client";
import { Building2, User } from "lucide-react"
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";
import { sidebarItems } from "@/data/sidebar";

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Sidebar
      className={`${
        sidebarCollapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Building2 className="h-5 w-5 text-white" />
        </div>
        {!sidebarCollapsed && (
          <div>
            <h1 className="text-xl font-bold text-gray-900">TimeWatch</h1>
          </div>
        )}
      </div>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <SidebarMenuItem key={item.id} className="flex flex-col">
                    {/* Parent item */}
                    <SidebarMenuButton
                      asChild
                      className={`w-full flex items-center justify-start space-x-3 px-3 py-3 rounded-lg ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <a
                        href={item.url}
                        className="flex items-center space-x-3"
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                        {!sidebarCollapsed && (
                          <>
                            <span className="font-medium">{item.label}</span>
                            {item.badge && (
                              <Badge variant="destructive">{item.badge}</Badge>
                            )}
                          </>
                        )}
                      </a>
                    </SidebarMenuButton>

                    {/* Child items */}
                    {!sidebarCollapsed && item.children && (
                      <div className="ml-10 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.url}
                            className="block text-sm text-gray-500 hover:text-blue-600 hover:font-medium"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        {!sidebarCollapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Alex Johnson
            </p>
            <p className="text-xs text-gray-500 truncate">Sales Manager</p>
          </div>
        )}
      </div>
    </Sidebar>
  );
}
