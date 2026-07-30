import logo from "../../../public/portfolioLogo.jpg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative group">
      {/* Decorative corner accent */}
      <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary-sky opacity-60 z-10" />
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary-sky opacity-60 z-10" />

      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-primary-sky/10 blur-2xl rounded-2xl scale-110 group-hover:bg-primary-sky/20 transition-colors duration-700" />

      {/* Image container */}
      <div className="relative w-[280px] h-[360px] md:w-[310px] md:h-[400px] lg:w-[340px] lg:h-[440px] overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-primary-sky/5">
        <Image
          src={logo}
          alt="Richard Karoki, Software Engineer and Designer"
          priority
          fill
          className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
          sizes="(max-width: 720px) 280px, (max-width: 976px) 310px, 340px"
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default HeroImage;
