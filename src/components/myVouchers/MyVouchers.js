import React from 'react'
import { HiChevronRight } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'
function MyVouchers() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2 " >
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            Voucher Details
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div id="main__div">
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ backgroundColor: "#8DC63F" }}>
          <div className="flex justify-between py-2">
            <div className='flex'>
              <img src="" alt="logo" />
              <div>
                <p className="text-md text-white font-medium px-2">Free Shipping</p>
                <p className="text-md text-white font-sm px-2">Driwego Voucher</p>
              </div>
            </div>
            <p className="text-sm text-white font-sm">
              <HiChevronRight size={30} className="mt-1" />
              <p>
                T&C
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ backgroundColor: "#8DC63F" }}>
          <div className="flex justify-between py-2">
            <div className='flex'>
              <img src="" alt="logo" />
              <div>
                <p className="text-md text-white font-medium px-2">Free Shipping</p>
                <p className="text-md text-white font-sm px-2">Driwego Voucher</p>
              </div>
            </div>
            <p className="text-sm text-white font-sm">
              <HiChevronRight size={30} className="mt-1" />
              <p>
                T&C
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-11/12 m-auto cursor-pointer  p-2 mt-5 rounded-lg border" style={{ backgroundColor: "#8DC63F" }}>
          <div className="flex justify-between py-2">
            <div className='flex'>
              <img src="" alt="logo" />
              <div>
                <p className="text-md text-white font-medium px-2">Free Shipping</p>
                <p className="text-md text-white font-sm px-2">Driwego Voucher</p>
              </div>
            </div>
            <p className="text-sm text-white font-sm">
              <HiChevronRight size={30} className="mt-1" />
              <p>
                T&C
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyVouchers