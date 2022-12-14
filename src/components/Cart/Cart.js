import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2">
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            My Account
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div className="px-2">
        <div className="border border-gray-300 shadow-lg h-96">
          <div className=" py-2 px-2 flex justify-between bg-slate-100">
            <div className="image">
              <img
                className="w-5 h-5 rounded-sm"
                src="
                https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

                "
                alt="img"
              />
            </div>
            <div>
              <input className="accent-lime-500" type="checkbox" checked />
            </div>
          </div>
          <div className=" py-2 px-2 flex justify-between">
            <div className="">
              <img
                className="h-8 w-20 rounded-sm"
                src="https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80"
                alt="img"
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                excepturi autem ipsam, et perspiciatis illum.
              </p>
            </div>
            <div>
              <input
                className="accent-lime-500"
                type="checkbox"
                name=""
                id=""
                checked
              />
            </div>
          </div>
          &nbsp;
          <div className=" flex justify-end px-2">
            <span className="text-gray-500 text-xs">Variation: </span>
            <span className="text-xs">Carbon skin color &#62;</span>
          </div>
          &nbsp;
          <div className="">
            <div className="flex justify-between">
              <div>
                <p
                  className="
                text-gray-500 text-sm px-2"
                >
                  RM60.0
                </p>
              </div>
              <div className="px-2 border-gray-800">
                <button className="bg-gray-200 px-2 py-1 h-8">-</button>

                <input
                  className="border-2 border-gray-200 text-center w-8 h-8 bg-gray-200 "
                  type="text"
                  value="1"
                />
                <button className="bg-gray-200 px-2 py-1 h-8">+</button>
              </div>
            </div>
            &nbsp;
            <div className="border-b border-grey-200 px-2"></div>
            <div className="flex justify-between px-2">
              <div>
                <p
                  className="
                text-gray-500 text-sm"
                >
                  Total
                </p>
              </div>
              <div>
                <p
                  className="
                text-gray-500 text-sm"
                >
                  RM60.0
                </p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer rounded-lg"
            style={{ backgroundColor: "#8DC63F" }}
          >
            <div className="flex justify-between px-2 py-2">
              <div>
                <p className="text-white text-sm">Total</p>
                <p className="text-white text-sm">RM60.0</p>
              </div>
              <div>
                <p className="text-white px-2 py-2 text-sm ">Checkout &#62;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
