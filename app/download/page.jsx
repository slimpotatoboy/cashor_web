import Link from "next/link";

export default function DownloadNow() {
  return (
    <div>
      <section className="bg-white my-8">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full"
            src="/mobile.svg"
            alt="download app"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Download Cashor now and streamline your cash, products, orders,
              and more
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Unlock the Power of Seamless Business Management. Take control of
              your business operations with just a few taps. Download now to
              simplify cash management, track products, streamline orders, and
              optimize your operations Get started today!
            </p>
            <div className="inline-block">
              <Link
                href="/app/cashor.apk"
                className="block flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                <svg
                  className="text-white w-6 h-6 mr-3"
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
                Download APK Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
