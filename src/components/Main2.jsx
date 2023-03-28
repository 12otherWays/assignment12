import React from "react";
import { GiTeacher, GiCooler, GiOpenBook } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { FaSwimmer } from "react-icons/fa";
import { BsFillBusFrontFill } from "react-icons/bs";

function Main2() {
  return (
    <div className="mt-10 bg-gray-200 p-4">
      <div className="flex justify-center items-center my-4 bg-blue-400 md:bg-transparent py-2">
        <h1 className="uppercase text-xl">
          why choose <span>flexagh school</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-4/12">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="md:text-right text-center w-4/5">
              <h1 className="font-semibold text-orange-500">
                Experienced Teacher
              </h1>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing error sed
                quas aspernatur temporibus praesentium nam repellendus.
              </p>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-orange-500 rounded-full w-14 h-14 flex md:mt-0 mt-4 justify-center items-center">
                <GiTeacher style={{ color: "white" }} className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-12 justify-center items-center md:flex-row">
            <div className="md:text-right text-center w-4/5">
              <h1 className="font-semibold text-green-700">
                A/C Residential Campus
              </h1>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing error sed
                quas aspernatur temporibus praesentium nam repellendus.
              </p>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-green-700 rounded-full w-14 h-14 flex justify-center items-center md:mt-0 mt-4">
                <GiCooler style={{ color: "white" }} className="w-6 h-6" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col mt-12 justify-center items-center md:flex-row md:mb-0 mb-4">
            <div className="md:text-right text-center w-4/5">
              <h1 className="font-semibold text-rose-500">Delicious Food</h1>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing error sed
                quas aspernatur temporibus praesentium nam repellendus.
              </p>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-rose-500 rounded-full w-14 h-14 flex justify-center items-center md:mt-0 mt-4">
                <BiDish style={{ color: "white" }} className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-L6_4otOrIXN_cEojaVWVp_3mU-h88_rNw&usqp=CAU"
            alt=""
            className="w-64 h-84"
          />
        </div>
        <div className="md:w-4/12">
          <div className="flex flex-col justify-center items-center md:flex-row mt-4 md:mt-0">
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-yellow-500 rounded-full w-14 h-14 flex justify-center items-center">
                <FaSwimmer style={{ color: "white" }} className="w-6 h-6" />
              </div>
            </div>
            <div className=" w-4/5 flex flex-col justify-center items-center text-center">
              <div className="md:text-left text-center">
                <h1 className="font-semibold text-yellow-500">
                  Sports Facilities
                </h1>
                <p className="text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing error sed
                  quas aspernatur temporibus praesentium nam repellendus.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex mt-12 flex-col justify-center items-center md:flex-row">
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-red-500 rounded-full w-14 h-14 flex justify-center items-center">
                <GiOpenBook style={{ color: "white" }} className="w-6 h-6" />
              </div>
            </div>
            <div className=" w-4/5 flex flex-col justify-center items-center text-center">
              <div className="md:text-left text-center">
                <h1 className="font-semibold text-red-500">
                  Holistic Education
                </h1>
                <p className="text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing error sed
                  quas aspernatur temporibus praesentium nam repellendus.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex mt-12 flex-col justify-center items-center md:flex-row">
            <div className="w-1/5 flex justify-center items-center">
              <div className="bg-blue-500 rounded-full w-14 h-14 flex justify-center items-center">
                <BsFillBusFrontFill
                  style={{ color: "white" }}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className=" w-4/5 flex flex-col justify-center items-center ">
              <div className="md:text-left text-center">
                <h1 className="font-semibold text-blue-500">Transportation</h1>
                <p className="text-sm mt-1 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing error sed
                  quas aspernatur temporibus praesentium nam repellendus.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Main2;
