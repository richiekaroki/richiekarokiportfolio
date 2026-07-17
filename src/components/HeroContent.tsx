const HeroContent = () => {
  return (
    <>
      <h3 className="font-inter text-lg sm:text-xl md:text-2xl">My Name is</h3>
      <h1 className="font-source-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl name_underline text-primary leading-tight">
        Richard <br /> Karoki .
      </h1>
      <div className="py-4 rounded-md flex flex-col justify-center items-start overflow-hidden">
        <div className="font-inter text-sm sm:text-xl md:text-2xl [text-wrap:balance] text-muted-foreground">
          I am a Software Engineer &
          <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.sm)*1.5)] sm:h-[calc(theme(fontSize.xl)*1.5)] md:h-[calc(theme(fontSize.2xl)*1.5)] overflow-hidden">
            <ul className="block text-left font-source-serif text-base sm:text-xl md:text-2xl leading-tight [&_li]:block animate-text-slide">
              <li className="text-primary-sky">Full Stack Developer</li>
              <li className="text-primary-sky">Open Source Contributor</li>
              <li className="text-primary-sky">AI Enthusiast</li>
              <li className="text-primary-sky">Tech Blogger</li>
              <li className="text-primary-sky">Problem Solver</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};
export default HeroContent
