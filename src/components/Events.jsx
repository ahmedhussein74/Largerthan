import arrow from "../images/arrow.svg";

const Events = () => {
  return (
    <section className="w-[90%] mx-auto pb-[50px]">
      <h1 className="font-bold text-[30px]">Our Events</h1>
      <div className="flex justify-between flex-wrap gap-[20px] mt-[30px]">
        <article className="w-[300px] min-h-[190px] p-2 bg-[#F2C94C] rounded-[10px] grow flex justify-around items-center flex-wrap">
          <p>
            <span className="text-[40px] font-bold">13</span>
            <br />
            APR
          </p>
          <div>
            <span>NEXT EVENT</span>
            <h2 className="font-bold text-start md:text-center text-[18px]">
              A day with our wonderful children{" "}
            </h2>
          </div>
          <img
            src={arrow}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
          />
        </article>
        <article className="w-[300px] min-h-[190px] p-2 bg-[#F2C94C] rounded-[10px] grow flex justify-around items-center flex-wrap">
          <p>
            <span className="text-[40px] font-bold">25</span>
            <br />
            APR
          </p>
          <div>
            <span>NEXT EVENT</span>
            <h2 className="font-bold text-start md:text-center text-[18px]">
              A day with our wonderful children{" "}
            </h2>
          </div>
          <img
            src={arrow}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
          />
        </article>
      </div>
    </section>
  );
};

export default Events;
