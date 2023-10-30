import award from "../images/award.svg";

const Awards = () => {
  const prizes = [
    {
      prize: "Best NGO Award",
      year: 2021,
      place: "Berlin, Germany",
    },
    {
      prize: "Global Award",
      year: 2018,
      place: "New York, USA",
    },
    {
      prize: "CSN Award",
      year: 2014,
      place: "New Delhi, India",
    },
    {
      prize: "NGO Award",
      year: 2010,
      place: "Vienna, Austria",
    },
  ];
  return (
    <section className="w-[90%] mx-auto my-[50px]">
      <h1 className="font-bold text-[24px] md:text-[30px] text-center">
        Awards & Recognitions
      </h1>
      <div className="flex flex-col md:flex-row justify-center lg:justify-between gap-[30px] mt-[30px]">
        {prizes.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={award} alt="" />
            <h2 className="font-bold text-[18px]">{item.prize}</h2>
            <h3 className="font-bold">{item.year}</h3>
            <p className="text-gray-400">{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
