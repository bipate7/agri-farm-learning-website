
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-farm-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">AgriWisdom</span>
            </div>
            <p className="text-farm-light mb-4">
              Empowering farmers with knowledge, community, and expert guidance to cultivate success.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-farm-light hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-farm-light hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/experts" className="text-farm-light hover:text-white transition-colors">Experts</Link></li>
              <li><Link to="/resources" className="text-farm-light hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/login" className="text-farm-light hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-farm-light hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-farm-light">info@agriwisdom.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-farm-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-farm-light">123 Farm Lane, Harvest City, HC 56789</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-farm-light mb-4">Subscribe to receive farming tips and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md text-farm-text focus:outline-none focus:ring-2 focus:ring-farm-accent"
              />
              <button
                type="submit"
                className="w-full bg-farm-accent hover:bg-farm-accent/90 text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-farm-light/30 mt-8 pt-6 text-center text-farm-light">
          <p>&copy; {new Date().getFullYear()} AgriWisdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
