import React from "react";
import Header from "../../components/Header/Header";
import Category from "../../components/productCategories/Category";
import Recommend from "../../components/Recommend/Recommend";

function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Recommend />
    </div>
  );
}

export default Home;
