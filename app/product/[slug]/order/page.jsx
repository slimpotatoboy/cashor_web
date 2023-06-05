"use client";

import { AppwriteService } from "@/app/AppwriteService";
import Loader from "@/app/components/Loader";
import SuccessOrder from "@/app/components/SuccessOrder";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Order({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [product, setProduct] = useState();
  const [business, setBusiness] = useState();
  const [isModal, setIsModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function fetchProduct() {
    try {
      setProduct(await AppwriteService.getProduct(params.slug));
      setIsLoading(false);
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
      setTotalPrice(product.selling_price);
      fetchBusiness(product.business_id);
    }
  }, [product]);

  const orderNow = async (data) => {
    try {
      setIsFormLoading(true);
      const customer = await AppwriteService.createPersonType(
        data.name,
        data.phone,
        data.email,
        data.address,
        product.user_id,
        product.business_id
      );
      if (customer) {
        const order = await AppwriteService.postOrder(
          "pending",
          data.payment_method,
          data.note,
          customer.$id,
          product.business_id,
          totalPrice
        );

        if (order) {
          const orderProducts = await AppwriteService.postOrderProducts(
            order.$id,
            product.$id,
            product.name,
            data.quantity,
            product.selling_price,
            totalPrice
          );
          if (orderProducts) {
            setIsModal(!isModal);
            AppwriteService.sendEmail(
              data.name,
              data.email,
              business.name,
              order.$id
            );
          }
          setIsFormLoading(false);
        }
      }
    } catch (e) {
      setIsFormLoading(false);
    }
  };

  // const totalPrice = () => watch("quantity");

  const onChangePrice = (e) => {
    var val = e.target.value * parseInt(product.selling_price);
    setTotalPrice(val);
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      {isLoading ? (
        <Loader />
      ) : isModal ? (
        !!business && (
          <SuccessOrder
            name={business.name}
            router={router}
            setIsModal={setIsModal}
          />
        )
      ) : (
        <div>
          <div className="flex items-center mb-4">
            <button onClick={() => router.back()}>
              <div className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
            </button>

            <h2 className="text-xl font-bold text-gray-900">Order Now</h2>
          </div>
          <hr />
          {business && (
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
              <div> You are doing business with {business.name}</div>
            </div>
          )}
          <form onSubmit={handleSubmit(orderNow)} className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Full Name"
                  required=""
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small className="text-red-700">Full name is required</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number *
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Phone Number"
                  required=""
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <small className="text-red-700">Phone is required</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Email Address"
                  required=""
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-red-700">Email is required</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Delivery Address
                </label>
                <input
                  type="address"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter Your Delivery Address"
                  required=""
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <small className="text-red-700">Address is required</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Quantity"
                  defaultValue="1"
                  required=""
                  {...register("quantity", {
                    required: true,
                    onChange: (val) => {
                      onChangePrice(val);
                    },
                  })}
                />
                {errors.quantity && (
                  <small className="text-red-700">Quantity is required</small>
                )}
              </div>
              {!!product && (
                <div className="w-full">
                  <label
                    htmlFor="productname"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product Name:
                  </label>
                  <input
                    type="text"
                    id="productname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    defaultValue={product.name}
                    required=""
                    disabled
                  />
                </div>
              )}
              {!!product && (
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product Price:
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    defaultValue={product.selling_price}
                    required=""
                    disabled
                  />
                </div>
              )}
              {!!product && (
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    You&apos;ll be paying Total Price of:
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    defaultValue={totalPrice}
                    required=""
                    disabled
                  />
                </div>
              )}

              <div className="w-full">
                <label
                  htmlFor="payment_method"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mode of Payment
                </label>
                <select
                  id="payment_method"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  {...register("payment_method", { required: true })}
                >
                  <option defaultChecked="true">Select payment method</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="Cashor Pay">Cashor Pay</option>
                  <option value="Fonepay">Fonepay</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
                {errors.payment_method && (
                  <small className="text-red-700">
                    Payment Method is required
                  </small>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Note
                </label>
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  rows="5"
                  {...register("note")}
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 checked:bg-red-500"
                      required=""
                      {...register("remember", { required: true })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      I accept the{" "}
                      <Link href="/" className="text-red-500 hover:underline">
                        terms and condtions
                      </Link>{" "}
                      of Cashor App for Business.
                    </label>
                  </div>
                </div>
                {errors.remember && (
                  <small className="text-red-700">
                    Please tick the terms and conditions
                  </small>
                )}
              </div>
              <div>
                {isFormLoading ? (
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-red-200 "
                    disabled
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
