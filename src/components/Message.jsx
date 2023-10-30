import React from "react";

const Message = () => {
  return (
    <section className="px-[5%] py-[50px] bg-[#FCEDC6] flex flex-wrap justify-between gap-[30px]">
      <div className="w-full lg:w-[400px] text-[#1D2130]">
        <h1 className="font-bold text-[30px]">We'd love to hear from you</h1>
        <p className="text-[#525560]">
          Have any question in mind or want to enquire? Please feel free to
          contact us through the form or the following details.
        </p>
      </div>
      <div className="w-full lg:w-[400px] flex flex-col gap-[30px]">
        <div>
          <h2 className="font-bold text-[20px]">Let's talk!</h2>
          <p className="text-[#525560]">
            +234 09012346514
            <br />
            hello@largerthani.com
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[20px]">Headoffice</h2>
          <p className="text-[#525560]">8 Brewery Drive, Lagos, Nigeria.</p>
        </div>
        <div>
          <h2 className="font-bold text-[20px]">Branch Office</h2>
          <p className="text-[#525560]">
            Opp Opolo round about, Yenagoa, Bayelsa, Nigeria
          </p>
        </div>

        <p className="text-[#525560] text-[30px] flex gap-[10px]">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </p>
      </div>
    </section>
  );
};

export default Message;
