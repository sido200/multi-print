
import Image from "next/image"
import icon1 from "../../app/assets/icon1.png"
import icon2 from "../../app/assets/icon2.png"
import icon3 from "../../app/assets/icon3.png"
import "./DataCard.css"
export default function DataCard() {
  return (
    <div className="data-card">
   <div className="icon">
    <Image src={icon1} alt="" />
   </div>
   <h3>Visionary Consultation</h3>
   <p>Your aspirations fuel our creativity, We begin by listening intently, understanding your goals, and envisioning.</p>
   <button>See more</button>

    </div>
  )
}
