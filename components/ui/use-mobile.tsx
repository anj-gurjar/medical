// hooks/use-mobile.ts

import { useState, useEffect } from 'react';

// Define a common mobile breakpoint (e.g., 768px, the standard for Tailwind/Bootstrap)
const MOBILE_BREAKPOINT = 768; 

export function useIsMobile() {
  // 1. Initialize state based on the current window size (only runs on client-side)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Do nothing if window is not defined (during SSR)
    }

    // 2. Define the handler function
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // 3. Set up listeners
    window.addEventListener('resize', handleResize);

    // Ensure the state is correctly set on mount
    handleResize();

    // 4. Clean up listeners on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs once on mount

  return isMobile;
}