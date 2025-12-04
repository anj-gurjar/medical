import Header from "../components/header"
import PromoSection from "../components/promo-section"
import CategoriesSection from "../components/categories-section"
import FeaturedProducts from "../components/featured-products"
import DealsSection from "../components/deals-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    // Ensure 'main' doesn't have a height or overflow property that is restrictive
    <main className="bg-background">
      <Header />
      <PromoSection />
      
      {/* The dropdown will overflow past this point */}
      <CategoriesSection /> 

      {/* Remove the unnecessary <br> tags and use margin-top on the next component */}
      
      <FeaturedProducts />
      <DealsSection />
      <Footer />
    </main>
  )
}