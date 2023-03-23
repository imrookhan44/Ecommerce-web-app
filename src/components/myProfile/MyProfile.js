import React from "react";
import { FiCamera } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function MyProfile() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2 " >
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            Edit profile
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div id="main__div">
        <div>
          <div
            className="
        container mx-auto px-4 py-2 flex justify-center
        w-12 rounded-md
         " style={{ background: "#F7F7F7" }}
          >
            <p className="text-2xl font-bold text-gray-600 cursor-pointer">
              <FiCamera />
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ background: "#F7F7F7" }}>
            <div className="flex justify-between py-2">
              <p className="text-md text-gray-600 font-medium">Name</p>
              <p className="text-sm text-gray-500">
                <HiChevronRight size={30} className="mt-1" />
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ background: "#F7F7F7" }}>
            <div className="flex justify-between py-2">
              <p className="text-md text-gray-600 font-medium">Gender</p>
              <p className="text-sm text-gray-500">
                <HiChevronRight size={30} className="mt-1" />
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ background: "#F7F7F7" }}>
            <div className="flex justify-between py-2">
              <p className="text-md text-gray-600 font-medium">Birthday</p>
              <p className="text-sm text-gray-500">
                <HiChevronRight size={30} className="mt-1" />
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ background: "#F7F7F7" }}>
            <div className="flex justify-between py-2">
              <p className="text-md text-gray-600 font-medium">Phone</p>
              <p className="text-sm text-gray-500">
                <HiChevronRight size={30} className="mt-1" />
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ background: "#F7F7F7" }}>
            <div className="flex justify-between py-2">
              <p className="text-md text-gray-600 font-medium flex">
                Email &nbsp;
                <span className="">
                  <p
                    className="text-xs text-gray-100 font-normal p-1 rounded-md"
                    style={{ backgroundColor: "#8DC63F" }}
                  >
                    verified
                  </p>
                </span>
              </p>
              <p className="text-sm text-gray-500">
                <HiChevronRight size={30} className="mt-1" />
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div
          className="cursor-pointer rounded-lg bg-slate-700 px-2 m-auto mt-5 mb-5"
          style={{ width: "92%" }}
        >
          <div className="flex justify-center px-2 py-2 ">
            <p className="text-md text-gray-100 font-medium">Save</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
