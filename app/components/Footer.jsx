"use client";

import { Footer } from "flowbite-react";

export default function FooterBar() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-5 md:mb-0">
            <Footer.Brand
              alt="Cashor Logo"
              href="https://dipenmaharjan.com.np"
              name="Cashor App For Business"
              src="/logo11.png"
            />
            <div className="mb-3 mt-4 max-w-md text-gray-600">
              Cashor provides you all-in-one solution that saves you time,
              enhances your cash management and order management for your
              business. We are committed to continuously improving our app,
              adding new features based on user feedback, and providing
              top-notch customer support.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-14">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Cashor App</Footer.Link>
                <Footer.Link href="#">Appwrite Hackathon</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Portfolio</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright by="Cashor App For Business" href="#" year={2023} />
        </div>
      </div>
    </Footer>
  );
}
