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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../assets/sample/products_image/collection_protonx50/image1.jpg'
import image2 from '../../assets/sample/products_image/collection_protonx50/image2.jpg'
import image3 from '../../assets/sample/products_image/collection_protonx50/image3.jpg'
import image4 from '../../assets/sample/products_image/collection_protonx50/image4.jpg'
import image5 from '../../assets/sample/products_image/collection_protonx50/image5.jpg'
import image6 from '../../assets/sample/products_image/collection_protonx50/image6.jpg'
import { IoPricetagOutline } from "react-icons/io5";

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
      image: headlightBulb,
    },
  ];

  const categories1 = [
    {
      id: 1,
      Des: "Proton X50 Premium Car Seat Extension 🔥Unlock a Better Driving Experience 🔥Leg Rest🔥Proton X50 Accessories",
      price: 70.00,
      image: image1
    },
    {
      id: 2,
      Des: "Sesuai Untuk Proton X50 X70 Saga Iriz Persona Exora Invisible Car Seat Belt Buckle Penyambung Tetap Buckle",
      price: 90.00,
      image: image2
    },
    {
      id: 3,
      Des: "Car Seat Belt Buckle Penyambung Tetap Buckle Buckle Multi-Fungsi Kunci  Buckle Buckle Multi-Fungsi Kunci",
      price: 30.00,
      image: image3
    },
    {
      id: 4,
      Des: "Car Seat Extension 🔥Unlock a Better Driving Experience Better Driving Experience",
      price: 20.00,
      image: image4
    },
    {
      id: 5,
      Des: " Persona Exora Invisible Car Seat Belt Buckle Penyambung Tetap Buckle Buckle Multi-Fungsi Kunci",
      price: 670.00,
      image: image5
    },
    {
      id: 6,
      Des: "Proton X50 Premium Car Seat Extension Unlock a Better",
      price: 200.00,
      image: image6
    },

  ]

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
      items: 4
    }
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

  return (
    <>
      <div className=" mx-auto my-16 px-3 py-3 P-5" id="main__div">
        <div className="flex justify-between " style={{ width: "95%" }}>
          <div>
            <p className=" recommend_tag">Product Categories</p>
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
        <Carousel
          responsive={responsive}
          // infinite={true}
          autoPlay={true}
        // autoPlaySpeed={2000}
        // keyBoardControl={true}
        >
          {categories.map((category) => (
            <div className=" w-full bg-white rounded-lg border-0  flex">
              <img
                className="rounded-t-lg"
                src={category.image}
                alt={category.name}
                id="product__image"
              />
            </div>
          ))}

        </Carousel>
        {/* <div className=" gap-1 flex">
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
        </div> */}
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
      <div className=" mx-auto my-16 px-3 py-3" id="main__div">
        <div className="flex justify-between " style={{ width: "95%" }}>
          <div>
            <p className="recommend_tag">Proton X50 Body Kit</p>
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
        <Carousel
          responsive={responsive1}
          // infinite={true}
          autoPlay={true}
        // autoPlaySpeed={2000}
        // keyBoardControl={true}
        >
          {categories1.map((category) => (
            <div className=" w-full bg-white rounded-lg border-0 category__carousel">
              <img
                className="rounded-t-lg"
                src={category.image}
                alt={category.name}
                id="product__image"
              />
              <div className="category__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                {/* {category.Des} */}
              </div>
              <p
                className="flex category__price">
                <div
                  className="flex items-center justify-center" >
                  <IoPricetagOutline />&nbsp;
                </div>
                From {category.price}
              </p>

            </div>
          ))}

        </Carousel>
        &nbsp;
        {/* deal of the day banner  */}
        <div>
          <div>
            <p className="recommend_tag">Deal of the day</p>
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
