import bike from "../images/bike.png";
import child2 from "../images/child2.png";
import letters from "../images/letters.png";

const Goals = () => {
  const objectives = [
    {
      img: letters,
      name: "Autism care day",
    },
    {
      img: child2,
      name: "Autism care day",
    },
    {
      img: bike,
      name: "Caring for children with cerebral palsy",
    },
  ];
  return (
    <section className="bg-[#FCEDC6] px-[5%] py-[50px] flex flex-wrap justify-center lg:justify-between gap-[30px]">
      <div className="w-full lg:w-[400px] flex flex-col gap-[30px]">
        <h1 className="font-bold text-[30px] text-[#1D2130]">
          Our goal is to provide inclusive care for children with special needs
        </h1>
        <p>
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <button className="bg-[#F2C94C] rounded font-bold w-[140px] h-[50px]">
          Read more
        </button>
      </div>
      <div className="bg-white p-5 rounded-[20px] flex flex-col gap-[20px]">
        {objectives.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[450px] xl:w-[500px] flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-[10px]"
          >
            <img src={item.img} className="" />
            <article className="text-center md:text-start">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <span className="text-[#525560]">15th Nov 2022</span>
              <p className="text-[#525560]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
