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
import { useCart } from "@/context/CartContext";
import { CartProvider } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { RestaurantProvider } from "@/context/RestaurantContext";
import { isScrollLocked } from "@/utils/scroll-lock";

gsap.registerPlugin(ScrollTrigger);

function LenisEffects() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { setIsCartOpen } = useCart();
  const { setShowSelectionModal } = useRestaurant();

  useEffect(() => {
    if (!lenis) {
      window.scrollTo(0, 0);
      return;
    }

    const checkScrollLock = () => {
      const isLocked =
        isScrollLocked() ||
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
    setIsCartOpen(false);
    setShowSelectionModal(false);

    ScrollTrigger.clearScrollMemory?.();

    let cancelled = false;

    const hardResetScrollState = () => {
      if (cancelled) {
        return;
      }

      lenis?.start();
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      lenis?.resize?.();
      ScrollTrigger.refresh();
    };

    const softRefreshScrollState = () => {
      if (cancelled) {
        return;
      }

      lenis?.start();
      lenis?.resize?.();
      ScrollTrigger.refresh();
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        hardResetScrollState();
      });
    });

    const timers = [
      window.setTimeout(softRefreshScrollState, 120),
      window.setTimeout(softRefreshScrollState, 320),
      window.setTimeout(softRefreshScrollState, 650),
    ];

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname, lenis, setIsCartOpen, setShowSelectionModal]);

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
