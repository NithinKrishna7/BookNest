import React from "react";
import BannerCard from "../shared/BannerCard";

export const Banner = () => {
  return (
    <div className=" bg-bannercolor  px-4 lg:px-24 flex items-center">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40">
        {/* right side */}
        <div className="md:w-1/2 h-full">
          <BannerCard />
        </div>

        {/* left side */}
        <div className="md:w-1/2 space-y-8 bg-bannercolor">
          <h1 className="lg:text-5xl text-5xl font-alata font-bold text-black mb-5 lg:leading-tight leading-snug">
            Your One stop solution for all kinds of books{" "}
            <span className="text-logotextcolor">for the best prices</span>
          </h1>
          <p className="font-hamone">
            Find and read more books you'll love, and keep track of the books
            you want to read. Be part of the world's largest community of book
            lovers on Booknest.
          </p>
          <div>
            <input
              type="search"
              placeholder="Search a book here"
              className="py-2 px-2 rounded-s-sm "
            />
            <button className="bg-logotextcolor px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 font-alata">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
