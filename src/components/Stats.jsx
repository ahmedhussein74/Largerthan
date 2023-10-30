import circle from "../images/circle.png";

const Stats = () => {
  return (
    <section className="py-[50px] bg-black">
      <div className="w-[90%] mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-[30px]">
        <div>
          <h1 className="w-full md:w-[500px] font-bold text-white text-[30px] mb-[20px]">
            How we spend your donations and where it goes
          </h1>
          <p className="w-full md:w-[500px] text-white">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="w-full md:w-[500px] flex flex-wrap gap-[20px] mt-[30px]">
            <p className="text-white flex items-center grow w-[200px]">
              <span className="block w-[16px] h-[16px] bg-[#BEF3C0] mr-[10px] rounded"></span>
              40% child care home
            </p>
            <p className="text-white flex items-center grow w-[200px]">
              <span className="block w-[16px] h-[16px] bg-[#AC94F1] mr-[10px] rounded"></span>
              35% cleanliness program
            </p>
            <p className="text-white flex items-center grow w-[200px]">
              <span className="block w-[16px] h-[16px] bg-[#FFF0CA] mr-[10px] rounded"></span>
              10% helping people
            </p>
            <p className="text-white flex items-center grow w-[200px]">
              <span className="block w-[16px] h-[16px] bg-[#F9CF64] mr-[10px] rounded"></span>
              10% excursions
            </p>
            <p className="text-white flex items-center grow w-[200px]">
              <span className="block w-[16px] h-[16px] bg-[#F38FBF] mr-[10px] rounded"></span>
              5% feeding the poor
            </p>
          </div>
        </div>
        <img src={circle} alt="" />
      </div>
    </section>
  );
};

export default Stats;
