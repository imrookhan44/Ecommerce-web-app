import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
function MyBankAccount() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2 ">
        <div className="px-4 py-2 border-b border-gray-300 flex justify-between">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            Bank
          </p>
          <div className="bg-gray-200 px-2 py-1 rounded-lg cursor-pointer">
            <AiOutlinePlus size={15} style={{ marginLeft: "6px" }} />
            <p className="text-xs">Add</p>
          </div>
        </div>

        <div className="border-b border-grey-200"></div>
      </div>
      <div className="flex flex-col  m-auto cursor-pointer px-2 rounded-lg ">
        <div className="flex justify-between py-2">
          <div className="">
            <p className="text-md text-gray-600 font-medium">MAY Bank</p>
            <p className="text-sm text-gray-500">
              Olivia Wong, xxxx xxxx xxxx 2030
            </p>
          </div>

          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col  m-auto cursor-pointer px-2 rounded-lg ">
        <div className="flex justify-between py-2">
          <div className="">
            <p className="text-md text-gray-600 font-medium">CIMB Bank</p>
            <p className="text-sm text-gray-500">
              Olivia Wong, xxxx xxxx xxxx 2060
            </p>
          </div>

          <p className="text-sm text-gray-500 ">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      <div
        className="cursor-pointer rounded-lg bg-slate-700 px-2 m-auto mt-5 mb-5 fixed bottom-0 left-5"
        style={{ width: "92%" }}
      >
        <div className="flex justify-center px-2 py-2 ">
          <p className="text-md text-gray-100 font-medium">Save</p>
        </div>
      </div>
    </>
  );
}

export default MyBankAccount;
