import {
  Package,
  Clock,
  Shield,
  Phone,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react"

export default function Footer() {
  return (
    // Uses theme colors: bg-foreground (dark) and text-background (light/white)
    <footer className="bg-foreground text-background">
      
      {/* --- 1. Benefits Section --- */}
      <div className="px-4 py-8 md:px-8 border-b border-muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6" />
            <div className="text-sm">
              <p className="font-semibold">Fast Delivery</p>
              <p className="text-xs opacity-80">Same day delivery available</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <div className="text-sm">
              <p className="font-semibold">24/7 Available</p>
              <p className="text-xs opacity-80">Always open for you</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <div className="text-sm">
              <p className="font-semibold">Verified Products</p>
              <p className="text-xs opacity-80">100% authentic medicines</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <div className="text-sm">
              <p className="font-semibold">Support Helpline</p>
              <p className="text-xs opacity-80">Call 9557944571</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. Main Links & CTA Section --- */}
      <div className="px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          
          {/* Column 1: About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-100">About Us</a></li>
              <li><a href="#" className="hover:opacity-100">Careers</a></li>
              <li><a href="#" className="hover:opacity-100">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 2: Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-100">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100">Track Order</a></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-100">Return Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4 & 5: Quick Actions (WhatsApp/Call) */}
          <div className="col-span-2">
            <h4 className="font-semibold mb-4">Quick Actions & Support</h4>
            <div className="space-y-4">
              
              {/* WhatsApp Order/Booking Link */}
              <a 
                href="https://wa.me/919557944571?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order%20for%20medicines." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Order/Book via WhatsApp</p>
                  <p className="text-xs opacity-90">Click here to chat 📞 (10:00 AM - 9:00 PM)</p>
                </div>
              </a>

              {/* Call to Order Link */}
              <a href="tel:9557944571" className="flex items-center gap-3 p-3 bg-primary/20 rounded-md hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Order by Phone (Call Now)</p>
                  <p className="text-xs opacity-80">9557944571 SUDHA-PHARMA</p>
                </div>
              </a>
              
            </div>
          </div>
          
        </div>

        {/* --- 3. Social Media & Copyright --- */}
        <div className="border-t border-muted pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <h4 className="font-semibold hidden sm:block text-sm mr-2">Follow Us:</h4>
            <a href="#" aria-label="Follow us on Facebook" className="hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Follow us on Instagram" className="hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright Info */}
          <div className="text-center md:text-right">
            <p>&copy; 2025 Sudha Pharma. All rights reserved.</p>
            <p className="text-xs mt-1">Licensed pharmacy | GDPL compliant | ISO certified</p>
          </div>
        </div>
      </div>
    </footer>
  )
}