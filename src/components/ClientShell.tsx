"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RestaurantSelectorModal from "@/components/RestaurantSelectorModal";
import { CartProvider } from "@/context/CartContext";
import { RestaurantProvider } from "@/context/RestaurantContext";

gsap.registerPlugin(ScrollTrigger);

function LenisEffects() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      window.scrollTo(0, 0);
      return;
    }

    const checkScrollLock = () => {
      const isLocked =
        document.body.style.overflow === "hidden" ||
        document.documentElement.style.overflow === "hidden" ||
        document.body.classList.contains("overflow-hidden");

      if (isLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    checkScrollLock();

    const observer = new MutationObserver(checkScrollLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    const onScroll = () => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    lenis.on("scroll", onScroll);

    return () => {
      observer.disconnect();
      gsap.ticker.remove(update);
      lenis.off("scroll", onScroll);
      lenis.start();
    };
  }, [lenis]);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
}

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <RestaurantProvider>
        <ReactLenis root options={{ autoRaf: false }}>
          <LenisEffects />
          <div className="noise" />
          <div className="bg-brand-yellow text-accent min-h-screen selection:bg-accent selection:text-white transition-colors duration-500">
            <Navbar />
            <CartDrawer />
            <RestaurantSelectorModal />
            <main>{children}</main>
            <Footer />
          </div>
        </ReactLenis>
      </RestaurantProvider>
    </CartProvider>
  );
}
