import React from "react";
import { GiRead } from "react-icons/gi";
import { BsHandbagFill, BsPencilSquare } from "react-icons/bs";

function Main1() {
  return (
    <div className="mt-4">
      <section>
        <img
          src="https://www.cps.ac.in/wp-content/uploads/2020/05/6-8-students-uniform.jpg"
          alt="student-imag"
          width={2000}
        />
      </section>
      <section className="mt-10">
        <div className="py-5 mb-4 flex justify-center items-center md:bg-white bg-blue-400">
          <h1 className="text-xl flex justify-center items-center">
            WELCOME To <span className="font-bold ml-1">FLEXAGN SCHOOL</span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 mx-2 flex flex-col leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            minima inventore provident magnam, magni molestias minus quas
            consequuntur ducimus necessitatibus repellat rem quo et, ipsa
            perferendis corporis.
            <button className="flex border border-cyan-500 px-4 py-2 rounded-tr-2xl rounded-bl-2xl m-4 self-end">
              Read More
            </button>
          </div>
          <div className="md:w-1/3 mx-2 md:mb-0 mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFta4bT5T0nSkdrmGfW48PaSJKUao70sXOg&usqp=CAU"
              alt=""
              className="w-full"
            />
          </div>
          <div className="md:w-1/3 mx-2">
            <div className="bg-cyan-700 px-4 py-2 flex justify-center items-center">
              <h1 className="text-xl uppercase text-white">Quick Access</h1>
            </div>
            <div className="flex justify-center items-center mt-4 px-4 py-2 bg-blue-400 text-xl text-white ">
              <GiRead style={{ color: "white" }} className="h-6 w-6 mr-4" />
              Check student life
            </div>
            <div className="flex justify-center items-center mt-4 px-4 py-2 bg-orange-500 text-xl text-white">
              <BsPencilSquare
                style={{ color: "white" }}
                className="h-6 w-6 mr-4"
              />
              Apply for Admission
            </div>
            <div className="flex justify-center items-center mt-4 px-4 py-2 bg-green-500 text-xl text-white">
              <BsHandbagFill
                style={{ color: "white" }}
                className="h-6 w-6 mr-4"
              />{" "}
              Apply for job
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main1;
