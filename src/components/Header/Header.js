import React from "react";
import { Link } from "react-router-dom";
import { BsChat, BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

function Header() {
  return (
    <div className="h-28" style={{ backgroundColor: "#8DC63F" }}>
      <div className="container py-5 px-5 flex items-center justify-between">
        <Link className="text-lg font-semibold text-white uppercase">
          AutoParts
        </Link>
        <div className="flex items-center gap-3">
          <Link className="text-gray-100  px-3 py-3 rounded-full  border-2">
            <BsChat />
          </Link>
          <Link className="text-gray-100  px-3 py-3 rounded-full  border-2">
            <BsHeart />
          </Link>
          <Link className="text-gray-100  px-3 py-3 rounded-full  border-2">
            <VscAccount />
          </Link>
        </div>
      </div>
      <div
        className="container mx-auto h-14 px-1 py-1 flex  shadow-lg  bg-white rounded-lg border-0"
        style={{ boxShadow: "rgb(60 60 60 / 20%) 3px 4px 10px 0px;" }}
      >
        <Link className="px-3 py-4 text-lg font-medium ">
          <CiSearch />
        </Link>
        <input
          className="w-full h-full  border-0"
          type="text"
          placeholder="Search Products"
          name="search"
        />
      </div>
      <Link
        to='/cart'
        className="shadow-lg"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          width: "55px",
          height: "55px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "10px"
        }}
      >
        <div className="icon">
          <TiShoppingCart size={35} />
        </div>
      </Link>
    </div>
  );
}

export default Header;
