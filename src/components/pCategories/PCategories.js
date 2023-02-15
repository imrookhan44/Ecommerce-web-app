import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import lightBulb from '../../assets/sample/icons_cat/lightbulb.png';
import Wiper from '../../assets/sample/icons_cat/wiper.png';
import engineOil from '../../assets/sample/icons_cat/engineoil.png';
import tyre from '../../assets/sample/icons_cat/tyre.png';
import cabinFilter from '../../assets/sample/icons_cat/cabinfilter.png';
import compressor from '../../assets/sample/icons_cat/compressor.png';
import sunShades from '../../assets/sample/icons_cat/sunshades.png';
import doorHandle from '../../assets/sample/icons_cat/reardoorhandle.png';
import bumper from '../../assets/sample/icons_cat/bumper.png';
import discBrake from '../../assets/sample/icons_cat/discbrake.png';
import acOutlet from '../../assets/sample/icons_cat/ACOutletLouvers.png';
import multimedia from '../../assets/sample/icons_cat/Multimedia Player.png';
function PCategories() {
  let navigate = useNavigate();
  return (
    <>
      <div className=" py-2 " id="main__div">
        <div className="px-4 py-2 border-b border-gray-300">
          <p className="cursor-pointer flex" onClick={() => navigate(-1)}>
            {" "}
            <IoIosArrowBack size={25} style={{ marginTop: "0.20rem" }} /> &nbsp;
            Product Categories
          </p>
        </div>
        <div className="border-b border-grey-200"></div>
      </div>
      <div className="flex">
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={lightBulb} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Light Bulb</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={Wiper} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Wiper</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={engineOil} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Engine Oil</p>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <div className="flex">
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={tyre} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Tyre</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={cabinFilter} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Cabin Filter</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={compressor} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Compressor</p>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <div className="flex">
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={sunShades} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Sun Shades</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={doorHandle} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Rear Door Handle</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={bumper} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Bumper</p>
            </div>
          </div>
        </div>
      </div>
      &nbsp;

      <div className="flex">
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={discBrake} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Disc Brake</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={acOutlet} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">AC Outlet Louvers</p>
            </div>
          </div>
        </div>
        <div className="px-2 w-52">
          <div className="bg-gray-100  rounded-md border">
            <div className='flex flex-col justify-center items-center p-4'>
              <img src={multimedia} alt="" className='w-12 h-12' />
              <p className="text-gray-500 text-xs">Multimedia Player</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PCategories