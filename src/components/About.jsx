import bg from "../images/vedio.png";
import line from "../images/Line.svg";
import logo from "../images/Logo.svg";
import logo2 from "../images/Logo2.svg";
import logo3 from "../images/Logo3.svg";
import logo4 from "../images/Logo4.svg";
import logo5 from "../images/Logo5.svg";

const About = () => {
  return (
    <section className="w-[90%] py-[20px] lg:py-0 min-h-screen mx-auto flex flex-col justify-center">
      <div className="flex flex-wrap justify-center lg:justify-between gap-[30px] lg:gap-0">
        <div className="w-full lg:w-[500px] px-[5%] lg:px-0 flex flex-col items-start gap-[30px]">
          <span className="flex">
            <img src={line} className="mr-2" />
            Know About us
          </span>
          <h1 className="font-bold text-[30px] pl-0 md:pl-[80px]">
            We provide a place for children with special needs
          </h1>
          <p className="pl-0 md:pl-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
            <br />
            <br /> Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et
            justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
            tristique posuere.
          </p>
          <button className="w-[150px] h-[50px] bg-[#F2C94C] rounded font-medium ml-0 md:ml-[80px]">
            Learn more
          </button>
        </div>
        <img src={bg} className="md:w-[70%] lg:w-[400px] h-[300px] lg:h-[450px]" />
      </div>
      <div className="mt-[50px] mb-[20px] pl-[5%] lg:pl-0 text-[#1D2130] uppercase font-bold">our Supporters</div>
      <div className="marquee gap-[50px] flex overflow-hidden w-[100%] mx-auto">
        <div className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]">
          <img src={logo} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={logo5} />
        </div>
        <div
          aria-hidden="true"
          className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]"
        >
          <img src={logo} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
          <img src={logo5} />
        </div>
      </div>
    </section>
  );
};

export default About;
