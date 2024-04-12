import React, { useState } from "react";
import reviewstars from "../../Images/reviewstars.gif";
import { FaStar } from "react-icons/fa";
import { reviews } from "../../data";

function UserReview() {
  const [dataperPage, setDataperPge] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewer, setReviewer] = useState("ALL");

  const featuredHandler = (e) => {
    console.log(e.target.innerText);
    let userType = e.target.innerText;
    setReviewer(userType);
    setCurrentPage(1);
  };

  let filteredArray = reviews.filter((review) => {
    if (reviewer === "ALL") return review;
    if (review.userType === reviewer) return review;
  });

  const numofTotalPage = Math.ceil(filteredArray.length / dataperPage);
  const indexofLastPage = currentPage * dataperPage;
  const indexofFirstPage = indexofLastPage - dataperPage;
  const visibleData = filteredArray.slice(indexofFirstPage, indexofLastPage);

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    if (currentPage !== numofTotalPage) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-[96%] lg:w-[85%] mx-32 px-3">
      <div className=" flex flex-col justify-between min-[696px]:flex-row">
        <div className="min-[696px]:w-[38%] pt-32">
          <h2 className="max-[424px]:text-[2.7rem] min-[425px]:text-5xl min-[696px]:text-[2.5rem] lg:text-5xl font-semibold mb-4 ">
            User reviews
          </h2>
          <p className="text-2xl text-gray-600">
            Over 50,000 5-star review in the App store and play store
          </p>
        </div>
        <div className="min-[696px]:w-[58%]">
          <img src={reviewstars} alt="" />
        </div>
      </div>
      <div className="flex mt-10 justify-around flex-col min-[696px]:flex-row">
        <div className="min-[696px]:w-[38%] mb-8 min-[696px]:mb-0">
          <section className="flex justify-between items-center border-[1px] rounded-md border-black w-full min-[696px]:w-4/5">
            <span className="w-[80%] py-3 pl-5">Featured </span>{" "}
            <p className="border-l-2 flex justify-center items-center w-[20%]">
              <span className="  py-3 ">&#9660;</span>{" "}
            </p>
          </section>
        </div>
        <div
          className="min-[696px]:w-[55%]  flex flex-wrap mb-8"
          onClick={featuredHandler}
        >
          <button
            className={` text-xs py-3 px-6 border-[1px]  mx-[5px] mb-4 rounded-md hover:border-blue-500 
          ${
            reviewer === "ALL"
              ? "border-blue-500 border-[2px]  bg-blue-100"
              : ""
          } `}
          >
            ALL
          </button>
          <button
            className={` text-xs py-3 px-6 border-[1px]  mx-[6px] mb-4 rounded-md hover:border-blue-500  ${
              reviewer === "STUDENTS"
                ? "border-blue-500 border-[2px] bg-blue-100"
                : ""
            }`}
          >
            STUDENTS
          </button>
          <button
            className={`text-xs py-3 px-6 border-[1px]  mx-[6px] mb-4 rounded-md hover:border-blue-500 
          ${
            reviewer === "TEACHERS"
              ? "border-blue-500 border-[2px] bg-blue-100"
              : ""
          }
          `}
          >
            TEACHERS
          </button>
          <button
            className={`text-xs py-3 px-6 border-[1px]  mx-[6px] mb-4 rounded-md hover:border-blue-500 
          ${
            reviewer === "PARENTS"
              ? "border-blue-500 border-[2px] bg-blue-100"
              : ""
          }
          `}
          >
            PARENTS
          </button>
          <button
            className={`text-xs py-3 px-6 border-[1px]  mx-[6px] mb-4 rounded-md hover:border-blue-500 
          ${
            reviewer === "PROFESSIONALS"
              ? "border-blue-500 border-[2px] bg-blue-100"
              : ""
          }
          `}
          >
            PROFESSIONALS
          </button>
          <button
            className={`text-xs py-3 px-6 border-[1px]  mx-[6px] mb-4 rounded-md hover:border-blue-500 
          ${
            reviewer === "LIFE LONG LEARNERS"
              ? "border-blue-500 bg-blue-100 border-[2px]"
              : ""
          }
          `}
          >
            LIFE LONG LEARNERS
          </button>
        </div>
      </div>
      <div className="flex flex-col min-[696px]:flex-row">
        <div className="hidden relative min-[696px]:block min-[696px]:w-2/5">
          <img
            className="h-[1700px] absolute bottom-0"
            src="https://brilliant.org/site_media/version-b3d2991c3f/images/company/testimonials/testimonials-liftoff-2x.png"
            alt=""
          />
        </div>
        <div className="w-full min-[696px]:w-3/5">
          {visibleData.map((review) => (
            <div>
              <hr />
              <div className="py-10">
                <p className="mb-2  flex">
                  {[...Array(review.star)].map(() => (
                    <FaStar color="#ebc034" className="mr-[2px]" />
                  ))}{" "}
                </p>
                <p className="font-semibold">
                  {review.name}{" "}
                  {review.app ? (
                    <span className="font-normal"> - {review.app}</span>
                  ) : (
                    ""
                  )}{" "}
                </p>
                <p className="mt-4 mb-6">{review.text} </p>
                <button className="border-2 vorder-gray-300 py-2 px-5 text-sm font-[300] rounded-3xl">
                  {review.userType}{" "}
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center min-[696px]:justify-start   mx-auto mt-8 mb-20">
            <div className="flex">
              <p className="cursor-pointer">
                <span onClick={prevPageHandler}>&lt;</span>{" "}
              </p>
              <p className="mx-3">
                {currentPage} &nbsp; of &nbsp; {numofTotalPage}
              </p>
              <p className="cursor-pointer">
                {" "}
                <span onClick={nextPageHandler}>&gt;</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black" />
    </div>
  );
}

export default UserReview;
