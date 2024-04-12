import React from "react";
import apple_logo from "../../Images/apple_logo.jpeg";
import microsoft_logo from "../../Images/microsoft_logo.png";
import atlantic_logo from "../../Images/atlantic_logo.png";
import tnyt from "../../Images/NewYorkTimes.svg.png";

function Press() {
  return (
    <>
      <div className="w-[96%] lg:w-[85%] mx-32 px-3 my-8">
        <h1 className="max-[425px]:text-4xl  text-5xl  font-semibold mt-3 mb-8">
          Press
        </h1>
        <div className="flex flex-col min-[696px]:flex-row justify-between">
          <div className=" min-[696px]:w-[49%] py-6">
            <img src={apple_logo} alt="" className="h-16 opacity-45 " />
            <hr className="my-6" />
            <p className="max-[832px]:text-[1.7rem] text-3xl font-semibold leading-10">
              <span className="text-gray-600 font-normal"> March 2020 </span>{" "}
              <br /> She puzzled it out
            </p>
          </div>
          <div className="min-[696px]:w-[49%] py-6">
            <img src={microsoft_logo} alt="" className="h-14" />
            <hr className="mt-8 mb-6" />
            <p className="max-[832px]:text-[1.7rem]  text-3xl font-semibold leading-10">
              <span className="text-gray-600 font-normal">May 2019 </span>{" "}
              <br /> Microsoft, Brilliant team up to offer quantum curriculum
            </p>
          </div>
        </div>

        <div className="flex flex-col min-[696px]:flex-row justify-between">
          <div className="min-[696px]:w-[49%] py-6">
            <img src={atlantic_logo} alt="" className="h-12 opacity-45 " />
            <hr className="my-6" />
            <p className="max-[832px]:text-[1.7rem] text-3xl font-semibold leading-10">
              <span className="text-gray-600 font-normal"> November 2016</span>{" "}
              <br /> The Math Revolution
            </p>
          </div>
          <div className="min-[696px]:w-[49%] py-6">
            <img src={tnyt} alt="" className="h-10 opacity-45" />
            <hr className="mt-8 mb-6" />
            <p className="max-[832px]:text-[1.7rem] text-3xl font-semibold leading-10">
              <span className="text-gray-600 font-normal">March 2016 </span>{" "}
              <br /> Reasonable-Seeming but WRONG Approximations of π
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-[1px] border-black w-[96%] lg:w-[85%]" />
      <div className="w-[96%] lg:w-[85%] mx-32 my-16 flex flex-col min-[696px]:flex-row justify-between items-center">
        <div className="min-[696px]:w-3/5">
          <p className="text-center min-[696px]:text-left max-[340px]:text-2xl min-[341px]:text-[2rem] min-[425px]:text-4xl min-[930px]:text-5xl font-semibold min-[341px]:leading-[2.5rem] max-[424px]:leading-[2.5rem] leading-[4rem] mb-4">
            Join over 10 million people learning on Brilliant
          </p>
        </div>
        <div className="min-[696px]:w-[35%]">
          <button className="py-3 px-8 rounded-lg bg-teal-600 text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Press;
