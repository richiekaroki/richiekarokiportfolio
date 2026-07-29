const HeroContent = () => {
  return (
    <>
      <p className="font-inter text-lg sm:text-xl md:text-2xl">My Name is</p>
      <h1 className="font-source-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl name_underline text-primary leading-tight">
        Richard <br /> Karoki 
      </h1>
      <div className="py-4 rounded-md flex flex-col justify-center items-start">
        <p className="font-inter text-sm sm:text-xl md:text-2xl [text-wrap:balance] text-muted-foreground">
          I am a
          <span className="font-source-serif text-primary-sky ml-2">Full Stack Software Engineer</span>
          <span className="block text-base sm:text-lg text-muted-foreground mt-1">
            TypeScript · React · NestJS · PostgreSQL
          </span>
        </p>
      </div>
    </>
  );
};
export default HeroContent
