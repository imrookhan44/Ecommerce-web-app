import React from "react";
import { Link } from "react-router-dom";
import headlightBulb from "../../assets/sample/icon_homepage_cat/Headlightbulb.jpg";
import sunShades from "../../assets/sample/icon_homepage_cat/Sunshades.jpg";
import wiper from "../../assets/sample/icon_homepage_cat/Wiper.jpg";
import tyre from "../../assets/sample/icon_homepage_cat/Tyre.jpg";
import cabinFilter from "../../assets/sample/icon_homepage_cat/Cabinfilter.jpg";
import blackFriday from "../../assets/sample/banners/Banner1.jpg";
import banner2 from "../../assets/sample/banners/Banner2.jpg";
import banner3 from "../../assets/sample/banners/Banner3.jpg";
function Category() {
  const categories = [
    {
      id: 1,
      name: "Light Bulbs",
      image: headlightBulb,
    },
    {
      id: 2,
      name: "Wiper",
      image: sunShades,
    },
    {
      id: 3,
      name: "engine oil",
      image: wiper,
    },
    {
      id: 4,
      name: "tyres",
      image: tyre,
    },
    {
      id: 5,
      name: "cabin filter",
      image: cabinFilter,
    },
  ];

  return (
    <>
      <div className=" mx-auto my-16 px-3 py-3">
        <div className="flex justify-between ">
          <div>
            <p className="text-xl text-gray-700 ">Product Categories</p>
          </div>
          <div>
            <Link
              to="pcategories"
              className="

          text-gray-500 text-sm font-semibold hover:text-gray-700
          border-b-2 border-cyan-400 "
            >
              View All &#62;
            </Link>
          </div>
        </div>
        &nbsp;
        <div className=" gap-2 flex">
          {categories.map((category) => (
            <div className=" w-full bg-white rounded-lg border-0">
              <img
                className="rounded-t-lg"
                src={category.image}
                alt={category.name}
                id="product__image"
              />
            </div>
          ))}
        </div>
        &nbsp;
        {/* black friday banner  */}
        <div className="w-full">
          <img
            src={blackFriday}
            className="rounded-t-lg"
            alt="black friday banner"
            id="banner"
          />
        </div>
      </div>
      <div className=" mx-auto my-16 px-3 py-3">
        <div className="flex justify-between ">
          <div>
            <p className="text-xl text-gray-700 ">Proton X50 Body Kit</p>
          </div>
          <div>
            <a
              href="http"
              className="text-gray-500 text-sm font-semibold hover:text-gray-700border-b-2 border-cyan-400 "
            >
              View All &#62;
            </a>
          </div>
        </div>
        &nbsp;
        <div className="flex gap-2 overflow-hidden">
          {categories.map((category) => (
            <div className="w-full bg-white rounded-lg border-0">
              <img
                className=" object-cover rounded-t-lg"
                src={category.image}
                alt={category.name}
                id="product__image"
              />
            </div>
          ))}
        </div>
        &nbsp;
        {/* deal of the day banner  */}
        <div>
          <div>
            <p className="text-xl text-gray-700">Deal of the day</p>
          </div>
          <div className="w-full">
            <img
              src={banner2}
              className="rounded-t-lg"
              alt="black friday banner"
              id="banner"
            />
            &nbsp;
            <img
              src={banner3}
              className="rounded-t-lg"
              alt="black friday banner"
              id="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
