import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState('1')
  return (
    <>
      <div className=" py-2" >
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            My Cart
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div id="main__div">
        <div className="px-2">
          <div className="border border-gray-300 shadow-lg " style={{ borderRadius: "10px" }}>
            <div className=" py-2 px-2 flex justify-between " style={{ background: "#F7F7F7", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
              <div className="image flex">
                <img
                  className="rounded-sm cart__image"
                  src="
                https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

                "
                  alt="img"
                />
                <p
                  className="
                   px-2  cart__paragraph"
                >
                  Caracestore
                </p>
              </div>
              <div className="mt-1">
                <input className=" cart__checkbox" type="checkbox" checked />
              </div>
            </div>
            <div className="flex justify-between" style={{
              padding: "11px"
            }}>
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
                  className="accent-lime-500 cart__checkbox"
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
            <div className="" style={{
              padding: "11px"
            }}>
              <div className="flex justify-between">
                <div>
                  <p
                    className="
                text-gray-500 text-sm px-2"
                  >
                    RM60.00
                  </p>
                </div>
                <div className="px-2 border-gray-800" id="counter__div">
                  <button className="bg-gray-200 px-2 py-1 ">-</button>
                  &nbsp;

                  {counter}
                  &nbsp;
                  <button className="bg-gray-200 px-2 py-1 ">+</button>
                </div>
              </div>
              &nbsp;
              <div className="border-b border-grey-200 px-2"></div>
              <div className="flex justify-between px-2 ">
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
                  className="accent-lime-500 cart__checkbox"
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
            <div className="" style={{
              padding: "11px"
            }}>
              <div className="flex justify-between">
                <div>
                  <p
                    className="
                text-gray-500 text-sm px-2"
                  >
                    RM60.00
                  </p>
                </div>
                <div className="px-2 border-gray-800" id="counter__div">
                  <button className="bg-gray-200 px-2 py-1 ">-</button>
                  &nbsp;

                  {counter}
                  &nbsp;
                  <button className="bg-gray-200 px-2 py-1 ">+</button>
                </div>
              </div>
              &nbsp;
              <div className="border-b border-grey-200 px-2"></div>
              <div className="flex justify-between px-2 " style={{
                padding: "11px"
              }}>
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
          </div>
        </div>
        <div className="px-2">
          <div className="border border-gray-300 shadow-lg  mt-4" style={{ borderRadius: "10px" }}>

            <div className=" py-2 px-2 flex justify-between  " style={{ background: "#F7F7F7", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} >
              <div className="image flex">
                <img
                  className="rounded-sm cart__image"
                  src="
                  https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80
                "
                  alt="img"
                />
                <p
                  className="
                   px-2  cart__paragraph"
                >
                  HC-CARGO
                </p>
              </div>
              <div className="mt-1">
                <input className="accent-lime-500 cart__checkbox" type="checkbox" checked />
              </div>
            </div>
            <div className=" py-2 px-2 flex justify-between">
              <div className="">
                <img
                  className="h-8 w-20 rounded-sm"
                  src=""
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
                  className="accent-lime-500 cart__checkbox"
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
            <div className="" style={{
              padding: "11px"
            }}>
              <div className="flex justify-between">
                <div>
                  <p
                    className="
                text-gray-500 text-sm px-2"
                  >
                    RM60.00
                  </p>
                </div>
                <div className="px-2 border-gray-800" id="counter__div">
                  <button className="bg-gray-200 px-2 py-1 ">-</button>
                  &nbsp;

                  {counter}
                  &nbsp;
                  <button className="bg-gray-200 px-2 py-1 ">+</button>
                </div>
              </div>
              &nbsp;
              <div className="border-b border-grey-200 px-2"></div>
              <div className="flex justify-between px-2 ">
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
          </div>
        </div>
        <div
          className="cursor-pointer rounded-lg h-12"
          style={{ backgroundColor: "#8DC63F", padding: "7px", margin: "0 2px", position: "fixed", bottom: "36px", right: "0.7rem", width: "90%" }}
        >
          <div className="flex justify-between ">
            <div>
              <p className="text-white text-xs px-1">Total</p>
              <p className="text-white text-base px-1 font-semibold
                ">RM60.00</p>
            </div>
            <div className="mt-1">
              <p className="text-white px-2 pt-1  font-semibold" style={{ fontSize: "15px" }}>Checkout &#62;</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cart;
