import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function MyOrderHistory() {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
      <div className=" py-2 " >
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            My Order History
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div id="main__div">
        <div className="flex" style={{
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",

          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}
          onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY;
          }}
        >
          <div className="px-2">
            <div className="bg-gray-100 px-2 py-2 text-xs rounded-xl w-16">
              <p className="text-gray-500 font-medium">To Pay</p>
            </div>
          </div>
          <div className="px-2">
            <div className="bg-gray-100 px-2 py-2 text-xs rounded-xl w-16">
              <p className="text-gray-500 font-medium">To Ship</p>
            </div>
          </div>
          <div className="px-2">
            <div className="bg-gray-100  px-2 py-2 text-xs rounded-xl w-20">
              <p className="text-gray-500 font-medium">To Receive</p>
            </div>
          </div>
          <div className="px-2">
            <div className="bg-gray-100  px-2 py-2 text-xs rounded-xl w-28">
              <p className="text-gray-500 font-medium">Order Completed</p>
            </div>
          </div>
          <div className="px-2">
            <div className="bg-gray-100  px-2 py-2 text-xs rounded-xl w-16">
              <p className="text-gray-500 font-medium">To Rate</p>
            </div>
          </div>
          <div className="px-2">
            <div className="bg-gray-100  px-2 py-2 text-xs rounded-xl w-32">
              <p className="text-gray-500 font-medium">Return / Cancelled</p>
            </div>
          </div>
        </div>


        <div className="border-b mt-2" />
        <div>
          <div className="mt-2 px-2">
            <p className="text-gray-800 font-normal">Caracestore</p>
          </div>
          <div className="flex  justify-around">
            <div className="px-2 py-2">
              <p className="text-xs text-gray-500">
                KLIGHT K2 LED Headlight 6000k 60W LED
              </p>
            </div>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="img"
                className="w-20 h-20"
              />
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm text-gray-500">Variation: H1 x2</p>
          </div>
          <div className="px-2">
            <p className="py-2 text-gray-800 font-normal">RM25.00</p>
          </div>
        </div>
        <div className="border-b" />
        <div className="flex justify-between px-2 py-2">
          <div>
            <p className="text-xs text-gray-500">2 Items</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">
              Order Total:{" "}
              <span style={{ color: "#8DC63F" }} className="font-medium">
                RM103.00
              </span>
            </p>
          </div>
        </div>
        <div
          className="cursor-pointer rounded-lg bg-slate-700 px-2 m-auto mt-5 mb-5"
          style={{ width: "92%", backgroundColor: "#8DC63F" }}
        >
          <div className="flex justify-center px-2 py-2">
            <p className="text-md text-gray-100 font-normal">Buy Again</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrderHistory;
