import adrian from "../images/adrian.png";
import dale from "../images/dale.png";
import ellen from "../images/ellen.png";
import francis from "../images/francis.png";
import freddy from "../images/freddy.png";
import kyla from "../images/kyla.png";
import leonard from "../images/leonard.png";
import miriam from "../images/miriam.png";

const Team = () => {
  const team = [
    { img: leonard, name: "Leonard John Davies", role: "Cofounder, CEO" },
    { img: francis, name: "Francis Weber", role: "Vice Chairman" },
    { img: kyla, name: "Kyla Obrien", role: "Head of Authority" },
    { img: adrian, name: "Adrian Dixon", role: "Support Executive" },
    { img: freddy, name: "Freddy Busby", role: "Project Manager" },
    { img: dale, name: "Dale Banks", role: "Accountatnt, Finance" },
    { img: miriam, name: "Miriam Middleton", role: "Cofounder, CEO" },
    { img: ellen, name: "Ellen Walton", role: "Vice Chairman" },
  ];
  return (
    <section className="w-[90%] mx-auto mt-[50px]">
      <h1 className="font-bold text-[25px] md:text-[40px] text-center">
        Meet our team
      </h1>
      <p className="w-[90%] md:w-[500px] mx-auto text-[#525560] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="flex flex-wrap justify-center md:justify-between gap-[20px] mt-[30px]">
        {team.map((item, index) => (
          <div
            key={index}
            className="w-[200px] md:max-w-[215px] grow text-center"
          >
            <img src={item.img} className="mx-auto" />
            <h2 className="font-bold text-[#1D2130] text-[20px]">
              {item.name}
            </h2>
            <p className="text-gray-500">{item.role}</p>
            <div className="flex justify-center gap-[10px] text-gray-600 text-[20px] mt-1">
              <i className="fa-brands fa-facebook cursor-pointer"></i>
              <i className="fa-brands fa-twitter cursor-pointer"></i>
              <i className="fa-brands fa-linkedin cursor-pointer"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
