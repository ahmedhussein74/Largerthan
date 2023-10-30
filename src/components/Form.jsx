import React from "react";

const Form = () => {
  return (
    <form className="w-[90%] md:w-[500px] mx-auto py-[50px] flex flex-col gap-[20px]">
      <div className="flex flex-col">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          className="h-[40px] outline-none border-b bg-stone-50"
        />
      </div>
      <div className="flex flex-col">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          className="h-[40px] outline-none border-b bg-stone-50"
        />
      </div>
      <div className="flex flex-col">
        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="h-[40px] outline-none border-b bg-stone-50"
        />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="h-[40px] outline-none border-b bg-stone-50"
        />
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          placeholder="Email"
          className="min-h-[100px] outline-none border bg-stone-50"
        />
      </div>
      <button className="mx-auto h-[50px] w-[150px] font-bold rounded bg-[#F2C94C]">
        Send Message
      </button>
    </form>
  );
};

export default Form;
