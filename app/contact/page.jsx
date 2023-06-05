"use client";

import Link from "next/link";
import PrivateBeta from "../components/PrivateBeta";

export default function Contact() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore This App and It&apos;s Creator
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1">
            <div className="items-center bg-gray-50 rounded-lg border sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Link href="#" className="w-1/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/photo.jpg"
                  alt="Bonnie Avatar"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href="#">Dipen Maharjan</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Indie Developer
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Meet Dipen, the visionary behind Cashor. With a passion for
                  business efficiency and innovation, Dipen built this app to
                  empower entrepreneurs worldwide.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <Link
                      href="https://twitter.com/slimpotatoboy"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivateBeta />
    </>
  );
}
