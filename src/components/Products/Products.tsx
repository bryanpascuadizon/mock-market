"use client";

import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { getProduct, getProducts } from "@/app/lib/ProductActions";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const data = await getProducts();
      console.log(data);
      setProductList(data);
    };

    getProductList();
  }, []);

  return (
    <div className="flex">
      <div className="products_left_panel w-[25%]">
        <Categories />
      </div>
      <div className="products_right_panel w-full h-full grid xxxl:grid-cols-4 xxl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-6">
        {productList.map((product: ProductProps) => (
          <Link href={`/products/${product.category}/${product.id}`}>
            <Image
              src={product.image}
              alt=""
              width="90"
              height="90"
              className="w-full h-40 object-contain mb-5"
            />
            <p className="font-bold text-sm text-blueGrey-500 mb-1">
              {product.category.toUpperCase()}
            </p>
            <p className="font-bold text-sm text-blueGrey-900 mb-1">
              {product.title}
            </p>
            <p className="font-bold text-sm text-blueGrey-500  mb-1">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;