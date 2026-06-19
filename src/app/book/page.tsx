import type { Metadata } from "next";
import BookTablePage from "@/views/BookTablePage";

export const metadata: Metadata = {
  title: "Book a Table",
};

export default function BookRoute() {
  return <BookTablePage />;
}
