"use client";

import { Footer } from "flowbite-react";

export default function FooterBar() {
  return (
    <Footer container>
      <div className="w-full px-0 md:px-20">
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
                <Footer.Link href="/about">Cashor App</Footer.Link>
                <Footer.Link href="https://hashnode.com/hackathons/appwrite" target="_blank">Appwrite Hackathon</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/slimpotatoboy" target="_blank">Github</Footer.Link>
                <Footer.Link href="https://dipenmaharjan.com.np/" target="_blank">Portfolio</Footer.Link>
                <Footer.Link href="https://twitter.com/slimpotatoboy" target="_blank">Twitter</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/slimpotatoboy/" target="_blank">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/privacy-policy">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright by="Cashor App For Business" href="/" year={2023} />
        </div>
      </div>
    </Footer>
  );
}
