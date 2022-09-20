import Clock from "./clock";
import WelcomeSVG from "./svg/welcome.svg";
const Hero = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col bg-neutral-50 w-screen h-screen p-0 m-0 "
    >
      <h1 className="text-pale tracking-widest m-auto text-ink pt-32">
        jsph.dev
      </h1>

      <Clock />

      <div className="absolute inset-0">
        <WelcomeSVG />
      </div>
    </section>
  );
};

export default Hero;
