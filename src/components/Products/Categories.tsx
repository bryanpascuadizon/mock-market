import { getCategories } from "@/lib/ProductActions";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([""]);

  useEffect(() => {
    const getCategoryList = async () => {
      const data: string[] = await getCategories();
      setCategories(data);
    };

    getCategoryList();
  }, []);
  return (
    <div className="">
      <p className="mb-5 text-lg font-extrabold">PRODUCT CATEGORIES</p>
      {categories.map((category) => (
        <p className="mb-2 text-blueGrey-600" key={category}>
          {category.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default Categories;
