
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sprout } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-4 md:px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Sprout className="h-8 w-8 text-farm-primary mr-2" />
          <span className="text-xl font-bold text-farm-primary">AgriWisdom</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-farm-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-farm-text hover:text-farm-primary font-medium">Home</Link>
          <Link to="/courses" className="text-farm-text hover:text-farm-primary font-medium">Courses</Link>
          <Link to="/experts" className="text-farm-text hover:text-farm-primary font-medium">Experts</Link>
          <Link to="/resources" className="text-farm-text hover:text-farm-primary font-medium">Resources</Link>
          <Link to="/login">
            <Button variant="outline" className="border-farm-primary text-farm-primary hover:bg-farm-primary hover:text-white transition-colors">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-farm-primary text-white hover:bg-farm-primary/90">
              Register
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg p-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-farm-text hover:text-farm-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/courses" className="text-farm-text hover:text-farm-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/experts" className="text-farm-text hover:text-farm-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Experts</Link>
            <Link to="/resources" className="text-farm-text hover:text-farm-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full border-farm-primary text-farm-primary hover:bg-farm-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-farm-primary text-white hover:bg-farm-primary/90">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
