import React from 'react'

const Footer = () => {
  return (
    <footer className="px-[5%] text-white bg-black py-[85px] flex flex-wrap justify-between gap-[30px] flex-col lg:flex-row">
      <h1 className="font-bold text-[18px] text-center">
        largerthan<i>i</i>
      </h1>
      <ul className="text-center text-gray-400">
        <li className="font-bold mb-[10px] text-white">Home</li>
        <li>About us</li>
        <li>What we do</li>
        <li>Team</li>
        <li>contact</li>
      </ul>
      <ul className="text-center text-gray-400">
        <li className="font-bold mb-[10px] text-white">More</li>
        <li>Projects</li>
        <li>Events</li>
        <li>Donate</li>
        <li>Blog</li>
      </ul>
      <ul className="text-center text-gray-400">
        <li className="font-bold mb-[10px] text-white">Contact</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
      </ul>
      <div>
        <h1 className="w-[300px] mx-auto lg:mx-0 font-bold text-[18px] lg:text-[30px] text-center lg:text-start">
          Subscribe to get latest updates
        </h1>
        <div className="rounded overflow-hidden flex mt-[10px] justify-center">
          <input
            type="text"
            placeholder="Email"
            className="w-[200px] h-[50px] md:w-[300px] pl-1 bg-transparent border border-gray-400 outline-none rounded-l-lg"
          />
          <button className="w-[80px] md:w-[100px] h-[50px] bg-white text-black font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer