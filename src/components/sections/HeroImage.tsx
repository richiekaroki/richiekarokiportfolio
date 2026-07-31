import logo from "../../../public/portfolioLogo.jpg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative group">
      <div className="relative w-[260px] h-[340px] sm:w-[280px] sm:h-[360px] md:w-[310px] md:h-[400px] lg:w-[340px] lg:h-[440px] overflow-hidden rounded-xl border border-border/50 shadow-xl">
        <Image
          src={logo}
          alt="Richard Karoki, Software Engineer and Designer"
          priority
          fill
          placeholder="blur"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 260px, (max-width: 720px) 280px, (max-width: 976px) 310px, 340px"
        />
      </div>
    </div>
  );
};

export default HeroImage;
