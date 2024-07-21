import React from "react";
import bookPic from "../../assets/awardbooks.png";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-bannercolor px-4 lg:px-24">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12">
        {/* picture */}
        <div>
          <img
            src="src\assets\logo.png"
            alt=""
            className="w-[30rem] h-[30rem] mr-24"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 leading-snug font-alata">
            2023 National Book Awards for Fiction Shortlist
          </h2>
          <Link to="/shop" className="block mt-8">
            <button className="hover:bg-logotextcolor tracking-wider font-alata text-white font-semibold px-5 py-2 rounded bg-black transition-all duration-300 ">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
