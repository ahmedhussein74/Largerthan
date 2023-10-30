import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const Projects = () => {
  return (
    <section className="w-[90%] mx-auto py-[50px]">
      <h1 className="w-full md:w-[400px] font-bold text-[25px] md:text-[30px] mb-[20px]">
        We are creating a place where children with special needs can thrive
      </h1>
      <div className="flex justify-between flex-wrap gap-[20px]">
        <div
          style={{
            background: `url(${project1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-[280px] h-[300px] grow rounded text-white p-[30px] flex flex-col justify-between"
        >
          <h2 className="font-bold text-[30px]">
            Mission smile 1k
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button className="w-[150px] h-[50px] rounded font-bold text-black bg-white">
            Learn more
          </button>
        </div>
        <div
          style={{
            background: `url(${project2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-[280px] h-[300px] grow rounded text-white p-[30px] flex flex-col justify-between"
        >
          <h2 className="font-bold text-[30px]">Weekly excursions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button className="w-[150px] h-[50px] rounded font-bold text-black bg-white">
            Learn more
          </button>
        </div>
        <div
          style={{
            background: `url(${project3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-[280px] h-[300px] grow rounded text-white p-[30px] flex flex-col justify-between"
        >
          <h2 className="font-bold text-[30px]">Monthly public awareness</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button className="w-[150px] h-[50px] rounded font-bold text-black bg-white">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
