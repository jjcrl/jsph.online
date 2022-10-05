import Clock from "./clock";
import WelcomeSVG from "./svg/welcome.svg";

const Hero = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col bg-neutral-50 w-screen h-screen p-0 m-0 "
    >
      <h2 className="text-pale tracking-widest m-auto pt-48">jsph.online</h2>

      <div className="absolute inset-0 mix-blend-difference">
        {/* <WelcomeSVG /> */}
      </div>
      <Clock />
    </section>
  );
};

export default Hero;
