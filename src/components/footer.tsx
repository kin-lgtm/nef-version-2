import React from 'react';
import { 
  Leaf, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c3c3c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Leaf className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold">NEF</h3>
                <p className="text-sm text-green-100">National Environmental Forum</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Lets conserve the nature for the posterity - Working towards environmental protection and conservation of Sri Lankas indigenous heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            {/* <ul className="space-y-2">
              <li><a href="/" className="text-green-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-green-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-green-100 hover:text-white transition-colors">Contact</a></li>
            </ul> */}
          </div>

          {/* Our Focus */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Focus</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>• Indigenous Knowledge Conservation</li>
              <li>• Environmental Protection</li>
              <li>• Community-based Solutions</li>
              <li>• Youth Environmental Education</li>
              <li>• Traditional Ecological Practices</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">NEF National Center, Peradeniya, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@nef-srilanka.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">+94 XX XXX XXXX</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 National Environmental Forum (NEF). All rights reserved.
            </p>
            <p className="text-green-200 text-sm mt-2 md:mt-0">
              Established 2012 | Protecting Sri Lankas Natural Heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;