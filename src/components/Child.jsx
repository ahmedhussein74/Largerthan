import bg from "../images/small.png";

const Child = () => {
  return (
    <section className="w-[90%] mx-auto mt-[50px] flex justify-center lg:justify-between flex-wrap gap-[30px]">
      <div className="w-full lg:w-[400px] xl:w-[600px]">
        <h1 className="font-bold text-[30px] text-[#1D2130]">
          We are working cross country
        </h1>
        <p className="mt-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <img src={bg} alt="" />
    </section>
  );
};

export default Child;
