import Image from "next/image";
import productImage from "../../app/assets/product.jpg";
import "./CardProduct.css"
import Link from "next/link";
export default function CardProduct() {
  return (
    <Link href="/DetailsProduct">
    <div className="card-product">
      
    <div className="img">  <Image src={productImage} alt="product" /></div>
      <h3>Product Name</h3>
      <h4>Type</h4>
    </div>
    </Link>
  );
}
