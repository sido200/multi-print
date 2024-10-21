import Image from "next/image";
import productImage from "../../app/[locale]/assets/product.jpg";
import "./CardProduct.css";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function CardProduct({ product }) {
  const localActive = useLocale();
  return (
    <Link href={`/${localActive}/DetailsProduct/${product?._id}`}>
      <div className="card-product">
        <div className="img">
          <img src={product?.images[0]} alt="product" />
        </div>

        <h3>{product[`title${localActive}`]}</h3>

        <h4>{product.category[`title${localActive}`]}</h4>
      </div>
    </Link>
  );
}
