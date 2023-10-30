import bg from "../images/journey.png";

const Journey = () => {
  return (
    <section className="w-[90%] min-h-[576px] mx-auto p-[15px] md:p-[30px] bg-[#F2C94C] flex flex-wrap justify-center lg:justify-between items-center gap-[30px] rounded-[10px]">
      <div className="w-full lg:w-[400px]">
        <span>OUR JOURNEY </span>
        <h1 className="font-bold text-[24px] md:text-[28px]">How we raised 34M</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh.
        </p>
        <div className="flex gap-3">
          <p className="text-[12px] text-center">
            <span className="font-bold text-[18px]">34M+</span>
            <br />
            Donation Received
          </p>
          <p className="text-[12px] text-center">
            <span className="font-bold text-[18px]">400M+</span>
            <br />
            Donation Received
          </p>
          <p className="text-[12px] text-center">
            <span className="font-bold text-[18px]">20M+</span>
            <br />
            Donation Received
          </p>
        </div>
      </div>
      <img src={bg} className="w-full lg:w-[425px]" />
    </section>
  );
};

export default Journey;
