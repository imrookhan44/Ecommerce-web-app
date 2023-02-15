import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
function WishList() {
  let navigate = useNavigate();
  const wishListArray = [
    {
      id: 1,
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta?",
    },
    {
      id: 2,
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta?",
    },
  ];
  return (
    <>
      <div className=" py-2 " >
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack style={{ marginTop: "0.30rem" }} /> &nbsp; Wishlist
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div id="main__div">
        {wishListArray.map((item) => {
          return (
            <div className="px-2 py-2">
              <div className="border border-gray-300 rounded-md py-2">
                <div className="flex justify-between py-3">
                  <div className="flex">
                    <img
                      className="w-14 h-14 px-1 py-1 rounded-lg"
                      src={item.image}
                      alt="product"
                    />
                    <div className="px-2">
                      <p className="text-gray-600 text-xs">{item.des}</p>
                      <p className="text-gray-600 text-xs flex">
                        <IoPricetagOutline className="mt-1" /> &nbsp; From{" "}
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </>
  );
}

export default WishList;
