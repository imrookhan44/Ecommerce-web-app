import React from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
function CheckOut() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("checkout");
  };
  return (
    <>
      <div className=" py-2" id="main__div">
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            My Account
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div className="px-2 py-2">
        <p>Delivery</p>
      </div>
      <div className="px-2 py-2">
        <div
          className="border border-gray-300 rounded-md py-2
 "
        >
          <div>
            <p className="px-2">Delivery Address</p>
          </div>
          <div className="flex justify-between py-3">
            <div>
              <p className="text-gray-600 text-xs px-2">Olivia Wong</p>
              <p className="text-gray-600 text-xs px-2">
                123, Jalan 1/2, Taman 3, 12345, Kuala Lumpur
              </p>
              <p className="text-gray-600 text-xs px-2">012-3456789</p>
            </div>

            <div className="py-5">
              <div>
                <HiChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <div>
        <div className="border border-gray-300 py-2"></div>
      </div>
      <div className="px-2">
        <div className="border border-gray-300 shadow-lg h-96">
          <div className=" py-2 px-2 flex justify-between bg-slate-100">
            <div className="flex">
              <img
                className="w-5 h-5 rounded-sm"
                src="
                https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
              />
              &nbsp;
              <p className="text-md text-gray-600">Caracestore</p>
            </div>
          </div>
          <div className=" py-2 px-2 flex">
            <div className="">
              <img
                className="h-20 w-20 rounded-sm"
                src="https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80"
                alt="img"
              />
            </div>
            <div className="flex">
              <p>
                KLIGHT k2 LED Headlight
              </p>
            </div>
            <br />
            <div>
              <p>
                Variation: H1
              </p>
            </div>
            <div>
              <p>
                RM70.0
              </p>
            </div>


          </div>
          {/* &nbsp;
          <div className=" flex justify-end px-2">
            <span className="text-gray-500 text-xs">Variation: </span>
            <span className="text-xs">Carbon skin color &#62;</span>
          </div>
          &nbsp; */}
          {/* <div className="">
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
          </div> */}

          <div className="px-2 py-2">
            <div
              className="border border-gray-300 rounded-md bg-slate-200">
              <div className="flex justify-between ">
                <div>
                  <p className="text-gray-600 text-xs px-2">
                    Workshop Voucher
                  </p>
                </div>

                <div className="py-5">
                  <div>
                    <HiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer rounded-lg"
            style={{ backgroundColor: "#8DC63F" }}
            onClick={handleCheckout}
          >
            <div className="flex justify-between px-2 py-2">
              <div>
                <p className="text-white text-sm">Total</p>
                <p className="text-white text-sm">RM60.0</p>
              </div>
              <div>
                <p className="text-white px-2 py-2 text-sm ">Pay &#62;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
