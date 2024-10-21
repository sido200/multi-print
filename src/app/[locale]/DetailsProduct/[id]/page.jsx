import { getProducts } from "@/app/services/products";
import DetailsProductContent from "@/components/DetailsProductContent/DetailsProductContent";
import "./DetailsProduct.css";
// Fonction SSR pour récupérer les métadonnées dynamiques
export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const res = await getProducts();
    const product = res.data.products.find((p) => p._id === id);

    if (product) {
      return {
        title: `${product.titlefr} - Details`,
        description: product.descfr,
        openGraph: {
          title: product.titlefr,
          description: product.descfr,
        },
      };
    }
  } catch (error) {
    console.error("Failed to generate metadata:", error);
  }

  return {
    title: "Product Details",
    description: "Details about the selected product.",
  };
}

export default function DetailsProductPage({ params }) {
  return <DetailsProductContent productId={params.id} />;
}
