import { Building2, Home, User, Users } from "lucide-react"

export const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, badge: null, url: "/" },
    {
        id: "users",
        label: "Users",
        icon: User,
        badge: 3,
        url: "users",
        // children: [
        //     { id: "all-inbox", label: "All Inbox", url: "#" },
        //     { id: "important", label: "Important", url: "#" },
        //     { id: "spam", label: "Spam", url: "#" },
        // ],
    },
    { id: "clients", label: "Clients", icon: Users, badge: null, url: "clients" },
    { id: "settings", label: "Settings", icon: Building2, badge: null, url: "#" },
]
