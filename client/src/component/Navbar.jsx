import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [state, setState] = useState(false);

  
  return (
    <nav className="w-[98vw] h-[8vh] left-0  bg-opacity-60 bg-gradient-to-r from-teal-200 via-sky-400 to-teal-200">
      <div className="relative top-0 left-0 right-0 bg-opacity-25 z-50  border-b-2 items-center px-4 max-w-screen-2xl mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="flex ">
            <a href="https://glauniversity.in:8085/Main/Index" target="_blank">
              <img src="" width={70} height={70} alt="Float UI logo" />
            </a>
            <p className="text-3xl m-auto text-black font-bold ">
              Biotech Club
            </p>
          </div>
          <div className="md:hidden">
            <button
              className="text-blue-500 hover:text-black"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <div>
              <Link
                className="text-black hover:text-2xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
                to={"/"}
              >
                Home
              </Link>
            </div>
            <div>
            <Link
                to={"/event"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Event
              </Link>
            </div>
            <div>
              <Link
                to={"/gallery"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Gallery
              </Link>
            </div>
            <div>
              <Link
                to={"/team"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Team
              </Link>
            </div>
            <div>
              <Link
                to={"/about"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                About
              </Link>
            </div>

           

            {/* {isLoggedIn ? (
              <div className="space-x-4">
                <Link
                  to={"/Logout"}
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Logout
                </Link>
              </div>
            ) : 
            null} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
