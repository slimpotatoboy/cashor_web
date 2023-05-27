"use client";

import { AppwriteService } from "@/app/AppwriteService";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Product({ params }) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState();
  const [thumbnail, setThumbnail] = useState();

  async function fetchProduct() {
    setIsLoading(true);
    try {
      setProduct(await AppwriteService.getProduct(params.slug));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }
  async function fetchImage(imageId) {
    try {
      setThumbnail(await AppwriteService.readImage(imageId));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product != null) {
      fetchImage(product.thumbnail);
    }
  }, [product]);

  return (
    <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16">
      {isLoading && <Loader />}
      {!!product && (
        <div className="">
          <div className="flex flex-col md:flex-row">
            {!!thumbnail && (
              <div>
                <img
                  src={thumbnail}
                  alt=""
                  className="h-auto w-full md:w-max rounded-lg"
                />
              </div>
            )}
            <div className="mt-5 md:mt-0 md:pl-5">
              <span className="text-sm mb-4 bg-red-600 text-white px-4 py-2 rounded-full inline-block">
                {product.category_name}
              </span>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <h2 className="text-2xl mt-3">Rs. {product.selling_price} /-</h2>
              <p className="mt-2">{product.description}</p>
              <Link href={`/product/${params.slug}/order`}>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
