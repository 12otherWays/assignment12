import React, { useState, useEffect } from "react";
import {
  BsGoogle,
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header() {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(true);

  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  function handleClick() {
    setClick(!click);
  }
  function handleChange() {
    setChange(!change);
  }

  return (
    <div className="flex flex-row justify-between h-24">
      <div className="flex flex-row items-center justify-center h-full md:text-xl font-semibold text-zinc-500">
        <img
          src="https://scontent.fbho4-4.fna.fbcdn.net/v/t39.30808-6/239863707_108866198220164_919631384046398190_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pg2d8j2wzVsAX-rBSOz&_nc_ht=scontent.fbho4-4.fna&oh=00_AfCsAbLAM5UQhCnhA5tFoI15Merv8VI1St1-rt6-UAR1rA&oe=642633DF"
          alt=""
          className="md:h-20 h-16"
        />
        FLEXAGN
      </div>
      <div className="flex md:flex-col justify-between items-center flex-row">
        <div className="flex flex-row justify-between w-full">
          <div className="flex md:flex-row flex-col">
            <div className="mr-4 flex justify-center items-center rounded-lg bg-lime-500 p-2 m-1 md:m-2 md:text-md text-sm">
              Admission Enquire
            </div>
            <div className="mr-4 flex justify-center items-center rounded-lg bg-orange-500 p-2 m-1 md:m-2 md:text-md text-sm">
              Admission Enquire
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center text-md font-semibold text-zinc-500">
            <BsFillTelephoneFill
              style={{ color: "Blue" }}
              className="mr-5 h-4 w-5"
            />
            9886865380
          </div>
          <div className="hidden md:flex flex-row justify-center items-center">
            <BsFacebook style={{ color: "Blue" }} className="m-2 h-5 w-5" />
            <BsInstagram style={{ color: "Blue" }} className="m-2 h-5 w-5" />
            <BsGoogle style={{ color: "Blue" }} className="m-2 h-5 w-5" />
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mx-4">About us </li>
            <li className="mx-4">
              <button onClick={handleClick}>Academics</button>
              <ul
                className={
                  click
                    ? "z-10 absolute text-white mt-4"
                    : "hidden z-10 absolute text-white mt-4"
                }
              >
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center border-b-2 border-black">
                  CBSE Curriculum
                </li>
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center border-b-2 border-black">
                  Teaching Methodology
                </li>
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center border-b-2 border-black">
                  Early Childhood Program
                </li>
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center border-b-2 border-black">
                  Teacher Manuals
                </li>
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center border-b-2 border-black">
                  Parent's Corner
                </li>
                <li className="text-sm py-1 px-3 bg-blue-500 w-48 flex  items-center">
                  Experienced Teachers
                </li>
              </ul>
            </li>
            <li className="mx-4">Admissions</li>
            <li className="mx-4">Student Life</li>
            <li className="mx-4">Infrastructure</li>
            <li className="mx-4">Hostel</li>
            <li className="mx-4">Reach Us</li>
          </ul>
        </div>
        {size.width <= 768 ? (
          <GiHamburgerMenu
            className="h-8 w-8"
            style={{ color: "Navy" }}
            onClick={handleChange}
          />
        ) : (
          ""
        )}

        <div
          className={
            change
              ? "hidden w-full h-4/5 bg-blue-900 absolute top-0 left-0 p-8"
              : "w-full h-4/5 bg-blue-900 absolute top-0 left-0 p-8"
          }
        >
          <div className="flex justify-end">
            <ImCross
              style={{ color: "white" }}
              className="h-6 w-6"
              onClick={handleChange}
            />
          </div>
          <div>
            <ul className="text-white text-2xl flex justify-center flex-col items-center">
              <li className="m-4">About us </li>
              <li className="m-4" onClick={handleClick}>
                Admissions
              </li>
              {click ? (
                <ul className="list-disc">
                  <li className="ml-32 pl-4 text-md">Admissions</li>
                  <li className="ml-32 pl-4 text-md">Student Life</li>
                  <li className="ml-32 pl-4 text-md">Infrastructure</li>
                  <li className="ml-32 pl-4 text-md">Hostel</li>
                  <li className="ml-32 pl-4 text-md">Reach Us</li>
                </ul>
              ) : (
                ""
              )}

              <li className="m-4">Student Life</li>
              <li className="m-4">Infrastructure</li>
              <li className="m-4">Hostel</li>
              <li className="m-4">Reach Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
