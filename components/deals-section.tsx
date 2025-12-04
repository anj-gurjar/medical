"use client"

import { Star, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const deals = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    price: "₹30",
    originalPrice: "₹50",
    discount: "40%",
    rating: 4.4,
    image: "/paracetamol-tablet.jpg",
  },
  {
    id: 2,
    name: "Honey & Ginger Tea",
    price: "₹120",
    originalPrice: "₹180",
    discount: "33%",
    rating: 4.6,
    image: "/herbal-tea.jpg",
  },
  {
    id: 3,
    name: "Multivitamin Tablet",
    price: "₹249",
    originalPrice: "₹399",
    discount: "37%",
    rating: 4.5,
    image: "/multivitamin-tablet.jpg",
  },
  {
    id: 4,
    name: "Pain Relief Gel",
    price: "₹79",
    originalPrice: "₹130",
    discount: "39%",
    rating: 4.3,
    image: "/pain-relief-ointment.jpg",
  },
]

export default function DealsSection() {
  return (
    <section className="px-4 py-12 md:px-8 border-t border-border bg-muted/50">
      <h2 className="text-xl font-bold text-foreground mb-6">Amazing Deals You Can't Miss</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow relative"
          >
            {/* Discount badge */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              {deal.discount}
            </div>

            <div className="bg-muted aspect-square flex items-center justify-center overflow-hidden">
              <img src={deal.image || "/placeholder.svg"} alt={deal.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2">{deal.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">{deal.rating}</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-primary text-sm">{deal.price}</span>
                <span className="text-xs text-muted-foreground line-through">{deal.originalPrice}</span>
              </div>

              <Button size="sm" className="w-full gap-1 text-xs h-8">
                <Plus className="w-3 h-3" /> Add
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
