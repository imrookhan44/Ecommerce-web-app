import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
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
      <div id="main__div">
        <div
          style={{ background: "rgb(247, 247, 247)" }}
          className="flex

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
          <div className="py-2" >
            <p>OliviaWWS</p>
            <div>
              <p className="text-sm text-gray-500">Following : 18</p>
            </div>
          </div>
        </div>
        {/* order history */}
        <div style={{ background: "rgb(247, 247, 247)" }}
          className="flex flex-col w-11/12  m-auto cursor-pointer  px-2 py-3  mt-5 rounded-lg border  ">
          <div className="flex justify-between align-middle " onClick={() => navigate('../myOrderHistory')}>
            <p className="text-sm text-gray-600 font-medium">
              View Order History
            </p>
            <p className="text-sm text-gray-500">
              <HiChevronRight size={30} className="mt-1" />
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 py-4">
          <div
            className="rounded-full  h-40 w-40
                flex items-center justify-center"
            style={{ background: "rgb(247, 247, 247)" }}

            id="first_icon"
          >
            <IoWalletOutline />
          </div>
          <div
            className="rounded-full  h-40 w-40
                flex items-center justify-center"
            style={{ background: "rgb(247, 247, 247)" }}

            id="first_icon"
          >
            <MdLocalShipping />
          </div>
          <div
            className="rounded-full  h-40 w-40
                flex items-center justify-center"
            style={{ background: "rgb(247, 247, 247)" }}

            id="first_icon"
          >
            <BiRectangle />
          </div>
          <div
            className="rounded-full  h-40 w-40
                flex items-center justify-center"
            style={{ background: "rgb(247, 247, 247)" }}

            id="first_icon"
          >
            <TbStars />
          </div>
        </div>
        <div className="border-b border-grey-200"></div>
        <div className="px-9 py-4">
          <p className="text-md text-gray-600 font-medium">My Account</p>
        </div>

        {/* My Account */}

        <div className="flex flex-col w-11/12 m-auto cursor-pointer  px-2 pt-1 mt-5 rounded-lg border" style={{ background: "rgb(247, 247, 247)" }}

          onClick={() => navigate('../myProfile')}
        >
          <div className="flex justify-between py-2">
            <p className="text-xs text-gray-600 font-medium">My Profile</p>
            <p className="text-sm text-gray-500">
              <HiChevronRight size={30} className="mt-1" />
            </p>
          </div>
        </div>
        {/* My Address */}
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  px-2 pt-1 mt-5 rounded-lg border" style={{ background: "rgb(247, 247, 247)" }}

          onClick={() => navigate('../myAddress')}
        >
          <div className="flex justify-between py-2">
            <p className="text-xs text-gray-600 font-medium">My Address</p>
            <p className="text-sm text-gray-500">
              <HiChevronRight size={30} className="mt-1" />
            </p>
          </div>
        </div>
        {/* My BankAccount */}
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  px-2 pt-1 mt-5 rounded-lg border" style={{ background: "rgb(247, 247, 247)" }}
        >
          <div className="flex justify-between py-2"

            onClick={() => navigate('../myBankAccount')}
          >
            <p className="text-xs text-gray-600 font-medium">My Bank Account</p>
            <p className="text-sm text-gray-500">
              <HiChevronRight size={30} className="mt-1" />
            </p>
          </div>
        </div>
        {/* My Vouchers */}
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  px-2 pt-1 mt-5 rounded-lg border" style={{ background: "rgb(247, 247, 247)" }}


          onClick={() => navigate('../myVouchers')}
        >
          <div className="flex justify-between py-2">
            <p className="text-xs text-gray-600 font-medium">My Vouchers</p>
            <p className="text-sm text-gray-500">
              <HiChevronRight size={30} className="mt-1" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
