
import "./Footer.css";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../app/assets/whiteLogo.png"
import { Outfit } from 'next/font/google';


const outfit = Outfit({ subsets: ["latin"] });
export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <div className="logo">
            <Image src={whiteLogo} alt="white-logo" />
          </div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to
          </p>
          <button className={outfit.className}>News Lettres</button>
        </div>
        <div className="right-footer">
          <ul>
            <li className="title-liste">Explore</li>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li className="title-liste">Useful links</li>
            <li>Give feed back</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social">
          <FiInstagram color="white" size={32}/>
          <FiLinkedin color="white" size={32}/>
          <FiFacebook  color="white" size={32}/>
        </div>
        <p>© 2024 multiprint all right reserved</p>
      </div>
    </footer>
  );
}
