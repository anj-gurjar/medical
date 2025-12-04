"use client";

import { useState } from "react";
import Link from "next/link";

import { Search, MapPin, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-500 border-b border-green-700">
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
          We are Take Your Health First for Us
        </div>

        <div className="px-4 py-4 md:px-8 text-white">
          <div className="flex items-center justify-between gap-4 mb-4">

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                <img
                  src="/logo.png"
                  alt="Sudha Pharma"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-bold text-xl hidden sm:inline">Sudha Pharma</span>
            </div>

            {/* SEARCH BAR */}
            <div className="flex-1 max-w-md hidden md:flex items-center bg-white/20 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Search medicines..."
                className="bg-transparent ml-2 w-full outline-none placeholder:text-white/70 text-white text-sm"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              
              {/* Delivery → Open Map */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenMap(true)}
                className="gap-2 hidden sm:flex text-white hover:bg-green-600"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-xs">Delivery</span>
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-green-600">
                <ShoppingCart className="w-5 h-5" />
              </Button>

             <Link href="/login">
  <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-green-600">
    <User className="w-5 h-5" />
    <span className="hidden sm:inline">Login</span>
  </Button>
</Link>

              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-green-600">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
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

      {/* MAP MODAL */}
      {openMap && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl w-full max-w-2xl p-4 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Sudha Pharma Location</h2>
              <button onClick={() => setOpenMap(false)} className="text-red-500 font-bold">
                ✖
              </button>
            </div>

            {/* GOOGLE MAP IFRAME */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881631.657628488!2d78.0416817!3d30.326111200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909291652c4374f%3A0x1ce71accb5f343a!2sSUDHA%20PHARMA!5e0!3m2!1sen!2sin!4v1764866023265!5m2!1sen!2sin"
              width="100%"
              height="350"
              className="rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
