import Marquee from "react-fast-marquee";
import "./MarqueeSection.css";
import aigle from "../../app/[locale]/assets/partenaires/aigle.jpg";
import dulcesol from "../../app/[locale]/assets/partenaires/dulcesol.jpg";
import jumbo from "../../app/[locale]/assets/partenaires/jumbo.jpg";
import palmary from "../../app/[locale]/assets/partenaires/palmary.jpg";
import snax from "../../app/[locale]/assets/partenaires/snax.jpg";
import Image from "next/image";
export default function MarqueeSection() {
  return (
    <>
      <Marquee pauseOnHover={true} speed={50} loop={0} autoFill={true} className="marquee">
        <Image src={aigle} alt="aigle" className="partenaire-image"></Image>
        <Image src={dulcesol} alt="aigle" className="partenaire-image"></Image>
        <Image src={jumbo} alt="aigle" className="partenaire-image"></Image>
        <Image src={palmary} alt="aigle" className="partenaire-image"></Image>
        <Image src={snax} alt="snax" className="partenaire-image"></Image>
      </Marquee>
    </>
  );
}
