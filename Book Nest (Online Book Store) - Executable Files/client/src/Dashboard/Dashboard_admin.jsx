import React from "react";
import "./dashboard.css";
import HorizontalBars from "../components/HorizontalBars";
import Vertical_admin from "../components/Vertical_admin";  // Adjust the import path as necessary

const Dashboard_admin = () => {
  return (
    <div className="max-w-7xl">
      <div className="px-4">
        <div className="w-full mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10 font-alata">
              Admin Dashboard of Book Nest
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-400 text-xs font-hamone">
                  Members <br />
                  Connected
                </div>
                <div className="h-100 border-l mx-4"></div>
                <div className="flex flex-nowrap -space-x-3">
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                      alt="User Avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chat-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                >
                  Open
                </button>
              </div>
            </div>

            <hr className="my-10" />

            <div className="grid grid-cols-2 gap-x-20 ">
              <div>
                <h2 className="text-2xl font-bold mb-4 font-alata">
                    Customer Registration v/s Month
                </h2>
                <Vertical_admin />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 font-alata">
                  Sales by Genre in Previous Month
                </h2>
                <HorizontalBars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_admin;
