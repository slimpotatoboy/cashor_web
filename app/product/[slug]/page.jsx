"use client";

import { AppwriteService } from "@/app/AppwriteService";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [business, setBusiness] = useState();

  async function fetchProduct() {
    try {
      setProduct(await AppwriteService.getProduct(params.slug));
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  async function fetchBusiness(id) {
    try {
      setBusiness(await AppwriteService.getBusiness(id));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product != null) {
      fetchBusiness(product.business_id);
    }
  }, [product]);

  useEffect(() => {
    if (product == null && !isLoading) {
      router.push("/not-found");
    }
    if (product != null && business == null && !isLoading) {
      router.push("/not-found");
    }
  }, [product, business, router, isLoading]);

  return (
    <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16">
      {isLoading && <Loader />}
      {!!product && (
        <div className="">
          {!!business && (
            <div
              className="flex p-4 mt-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 "
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>You are doing business with {business.name}</div>
            </div>
          )}
          <div className="flex flex-col md:flex-row">
            <div class="w-2/3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/${process.env.NEXT_PUBLIC_STORAGE_ID}/files/${product.thumbnail}/preview?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`}
                alt=""
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="mt-5 md:mt-0 md:pl-5">
              <span className="text-xs mb-4 bg-red-600 text-white px-3 py-1 rounded-full inline-block">
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
