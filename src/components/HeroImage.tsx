import logo from "../../public/portfolioLogo.jpg";
import Image from "next/image"

const HeroImage = ()  => {
    return(
        <div className="relative w-full aspect-square">
          <Image
          src={logo}
          alt="Richard Karoki - Software Developer"
          priority
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 280px, 47vw"
        />
        </div>
    )
}
export default HeroImage