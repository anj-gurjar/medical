// "use client" // Needed since we are using state

// import { Search, MapPin, ShoppingCart, Menu, User, X } from "lucide-react" 
// import { Button } from "../components/ui/button" // Assuming you have a Button component
// import { useState } from "react" 

// // --- Login Drawer Component ---
// // Note: Removed the ':any' type annotations for clarity in a pure JS context.
// const LoginDrawer = ({ isOpen, onClose }) => {
//     return (
//         // The drawer container: uses fixed position and z-50 for stacking
//         <div 
//             className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out 
//                 ${isOpen ? 'translate-x-0' : 'translate-x-full'}` // Controls slide-in/out effect
//             }
//         >
//             {/* Drawer Header: Includes Logo and Close Button */}
//             <div className="flex justify-between items-center p-4 bg-green-600 text-white">
//                 <div className="flex items-center gap-2">
//                     {/* Header Image and Name */}
//                     <img src='/logo.png' alt='Sudha Pharma' className="w-8 h-8 rounded-full" />
//                     <span className="font-bold text-lg">Sudha Pharma Login</span>
//                 </div>
//                 <button onClick={onClose} className="p-1 rounded-full hover:bg-green-700">
//                     <X className="w-5 h-5" />
//                 </button>
//             </div>

//             {/* Login Form Content */}
//             <div className="p-4 text-gray-800">
//                 <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
//                 <p className="mb-4">Log in or create an account to view products and place orders.</p>
//                 {/* --- Input Fields Mockup --- */}
//                 <input type="email" placeholder="Email or Phone Number" className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-green-500 focus:ring-green-500" />
//                 <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
//                     Continue
//                 </Button>
//                 <p className="text-center text-sm mt-4">New user? <a href="#" className="text-green-600 font-semibold hover:underline">Sign Up</a></p>
//             </div>
//         </div>
//     )
// }


// export default function Header() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer

//   return (
//     <>
//       {/* 2. Header Content */}
//       <header className="sticky top-0 z-50 bg-green-500 border-b border-green-700">
//         {/* Top banner */}
//         <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
//         We are Take YOur Health First for Us
//         </div>

//         {/* Main header */}
//         <div className="px-4 py-4 md:px-8 text-white"> 
//           <div className="flex items-center justify-between gap-4 mb-4">
//             <div className="flex items-center gap-2">
//               {/* Logo */}
//               <div className="w-10 h-10 bg-green-700 text-white rounded-lg flex items-center justify-center font-bold text-lg">
//                 <img src='/logo.png' alt='Sudha Pharma' className="w-full h-full object-cover rounded-lg" />
//               </div>
//               <span className="font-bold text-xl hidden sm:inline">Sudha Pharma</span>
//             </div>

//             <div className="flex-1 max-w-md hidden md:flex items-center bg-white/20 rounded-full px-4 py-2">
//               <Search className="w-5 h-5 text-white" />
//               <input
//                 type="text"
//                 placeholder="Search medicines..."
//                 className="bg-transparent ml-2 w-full outline-none placeholder:text-white/70 text-white text-sm"
//               />
//             </div>

//             <div className="flex items-center gap-3">
//               <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex text-white hover:bg-green-600">
//                 <MapPin className="w-4 h-4" />
//                 <span className="text-xs">Delivery</span>
//               </Button>
//               <Button variant="ghost" size="icon" className="text-white hover:bg-green-600">
//                 <ShoppingCart className="w-5 h-5" />
//               </Button>
              
//               {/* Login Button: Opens the drawer */}
//               <Button 
//                 variant="ghost" 
//                 size="sm" 
//                 className="gap-2 text-white hover:bg-green-600"
//                 onClick={() => setIsDrawerOpen(true)} 
//               >
//                 <User className="w-5 h-5" />
//                 <span className="hidden sm:inline">Login</span>
//               </Button>
              
//               <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-green-600">
//                 <Menu className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Mobile search */}
//           <div className="flex md:hidden items-center bg-white/20 rounded-full px-3 py-2">
//             <Search className="w-4 h-4 text-white" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent ml-2 w-full outline-none placeholder:text-white/70 text-white text-sm"
//             />
//           </div>
//         </div>
//       </header>

//       {/* 3. The Login Side Drawer Component */}
//       <LoginDrawer 
//         isOpen={isDrawerOpen} 
//         onClose={() => setIsDrawerOpen(false)} 
//       />

//       {/* Optional: Overlay/Backdrop */}
//       {isDrawerOpen && (
//           <div 
//               className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
//               onClick={() => setIsDrawerOpen(false)} // Close if background is clicked
//           />
//       )}
//     </>
//   )
// }