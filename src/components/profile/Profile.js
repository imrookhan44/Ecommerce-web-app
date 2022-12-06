import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { BiRectangle } from "react-icons/bi";
import { TbStars } from "react-icons/tb";
function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2 ">
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            My Account
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div
        className="flex
      bg-slate-100
      w-11/12
      m-auto
      rounded-lg
      border
      "
      >
        <div>
          <img
            className="w-20 h-20

          rounded-l-lg
          "
            src="
          https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80

          "
            alt="profile"
          />
        </div>
        &nbsp; &nbsp;
        <div className="py-2">
          <p>OliviaWWS</p>
          <div>
            <p className="text-sm text-gray-500">Following : 18</p>
          </div>
        </div>
      </div>
      {/* order history */}
      <div className="flex flex-col w-11/12 m-auto cursor-pointer bg-slate-100 p-4 mt-5 rounded-lg border">
        <div className="flex justify-between py-2">
          <p className="text-md text-gray-600 font-medium">
            View Order History
          </p>
          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-4">
        <div
          className="rounded-full  bg-slate-200 h-40 w-40
                flex items-center justify-center"
        >
          <IoWalletOutline />
        </div>
        <div
          className="rounded-full  bg-slate-200 h-40 w-40
                flex items-center justify-center"
        >
          <MdLocalShipping />
        </div>
        <div
          className="rounded-full  bg-slate-200 h-40 w-40
                flex items-center justify-center"
        >
          <BiRectangle />
        </div>
        <div
          className="rounded-full  bg-slate-200 h-40 w-40
                flex items-center justify-center"
        >
          <TbStars />
        </div>
      </div>
      <div className="border-b border-grey-200"></div>
      <div className="px-9 py-4">
        <p className="text-md text-gray-600 font-medium">My Account</p>
      </div>

      {/* My Account */}
      <div className="flex flex-col w-11/12 m-auto cursor-pointer bg-slate-100 p-4 mt-5 rounded-lg border">
        <div className="flex justify-between py-2">
          <p className="text-md text-gray-600 font-medium">My Profile</p>
          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      {/* My Address */}
      <div className="flex flex-col w-11/12 m-auto cursor-pointer bg-slate-100 p-4 mt-5 rounded-lg border">
        <div className="flex justify-between py-2">
          <p className="text-md text-gray-600 font-medium">My Address</p>
          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      {/* My BankAccount */}
      <div className="flex flex-col w-11/12 m-auto cursor-pointer bg-slate-100 p-4 mt-5 rounded-lg border">
        <div className="flex justify-between py-2">
          <p className="text-md text-gray-600 font-medium">My Bank Account</p>
          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
      {/* My Vouchers */}
      <div className="flex flex-col w-11/12 m-auto cursor-pointer bg-slate-100 p-4 mt-5 rounded-lg border">
        <div className="flex justify-between py-2">
          <p className="text-md text-gray-600 font-medium">My Vouchers</p>
          <p className="text-sm text-gray-500">
            <HiChevronRight size={30} className="mt-1" />
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
