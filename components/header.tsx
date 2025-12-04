import { Search, MapPin, ShoppingCart, Menu, User } from "lucide-react" // 1. Import User icon
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    // 2. Change 'bg-background' (white/dark) to a green color, like 'bg-green-500'
    <header className="sticky top-0 z-50 bg-green-500 border-b border-green-700">
      {/* Top banner - Keep primary text for contrast on green */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
      We are Take Your Health First for Us
      </div>

      {/* Main header */}
      {/* 3. Adjust text color to white ('text-white') for readability on the green background */}
      <div className="px-4 py-4 md:px-8 text-white"> 
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {/* 4. Adjust logo background color for contrast if necessary */}
            <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center font-bold text-lg">
              {/* Note: 'ima' should be 'img' and should be self-closing */}
              <img src='/logo.png' alt='Sudha Pharma' className="w-full h-full object-cover rounded-lg" />
            </div>
            <span className="font-bold text-xl hidden sm:inline">Sudha Pharma</span>
          </div>

          <div className="flex-1 max-w-md hidden md:flex items-center bg-white/20 rounded-full px-4 py-2"> {/* 5. Adjusted search bar background */}
            <Search className="w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search medicines..."
              className="bg-transparent ml-2 w-full outline-none placeholder:text-white/70 text-white text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex text-white hover:bg-green-600">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">Delivery</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-green-600">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            
            {/* 6. Added Login Button */}
            <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-green-600">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Login</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-green-600">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden items-center bg-white/20 rounded-full px-3 py-2">
          <Search className="w-4 h-4 text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-2 w-full outline-none placeholder:text-white/70 text-white text-sm"
          />
        </div>
      </div>
    </header>
  )
}