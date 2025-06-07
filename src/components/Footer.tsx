
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-farm-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">AgriWisdom</span>
            </div>
            <p className="text-farm-light mb-4">
              Empowering farmers with knowledge, community, and expert guidance to cultivate success through modern agricultural education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-farm-light hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-farm-light hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/experts" className="text-farm-light hover:text-white transition-colors">Experts</Link></li>
              <li><Link to="/resources" className="text-farm-light hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/dashboard" className="text-farm-light hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/login" className="text-farm-light hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-farm-light hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-farm-light hover:text-white transition-colors">Online Courses</Link></li>
              <li><Link to="/experts" className="text-farm-light hover:text-white transition-colors">Expert Consultation</Link></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Certification Programs</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Mobile App</a></li>
              <li><Link to="/resources" className="text-farm-light hover:text-white transition-colors">Research Papers</Link></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Weather Updates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact & Newsletter</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-farm-accent" />
                <span className="text-farm-light">info@agriwisdom.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-farm-accent" />
                <span className="text-farm-light">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-farm-accent" />
                <span className="text-farm-light">123 Krishi Bhavan, Agricultural Hub, New Delhi, 110001</span>
              </li>
            </ul>
            
            <h4 className="text-md font-medium mb-3 text-white">Stay Updated</h4>
            <p className="text-farm-light text-sm mb-3">Subscribe to receive farming tips, course updates, and agricultural news.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-md text-farm-text focus:outline-none focus:ring-2 focus:ring-farm-accent"
                required
              />
              <button
                type="submit"
                className="w-full bg-farm-accent hover:bg-farm-accent/90 text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-4">
              <h4 className="text-md font-medium mb-3 text-white">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-md text-farm-light hover:text-white transition-colors text-sm">
                  <span>📱 iOS</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-md text-farm-light hover:text-white transition-colors text-sm">
                  <span>🤖 Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-farm-light/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-farm-light text-center md:text-left">&copy; {new Date().getFullYear()} AgriWisdom. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
              <a href="#" className="text-farm-light hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-farm-light hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-farm-light hover:text-white transition-colors text-sm">Cookies</a>
              <a href="#" className="text-farm-light hover:text-white transition-colors text-sm">Accessibility</a>
              <a href="#" className="text-farm-light hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
