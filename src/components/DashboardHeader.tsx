
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-farm-primary">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative max-w-md w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search courses, experts..." 
              className="pl-10 w-full border-gray-300 focus:border-farm-accent focus:ring-farm-accent"
            />
          </div>
          
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-farm-accent text-white text-xs flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
