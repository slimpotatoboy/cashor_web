"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function Header({ params }) {
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
            <svg
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
            </svg>
            Download App Now
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        <Navbar.Link href="/feedback">Feedback</Navbar.Link>
        {/* TODO: add link to hashnode */}
        <Navbar.Link href="/feedback">What&apos;s Next?</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
