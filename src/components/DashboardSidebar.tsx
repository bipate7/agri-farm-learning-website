
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Calendar, Home, LayoutDashboard, MessageCircle, Sprout, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { 
    title: "Dashboard", 
    icon: LayoutDashboard, 
    href: "/dashboard" 
  },
  { 
    title: "My Courses", 
    icon: BookOpen, 
    href: "/dashboard/courses" 
  },
  { 
    title: "Live Sessions", 
    icon: Calendar, 
    href: "/dashboard/sessions" 
  },
  { 
    title: "Community", 
    icon: Users, 
    href: "/dashboard/community" 
  },
  { 
    title: "Expert Chat", 
    icon: MessageCircle, 
    href: "/dashboard/expert-chat" 
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <Sprout className="h-6 w-6 text-farm-primary mr-2" />
          <span className="text-lg font-bold text-farm-primary">AgriWisdom</span>
        </Link>
      </div>
      
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-farm-primary text-white"
                  : "text-gray-700 hover:bg-farm-light hover:text-farm-primary"
              )}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-farm-secondary flex items-center justify-center text-white">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Crop Farming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
