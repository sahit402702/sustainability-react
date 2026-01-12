import { useEffect } from "react";

/**
 * Custom hook to scroll to top when component mounts
 * Useful for ensuring users start at the top of new pages
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
