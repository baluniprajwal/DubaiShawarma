import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailPage from "@/views/ItemDetailPage";
import { menuData } from "@/data";

type ItemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return menuData.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: ItemPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = menuData.find((menuItem) => menuItem.id === id);

  if (!item) {
    return {
      title: "Item Not Found",
    };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ItemRoute({ params }: ItemPageProps) {
  const { id } = await params;
  const item = menuData.find((menuItem) => menuItem.id === id);

  if (!item) {
    notFound();
  }

  return <ItemDetailPage itemId={id} />;
}
