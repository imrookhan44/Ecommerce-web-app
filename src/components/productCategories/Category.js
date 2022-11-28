import React from "react";

function Category() {
  const categories = [
    {
      id: 1,
      name: "Light Bulbs",
      image:
        "https://images.unsplash.com/photo-1635863499244-8fb565faf7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Wiper",
      image:
        "https://images.unsplash.com/photo-1501389512942-06dcb658c93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "engine oil",
      image:
        "https://images.unsplash.com/photo-1590227763209-821c686b932f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      name: "tyres",
      image:
        "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      id: 5,
      name: "cabin filter",
      image:
        "https://images.unsplash.com/photo-1591601642521-51c925207a73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
            <a
              href="http"
              className="

          text-gray-500 text-sm font-semibold hover:text-gray-700
          border-b-2 border-cyan-400 "
            >
              View All &#62;
            </a>
          </div>
        </div>
        &nbsp;
        <div className=" gap-2 flex">
          {categories.map((category) => (
            <div className="bg-white rounded-lg border-0">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={category.image}
                alt={category.name}
              />
            </div>
          ))}
        </div>
        &nbsp;
        {/* black friday banner  */}
        <div>
          <img
            src={
              "https://images.unsplash.com/photo-1635863499244-8fb565faf7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            className="w-full h-56 object-cover rounded-t-lg"
            alt="black friday banner"
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
            <div className="bg-white rounded-lg border-0">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={category.image}
                alt={category.name}
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
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1501389512942-06dcb658c93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              className="w-full h-56 object-cover rounded-t-lg"
              alt="black friday banner"
            />
            &nbsp;
            <img
              src={
                "https://images.unsplash.com/photo-1501389512942-06dcb658c93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              className="w-full h-56 object-cover rounded-t-lg"
              alt="black friday banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
