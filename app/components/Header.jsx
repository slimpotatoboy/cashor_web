"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ params }) {
  const pathname = usePathname();

  return (
    <Navbar className="border-none">
      <Navbar.Brand href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Cashor Logo" className="h-12" src="/logo11.png" />
        <small className="text-gray-500">v1</small>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link href="/download">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg> */}
            <svg
                  className="text-white w-5 h-5 mr-3"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
            Download Cashor Now
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href="/"
              className={`block py-2 pl-3 pr-4  ${
                pathname === "/" ? "text-red-500" : "text-gray-900"
              } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 pl-3 pr-4 ${
                pathname === "/about" ? "text-red-500" : "text-gray-900"
              }  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 pl-3 pr-4 ${
                pathname === "/contact" ? "text-red-500" : "text-gray-900"
              } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/feedback"
              className={`block py-2 pl-3 pr-4 ${
                pathname === "/feedback" ? "text-red-500" : "text-gray-900"
              } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              href="https://spixapp.hashnode.dev/"
              target="_blank"
              className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
            >
              What&apos;s Next?
            </Link>
          </li>
          {/* <li>
            <Link
              href="/shop"
              className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0`}
            >
              Shop Now
            </Link>
          </li> */}
        </ul>
        {/* <Navbar.Link active href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        <Navbar.Link href="/feedback">Feedback</Navbar.Link> */}
        {/* TODO: add link to hashnode */}
        {/* <Navbar.Link href="/feedback">What&apos;s Next?</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
