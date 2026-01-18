import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Biar tiap pindah halaman, scroll balik ke paling atas
  }, [pathname]);

  return null;
}