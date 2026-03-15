import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/WhatsApp Image 2026-03-15 at 9.09.23 PM (1).jpeg';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Mint Water Logo" className="h-8 w-8 object-contain" />
              <h3 className="text-xl font-bold tracking-tight">MINT WATER</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium Packaged Drinking Water.<br />
              Pure Water · Pure Vibe
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Presence</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Retail Orders</li>
              <li>Wholesale Distribution</li>
              <li>Bulk Orders</li>
              <li>Custom Branding</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/mintwater_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Mint Water. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
