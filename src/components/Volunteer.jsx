import bg from '../images/volunteer.png'

const Volunteer = () => {
  return (
    <section
      style={{
        backgroundSize: "cover",
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full md:w-[90%] h-[385px] mx-auto my-[50px] md:rounded-[15px] flex flex-col justify-center items-center gap-[20px]"
    >
      <h1 className="w-[90%] md:w-[650px] text-center font-bold text-[30px] text-white">
        You can contribute to provide a place for children with special needs!
      </h1>
      <div className='flex flex-wrap justify-center gap-[10px]'>
        <button className="w-[200px] h-[50px] bg-[#F2C94C] rounded font-bold">
          Join as a volunteer
        </button>
        <button className="w-[115px] h-[50px] bg-white rounded font-bold">
          Donate
        </button>
      </div>
    </section>
  );
}

export default Volunteer