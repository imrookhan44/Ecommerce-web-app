import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { FiClock } from 'react-icons/fi'
function SearchPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" py-2" >
        <div className="px-4 py-2 border-b border-gray-300 flex">
          <p className="cursor-pointer flex items-center" >
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} onClick={() => navigate(-1)} />
          </p>
          &nbsp;
          <div
            className="container mx-auto h-14 px-1 py-1 flex  bg-white rounded-lg border"
            style={{ boxShadow: "rgb(60 60 60 / 20%) 3px 4px 10px 0px;" }}
          >
            <Link className="px-3 py-4 text-lg font-medium ">
              <CiSearch />
            </Link>
            <input
              className="w-full h-full  border-0"
              type="text"
              placeholder="Search Car Engine"
              name="search"
            />
          </div>

        </div>
      </div>
      <div className="border-b border-grey-200"></div>
      <div id="main__div">
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              Car engine oil
            </span>
          </p>

        </div>
        <div className="border-b border-grey-200"></div>
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              tyre
            </span>
          </p>

        </div>
        <div className="border-b border-grey-200"></div>
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              car care
            </span>
          </p>

        </div>
        <div className="border-b border-grey-200"></div>
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              Bumper
            </span>
          </p>

        </div>
        <div className="border-b border-grey-200"></div>
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              Car audio
            </span>
          </p>

        </div>
        <div className="border-b border-grey-200"></div>
        <div
          className="container mx-auto px-4 py-2">
          <p className='flex text-gray-600'>
            <FiClock className='mt-1' />
            <span className='px-4 '>
              Battery
            </span>
          </p>

        </div>
      </div>


    </>
  )
}

export default SearchPage