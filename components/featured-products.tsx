"use client"

import { Star, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Aspirin 500mg",
    price: "₹45",
    originalPrice: "₹60",
    rating: 4.5,
    reviews: 1200,
    image: "/aspirin-medicine-tablet.jpg",
  },
  {
    id: 2,
    name: "Vitamin D3 1000IU",
    price: "₹199",
    originalPrice: "₹299",
    rating: 4.8,
    reviews: 890,
    image: "/vitamin-d3-capsule.jpg",
  },
  {
    id: 3,
    name: "Cough Syrup 100ml",
    price: "₹85",
    originalPrice: "₹120",
    rating: 4.3,
    reviews: 450,
    image: "/cough-syrup-bottle.jpg",
  },
  {
    id: 4,
    name: "Face Wash 200ml",
    price: "₹159",
    originalPrice: "₹220",
    rating: 4.6,
    reviews: 2100,
    image: "/facial-cleanser-face-wash.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="px-4 py-8 md:px-8 border-t border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Most Ordered Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
          >
            <div className="bg-muted aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2">{product.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-primary">{product.price}</span>
                <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
              </div>

              <Button size="sm" className="w-full gap-2">
                <Plus className="w-4 h-4" /> Add
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
