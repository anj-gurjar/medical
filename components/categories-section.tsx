"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

// --- DUMMY BRAND DATA (Example) ---
const brandData: Record<number, { id: string, name: string }[]> = {
  1: [ { id: 's1', name: "Cetaphil" }, { id: 's2', name: "Dermatouch" }, ],
  2: [ { id: 'b1', name: "Himalaya BabyCare" }, { id: 'b2', name: "Pampers" }, ],
  3: [ { id: 'c1', name: "Vicks" }, { id: 'c2', name: "Dolo 650" }, ],
  4: [ { id: 'h1', name: "Horlicks" }, { id: 'h2', name: "Ensure" }, ],
  5: [ { id: 'a1', name: "Dabur" }, { id: 'a2', name: "Himalaya Wellness" }, ],
  6: [ { id: 'v1', name: "HealthKart" }, { id: 'v2', name: "Wellbeing Nutrition" }, ],
}

const categories = [
  { id: 1, name: "Skin Care", icon: "💊" },
  { id: 2, name: "Baby Essentials", icon: "👶" },
  { id: 3, name: "Cold & Flu", icon: "🤒" },
  { id: 4, name: "Health Foods", icon: "🥗" },
  { id: 5, name: "Ayurveda", icon: "🌿" },
  { id: 6, name: "Vitamins", icon: "💊" },
  { id: 7, name: "First Aid", icon: "🩹" },
  { id: 8, name: "Wellness", icon: "❤️" },
]

export default function CategoriesSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  
  const handleBrandClick = (brandName: string) => {
    setHoveredCategory(null)
    alert(`Navigating to all products by: ${brandName}`) 
  }

  const handleViewAllClick = (categoryName: string) => {
      setHoveredCategory(null)
      alert(`Navigating to all ${categoryName} products`)
  }

  return (
    // Ensure pb-40 relative z-10 for clipping fix
    <section className="px-4 py-10 md:px-8 border-t border-border pb-40 relative z-10"> 
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">For Everyday Wellness Needs</h2>
      </div>

      <div className="relative">
        <div 
          className="flex overflow-x-auto gap-10 pb-4 scroll-smooth" 
          id="categories-scroll"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-24 text-center cursor-pointer transition-opacity relative"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="bg-muted rounded-lg p-6 flex items-center justify-center text-3xl mb-2 h-24 hover:bg-muted/80 transition-colors">
                {category.icon}
              </div>
              <p className="text-xs font-medium text-foreground text-balance">{category.name}</p>

              {/* --- DROPDOWN MENU --- */}
              {hoveredCategory === category.id && brandData[category.id] && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-gray-800 text-white border border-gray-700 shadow-lg rounded-lg z-50 p-2 text-left" 
                >
                  <h4 className="font-bold text-sm text-white p-1 border-b mb-2 border-gray-600">Shop By Brand</h4>
                  <ul className="max-h-60 overflow-y-auto space-y-1">
                    {brandData[category.id].map((brand) => (
                      <li 
                        key={brand.id} 
                        className="flex items-center justify-between text-sm text-gray-200 hover:bg-gray-700 p-1 rounded cursor-pointer"
                        onClick={() => handleBrandClick(brand.name)}
                      >
                        {brand.name}
                        <ChevronRight className="w-4 h-4 text-white" />
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-2 border-t mt-2 border-gray-600">
                    <div 
                      className="flex items-center justify-center text-xs font-bold text-primary hover:text-primary/80 cursor-pointer"
                      onClick={() => handleViewAllClick(category.name)}
                    >
                        View All {category.name} Products
                    </div>
                  </div>
                </div>
              )}
              
           <img src='/image.png' alt='' />
              <p className="text-[10px] text-gray-500 font-medium mt-1 uppercase tracking-wider">
                
              </p>
             
            </div>
          ))}
        </div>
          <img src='/image.png' alt='' />
      </div>
    </section>
  )
}