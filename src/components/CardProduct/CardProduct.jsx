import Image from "next/image";
import productImage from "../../app/[locale]/assets/product.jpg";
import "./CardProduct.css"
import Link from "next/link";
import { useLocale } from "next-intl";
export default function CardProduct() {
  const localActive = useLocale();
  return (
    <Link href={`/${localActive}/DetailsProduct`}>
    <div className="card-product">
      
    <div className="img">  <Image src={productImage} alt="product" /></div>
      <h3>Product Name</h3>
      <h4>Type</h4>
    </div>
    </Link>
  );
}
