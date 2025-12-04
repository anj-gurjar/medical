"use client"

import { ChevronRight } from "lucide-react"

const careNavigationItems = [
  {
    id: 1,
    title: "Professional Consult",
    subtitle: "24/7 Virtual Care",
    bg: "bg-blue-600", // Dark Blue for Professional Care
    text: "text-white",
  },
  {
    id: 2,
    title: "Preventative Health",
    subtitle: "Vaccinations & Wellness",
    bg: "bg-green-600", // Dark Green for Wellness
    text: "text-white",
  },
  {
    id: 3,
    title: "Locate Your Pharmacy",
    subtitle: "Find Stores Near You",
    bg: "bg-gray-700", // Dark Gray/Charcoal for Utility
    text: "text-white",
  },
]

export default function CareNavigation() {
  return (
    <section className="px-4 py-6 md:px-8">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Health & Care Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {careNavigationItems.map((item) => (
          <div
            key={item.id}
            // Applying darker background and setting text color to white
            className={`${item.bg} ${item.text} rounded-lg p-6 flex items-center justify-between cursor-pointer 
            shadow-lg transform hover:scale-[1.02] transition-all duration-300`}
          >
            <div>
              {/* Text will automatically be white */}
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {/* Changed subtitle color to be slightly lighter for contrast */}
              <p className="text-sm opacity-90 font-medium mt-1">{item.subtitle}</p>
            </div>
            {/* Setting icon color to white */}
            <ChevronRight className="w-6 h-6" />
          </div>
        ))}
      </div>
    </section>
  )
}