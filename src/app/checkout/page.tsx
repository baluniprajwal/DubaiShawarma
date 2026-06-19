import type { Metadata } from "next";
import CheckoutPage from "@/views/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutRoute() {
  return <CheckoutPage />;
}
