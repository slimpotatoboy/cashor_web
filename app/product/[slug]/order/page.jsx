"use client";

import { useRouter } from 'next/navigation';

export default function Order({ params }) {
  const router = useRouter();

  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
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
      <form action="#" className="mt-5">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Your Full Name"
              required=""
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Your Phone Number"
              required=""
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter Your Email Address"
              required=""
            />
          </div>
          <div className="sm:col-span-2">
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
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              You&apos;ll be paying Total Price of:
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              defaultValue="1000"
              required=""
              disabled=""
            />
          </div>
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
            >
              <option defaultChecked="true">Select payment method</option>
              <option value="Cashor Pay">Cashor Pay</option>
              <option value="Fonepay">Fonepay</option>
              <option value="Credit Card">Credit Card</option>
            </select>
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
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">
                  I accept the terms and condtions of Cashor App for Business.
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
            >
              Order Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
