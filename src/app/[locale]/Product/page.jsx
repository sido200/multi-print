// app/product/page.js

import ProductGrid from "@/components/ProductGrid/ProductGrid";
import "./Product.css";
export const metadata = {
  title: "Products",
};
export default function ProductPage() {
  return <ProductGrid />;
}
