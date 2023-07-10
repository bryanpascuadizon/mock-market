"use client";

import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { getProduct, getProducts } from "@/lib/ProductActions";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loadProducts } from "@/utils/reducers/productReducer";
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
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductList = async () => {
      const data = await getProducts();
      setProductList(data);
      dispatch(loadProducts);
    };

    getProductList();
  }, []);

  return (
    <div className="product_container">
      <div className="products_left_panel">
        <Categories />
      </div>
      <div className="products_right_panel h-full grid xxxl:grid-cols-4 xxl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-6">
        {productList.map((product: ProductProps) => (
          <Link
            href={`/products/${product.category}/${product.id}`}
            key={product.id}
          >
            <Image
              src={product.image}
              alt=""
              width="90"
              height="90"
              className="w-full h-40 object-contain mb-5"
              priority={true}
            />
            <p className="font-bold text-sm text-blueGrey-600 mb-1">
              {product.category.toUpperCase()}
            </p>
            <p className="font-bold text-sm text-blueGrey-900 mb-1">
              {product.title.toUpperCase()}
            </p>
            <p className="font-bold text-sm text-blueGrey-900  mb-1">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
