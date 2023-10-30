import family from "../images/family.svg";
import health from "../images/health.svg";
import scholarship from "../images/scholarship.svg";
import therapy from "../images/therapy.svg";
import water from "../images/water.svg";
import plant from "../images/plant.svg";

const Tricks = () => {
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
      title: "Education",
    },
    {
      img: water,
      title: "Basic amenities",
    },
    {
      img: therapy,
      title: "Therapy",
    },
    {
      img: plant,
      title: "Public outreach",
    },
  ];
  return (
    <section className="bg-[#FCEDC6] py-[50px] px-[5%] mt-[50px]">
      <h1 className="font-bold text-[30px] text-[#1D2130]">
        What we do for our kids with special needs
      </h1>
      <div className="flex gap-[30px] flex-wrap mt-[50px] justify-between">
        {objectives.map((item, index) => (
          <div key={index} className="w-full lg:w-[400px] flex items-start">
            <img src={item.img} className="mr-[20px]" />
            <div>
              <h2 className="h-[29px] font-bold text-[18px]">{item.title}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tricks;
