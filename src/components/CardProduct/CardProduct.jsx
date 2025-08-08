import "./CardProduct.css";
import Link from "next/link";
import { useLocale } from "next-intl";
import { BASE_API_URL } from './../../config/api';


export default function CardProduct({ product }) {
  const localActive = useLocale();
  return (
    <Link href={`/${localActive}/DetailsProduct/${product?._id}`}>
      <div className="card-product">
        <div className="img">
          <img src={BASE_API_URL.replace("/api/v1", "/images/") + product?.images[0].split("/")[product?.images[0].split("/").length - 1]} alt="product" />
        </div>

        <h3>{product[`title${localActive}`]}</h3>

        <h4>{product.category[`title${localActive}`]}</h4>
      </div>
    </Link>
  );
}
