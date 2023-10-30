const Hero = () => {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg flex flex-col items-center justify-center gap-[20px]"
    >
      <div className="text-[30px] lg:text-[50px] font-bold text-white text-center">
        Inclusive care for children <br /> with special needs
      </div>
      <div className="w-[90%] flex justify-center flex-wrap gap-[20px]">
        <button className="bg-white rounded text-black font-bold h-[50px] w-[200px]">
          What we do
        </button>
        <button className="rounded text-white border font-bold h-[50px] w-[150px]">
          join us
        </button>
      </div>
    </section>
  );
};

export default Hero;
