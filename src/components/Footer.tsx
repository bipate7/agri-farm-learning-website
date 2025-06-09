
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 mr-2 text-green-400" />
              <span className="text-xl font-bold text-white">AgriWisdom</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering farmers with knowledge, community, and expert guidance to cultivate success through modern agricultural education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-green-400 transition-colors">Courses</Link></li>
              <li><Link to="/experts" className="text-gray-300 hover:text-green-400 transition-colors">Experts</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-green-400 transition-colors">Resources</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-green-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-green-400 transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-green-400 transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-300 hover:text-green-400 transition-colors">Online Courses</Link></li>
              <li><Link to="/experts" className="text-gray-300 hover:text-green-400 transition-colors">Expert Consultation</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Certification Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Mobile App</a></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-green-400 transition-colors">Research Papers</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Weather Updates</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-1 text-green-400" />
                <span className="text-gray-300 text-sm">info@agriwisdom.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-1 text-green-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-green-400" />
                <span className="text-gray-300 text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive farming tips, course updates, and agricultural news.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} AgriWisdom. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Cookies</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
