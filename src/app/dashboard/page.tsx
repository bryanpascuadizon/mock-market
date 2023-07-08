import React from "react";

//COMPONENTS
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";

const Dashboard = () => {
  return (
    <div>
      {/* Top Panel Section: Searching and Sorting Functionality */}
      <section>
        <Header />
      </section>
      {/* Middle Panel Section: List of Products and Filter Product Functionality */}
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Dashboard;
