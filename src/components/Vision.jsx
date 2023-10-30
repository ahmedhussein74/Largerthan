import bg from "../images/vision.png";
import logo from "../images/Logo.svg";
import logo2 from "../images/Logo2.svg";
import logo3 from "../images/Logo3.svg";
import logo4 from "../images/Logo4.svg";
import logo5 from "../images/Logo5.svg";

const Vision = () => {
  return (
    <section className="min-h-fit bg-[#FCEDC6] mt-[100px] md:mt-[200px] relative pt-[120px] lg:pt-[300px] pb-[50px]">
      <img
        src={bg}
        className="w-[90%] h-[200px] md:h-[300px] lg:h-[450px] mx-auto absolute top-[-70px] md:top-[-150px] left-[5%]"
      />

      <div className="w-[90%] mx-auto mt-[50px] flex flex-wrap justify-around gap-[30px]">
        <div className="w-[400px] grow flex flex-col gap-[15px]">
          <span className="uppercase font-bold">our mission</span>
          <h2 className="font-bold text-[20px]">
            We make sure to provide inclusive care for children with special
            needs
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="w-[400px] grow flex flex-col gap-[15px]">
          <span className="uppercase font-bold">our vision</span>
          <h2 className="font-bold text-[20px]">
            Provide more inclusive care to children around the world
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>

      <div className="mt-[50px] mb-[20px] pl-[5%] text-[#1D2130] uppercase font-bold">
        our Supporters
      </div>
      <div className="marquee gap-[50px] flex overflow-hidden w-[90%] mx-auto">
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

export default Vision;
