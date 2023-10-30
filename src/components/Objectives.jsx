import line from "../images/Line.svg";
import child from "../images/child.png";
import family from "../images/family.svg";
import health from "../images/health.svg";
import scholarship from "../images/scholarship.svg";
import therapy from "../images/therapy.svg";

const Objectives = () => {
  const objectives = [
    {
      img: family,
      title: "Family support",
    },
    {
      img: health,
      title: "Health benefits",
    },
    {
      img: scholarship,
      title: "Scholarships",
    },
    {
      img: therapy,
      title: "Therapy",
    },
  ];
  return (
    <section className="min-h-screen bg-[#FCEDC6] flex flex-col justify-center">
      <div className="w-[90%] mx-auto">
        <div className="uppercase flex">
          <img src={line} className="mr-2" />
          What we do
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-[450px] flex flex-col gap-[30px]">
            <h1 className="font-bold text-[30px]">
              Some services we provide for our children
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            {objectives.map((item, index) => (
              <div key={index} className="w-full md:w-[400px] flex items-start">
                <img src={item.img} className="mr-[20px]" />
                <div>
                  <h2 className="h-[29px] font-bold text-[18px]">
                    {item.title}
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img src={child} className="hidden lg:block lg:w-[450px] h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Objectives;
