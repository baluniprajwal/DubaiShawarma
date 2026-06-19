import type { Metadata } from "next";
import MenuPage from "@/views/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuRoute() {
  return <MenuPage />;
}
