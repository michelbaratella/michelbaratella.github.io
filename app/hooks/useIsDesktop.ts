import { useEffect, useState } from "react";

// Simple helper hook to check if we are on desktop
export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // 768px matches Tailwind's "md" breakpoint
    const media = window.matchMedia("(min-width: 768px)");

    // Set initial state
    setIsDesktop(media.matches);

    // Listen for resize changes
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isDesktop;
}
