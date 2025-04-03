"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetId = anchor.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          
          // Add hash to URL without triggering scroll
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick);
    
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
  
  return null;
} 