import Link from "next/link";
import Features from "./components/Features";
import DownloadCta from "./components/DownloadCta";
import MoreFeatures from "./components/MoreFeatures";

export default function Home() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div>
            <Link
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">
                Cashor Beta is out! See what&apos;s new
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Your All-in-One Business Managment App!
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              At Cashor, we&apos;re dedicated to empowering businesses with a
              comprehensive suite of tools to effectively manage their finances,
              products, orders, and overall business operations
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </Link>
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">
                FEATURED IN
              </span>
              <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500">
                <Link
                  href="https://appwrite.io/"
                  target="_blank"
                  className="mr-5 mb-5 lg:mb-0"
                >
                  <svg
                    className="h-20 text-gray-400 hover:text-red-600 transition"
                    viewBox="0 0 384 384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M245.428 251.188C225.963 251.188 207.717 245.97 192.013 236.856C180.23 243.676 167.137 248.24 153.392 250.162C125.4 254.077 96.9988 246.711 74.4371 229.686C63.2548 221.259 53.8425 210.712 46.738 198.647C39.6336 186.582 34.9763 173.235 33.0322 159.369C31.0882 145.503 31.8956 131.39 35.4082 117.836C38.9208 104.282 45.0698 91.5535 53.5038 80.3772C61.9378 69.2008 72.4915 59.7959 84.5617 52.6999C96.632 45.604 109.982 40.9561 123.85 39.0218C137.717 37.0876 151.829 37.9049 165.381 41.427C174.734 43.8581 183.694 47.545 192.02 52.3718C207.723 43.2611 225.966 38.0443 245.428 38.0443C304.287 38.0443 352 85.7574 352 144.616C352 203.475 304.287 251.188 245.428 251.188ZM174.175 65.3628L174.207 65.3348C159.408 58.6947 142.917 56.2743 126.596 58.5567C103.772 61.7486 83.1498 73.8768 69.2675 92.2732C55.3852 110.67 49.3795 133.827 52.5714 156.652C55.7633 179.476 67.8915 200.098 86.2879 213.98C104.684 227.862 127.842 233.868 150.666 230.676C173.491 227.484 194.113 215.356 207.995 196.96C221.877 178.563 227.883 155.406 224.691 132.581C223.218 122.051 219.844 111.99 214.829 102.843C205.746 86.3437 191.457 73.1128 174.175 65.3628ZM60.2808 291.922C57.5061 289.883 54.1506 288.863 50.2139 288.863C46.6568 288.863 43.5025 289.658 40.7517 291.247C38.0008 292.835 35.8542 295.135 34.3126 298.145C32.771 301.158 32 304.703 32 308.781C32 312.812 32.771 316.333 34.3126 319.346C35.8542 322.359 38.0123 324.672 40.787 326.284C43.5617 327.896 46.704 328.703 50.2139 328.703C54.1506 328.703 57.5061 327.683 60.2808 325.644C63.0555 323.605 64.9634 320.901 66.0049 317.533V328.204H70.917V289.358H66.0049V300.029C64.9634 296.663 63.0555 293.961 60.2808 291.922ZM40.9988 297.434C43.6323 294.659 47.1303 293.272 51.4938 293.272C54.2446 293.272 56.7223 293.912 58.9259 295.192C61.1326 296.475 62.8639 298.29 64.1204 300.638C65.3769 302.983 66.0049 305.697 66.0049 308.781C66.0049 311.865 65.3769 314.58 64.1204 316.928C62.8639 319.276 61.1326 321.09 58.9259 322.37C56.7223 323.65 54.2446 324.289 51.4938 324.289C47.1303 324.289 43.6323 322.902 40.9988 320.128C38.3685 317.353 37.0533 313.571 37.0533 308.781C37.0533 303.991 38.3685 300.209 40.9988 297.434ZM111.929 291.247C109.201 289.658 106.059 288.863 102.502 288.863C98.5181 288.863 95.1507 289.883 92.3998 291.922C89.649 293.961 87.7526 296.663 86.711 300.029V289.358H81.7284V346.559H86.711V317.533C87.7526 320.901 89.649 323.605 92.3998 325.644C95.1507 327.683 98.5181 328.703 102.502 328.703C106.012 328.703 109.143 327.896 111.894 326.284C114.644 324.672 116.791 322.359 118.333 319.346C119.874 316.333 120.645 312.812 120.645 308.781C120.645 304.703 119.874 301.158 118.333 298.145C116.791 295.135 114.656 292.835 111.929 291.247ZM93.715 295.192C95.9217 293.912 98.4007 293.272 101.152 293.272C105.562 293.272 109.072 294.659 111.682 297.434C114.289 300.209 115.592 303.991 115.592 308.781C115.592 313.571 114.289 317.353 111.682 320.128C109.072 322.902 105.562 324.289 101.152 324.289C98.4007 324.289 95.9217 323.65 93.715 322.37C91.5114 321.09 89.7929 319.276 88.5602 316.928C87.3276 314.58 86.711 311.865 86.711 308.781C86.711 305.697 87.3276 302.983 88.5602 300.638C89.7929 298.29 91.5114 296.475 93.715 295.192ZM159.808 291.247C157.081 289.658 153.938 288.863 150.381 288.863C146.397 288.863 143.03 289.883 140.279 291.922C137.528 293.961 135.632 296.663 134.59 300.029V289.358H129.608V346.559H134.59V317.533C135.632 320.901 137.528 323.605 140.279 325.644C143.03 327.683 146.397 328.703 150.381 328.703C153.891 328.703 157.022 327.896 159.773 326.284C162.524 324.672 164.67 322.359 166.212 319.346C167.753 316.333 168.524 312.812 168.524 308.781C168.524 304.703 167.753 301.158 166.212 298.145C164.67 295.135 162.536 292.835 159.808 291.247ZM141.594 295.192C143.801 293.912 146.28 293.272 149.031 293.272C153.441 293.272 156.951 294.659 159.561 297.434C162.168 300.209 163.471 303.991 163.471 308.781C163.471 313.571 162.168 317.353 159.561 320.128C156.951 322.902 153.441 324.289 149.031 324.289C146.28 324.289 143.801 323.65 141.594 322.37C139.391 321.09 137.672 319.276 136.439 316.928C135.207 314.58 134.59 311.865 134.59 308.781C134.59 305.697 135.207 302.983 136.439 300.638C137.672 298.29 139.391 296.475 141.594 295.192ZM233.051 288.793H223.659L217.185 319.241L208.363 288.793H197.762L189.014 319.241L182.611 288.793H172.579L183.109 328.204H194.204L202.886 299.535L211.35 328.204H222.45L233.051 288.793ZM253.893 290.39C251.474 291.838 249.531 293.818 248.063 296.331V288.793H238.031V328.204H248.063V309.209C248.063 302.38 251.737 298.966 259.087 298.966H262.005V288.223C259.018 288.223 256.314 288.946 253.893 290.39ZM268.125 273.531C266.986 274.55 266.417 275.865 266.417 277.477C266.417 279.042 266.986 280.336 268.125 281.356C269.263 282.377 270.757 282.888 272.604 282.888C274.455 282.888 275.95 282.377 277.088 281.356C278.227 280.336 278.796 279.042 278.796 277.477C278.796 275.865 278.227 274.55 277.088 273.531C275.95 272.511 274.455 272 272.604 272C270.757 272 269.263 272.511 268.125 273.531ZM277.587 288.793H267.555V328.204H277.587V288.793ZM307.749 319.594H303.839C302.035 319.594 300.754 319.215 299.995 318.459C299.236 317.7 298.856 316.372 298.856 314.474V297.258H307.678V288.793H298.856V279.044H288.825V288.793H283.348V297.258H288.825V314.333C288.825 319.311 289.999 322.868 292.346 325.004C294.694 327.137 298.073 328.204 302.484 328.204H307.749V319.594ZM351.647 310.418C351.882 309.138 352 308 352 307.002C352 303.398 351.206 300.185 349.617 297.364C348.028 294.542 345.775 292.325 342.86 290.713C339.941 289.1 336.538 288.294 332.652 288.294C328.809 288.294 325.393 289.1 322.404 290.713C319.418 292.325 317.095 294.661 315.435 297.721C313.773 300.778 312.942 304.371 312.942 308.498C312.942 312.624 313.773 316.204 315.435 319.241C317.095 322.277 319.418 324.613 322.404 326.249C325.393 327.885 328.809 328.703 332.652 328.703C335.923 328.703 338.899 328.086 341.58 326.854C344.257 325.621 346.451 323.913 348.16 321.73C349.867 319.549 350.981 317.084 351.501 314.333H340.9C340.474 316.278 339.489 317.818 337.948 318.954C336.409 320.092 334.477 320.662 332.153 320.662C329.543 320.662 327.362 319.832 325.608 318.173C323.852 316.513 322.903 313.928 322.762 310.418H351.647ZM339.373 298.679C341.201 300.338 342.042 302.782 341.898 306.009H322.762C322.95 302.782 323.969 300.338 325.82 298.679C327.67 297.019 329.948 296.19 332.652 296.19C335.306 296.19 337.546 297.019 339.373 298.679Z"
                      fill="currentColor"
                    />
                    <path
                      d="M141.487 107.744C141.359 108.059 139.73 114.459 137.975 122.05C136.154 129.641 133.268 141.623 131.64 148.712C128.5 161.698 126.618 170.23 126.618 171.36C126.618 171.671 128.564 171.925 130.946 171.925H135.277L137.219 163.265C138.351 158.561 140.861 147.77 142.868 139.301C144.876 130.831 147.321 120.543 148.264 116.401C149.203 112.26 150.144 108.499 150.334 108.059C150.523 107.495 149.454 107.308 146.193 107.308C143.745 107.308 141.61 107.495 141.487 107.744ZM107.796 134.909L102.024 141.184L103.72 143.19C104.658 144.318 107.233 147.143 109.429 149.465L113.444 153.729H124.862L119.468 147.894C116.517 144.761 114.07 141.748 114.07 141.372C114.07 140.933 116.33 138.111 119.091 135.099C121.85 132.027 124.109 129.388 124.109 129.075C124.109 128.824 121.725 128.636 118.84 128.636H113.633L107.796 134.909ZM151.712 129.011C151.712 129.202 152.779 130.392 154.094 131.71C158.991 136.603 162.441 140.746 162.252 141.559C162.128 142 159.742 144.946 156.858 148.021L151.653 153.729H157.485L163.32 153.667L168.65 147.834C171.601 144.574 173.984 141.684 173.984 141.308C173.984 140.997 171.475 138.047 168.337 134.724L162.693 128.636H157.232C154.158 128.636 151.712 128.824 151.712 129.011Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link href="https://builtwith.appwrite.io/" target="_blank">
                  <svg
                    className="h-11 ml-2 text-gray-400 hover:text-red-600 transition"
                    viewBox="0 0 116 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M115.394 16.2281C115.394 20.7653 111.716 24.4434 107.178 24.4434C105.07 24.4434 103.148 23.6497 101.693 22.3453C104.023 21.2964 105.645 18.9546 105.645 16.2341C105.645 13.5099 104.019 11.1657 101.685 10.1188C103.14 8.80967 105.066 8.01288 107.178 8.01288C111.716 8.01288 115.394 11.691 115.394 16.2281Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M103.893 9.67066C98.8475 5.85779 91.5658 8.93631 90.7864 15.2122C90.4242 18.129 91.6478 21.017 93.9952 22.7858C99.0439 26.5953 106.324 23.5114 107.099 17.2349C107.458 14.3218 106.236 11.4385 103.893 9.67058V9.67066ZM102.98 10.8812C107.096 13.9873 106.306 20.3843 101.558 22.396C99.354 23.3296 96.8194 23.0167 94.909 21.5751C90.7926 18.469 91.5824 12.0719 96.331 10.0604C98.5346 9.12687 101.069 9.43968 102.98 10.8812Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M99.1643 13.3858C99.1546 13.41 99.0288 13.9034 98.8937 14.4887C98.7532 15.0739 98.5307 15.9977 98.4052 16.5441C98.1632 17.5453 98.0181 18.2031 98.0181 18.29C98.0181 18.3141 98.1682 18.3337 98.3517 18.3337H98.6857L98.8354 17.6661C98.9226 17.3035 99.1162 16.4715 99.2708 15.8186C99.4257 15.1657 99.6141 14.3725 99.6868 14.0531C99.7593 13.7339 99.8319 13.444 99.8465 13.41C99.861 13.3665 99.7786 13.3522 99.5271 13.3522C99.3384 13.3522 99.1739 13.3665 99.1643 13.3858ZM96.567 15.4799L96.1221 15.9637L96.2528 16.1185C96.3252 16.2054 96.5238 16.4232 96.6929 16.6023L97.0025 16.9309H97.8829L97.4667 16.4812C97.2393 16.2396 97.0507 16.0072 97.0507 15.9783C97.0507 15.9444 97.2248 15.7269 97.4379 15.4946C97.6505 15.2578 97.8247 15.0544 97.8247 15.0303C97.8247 15.0108 97.641 14.9964 97.4186 14.9964H97.017L96.567 15.4799ZM99.9526 15.0254C99.9526 15.04 100.035 15.1317 100.136 15.2333C100.514 15.6106 100.78 15.93 100.765 15.9926C100.756 16.0267 100.572 16.2539 100.349 16.4908L99.948 16.9309H100.398L100.848 16.9262L101.258 16.4763C101.486 16.225 101.67 16.0022 101.67 15.9734C101.67 15.9493 101.476 15.7219 101.234 15.4657L100.799 14.9964H100.378C100.141 14.9964 99.9526 15.0108 99.9526 15.0254Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.96547 13.08C4.3388 12.4267 4.88547 11.8933 5.60547 11.48C6.32547 11.0667 7.14547 10.86 8.06547 10.86C9.05214 10.86 9.9388 11.0933 10.7255 11.56C11.5121 12.0267 12.1321 12.6867 12.5855 13.54C13.0388 14.38 13.2655 15.36 13.2655 16.48C13.2655 17.5867 13.0388 18.5733 12.5855 19.44C12.1321 20.3067 11.5055 20.98 10.7055 21.46C9.9188 21.94 9.0388 22.18 8.06547 22.18C7.1188 22.18 6.28547 21.9733 5.56547 21.56C4.8588 21.1467 4.32547 20.62 3.96547 19.98V22H2.14547V7.2H3.96547V13.08ZM11.4055 16.48C11.4055 15.6533 11.2388 14.9333 10.9055 14.32C10.5721 13.7067 10.1188 13.24 9.54547 12.92C8.98547 12.6 8.36547 12.44 7.68547 12.44C7.0188 12.44 6.3988 12.6067 5.82547 12.94C5.26547 13.26 4.81214 13.7333 4.46547 14.36C4.13214 14.9733 3.96547 15.6867 3.96547 16.5C3.96547 17.3267 4.13214 18.0533 4.46547 18.68C4.81214 19.2933 5.26547 19.7667 5.82547 20.1C6.3988 20.42 7.0188 20.58 7.68547 20.58C8.36547 20.58 8.98547 20.42 9.54547 20.1C10.1188 19.7667 10.5721 19.2933 10.9055 18.68C11.2388 18.0533 11.4055 17.32 11.4055 16.48ZM25.3811 11.04V22H23.5611V20.38C23.2144 20.94 22.7278 21.38 22.1011 21.7C21.4878 22.0067 20.8078 22.16 20.0611 22.16C19.2078 22.16 18.4411 21.9867 17.7611 21.64C17.0811 21.28 16.5411 20.7467 16.1411 20.04C15.7544 19.3333 15.5611 18.4733 15.5611 17.46V11.04H17.3611V17.22C17.3611 18.3 17.6344 19.1333 18.1811 19.72C18.7278 20.2933 19.4744 20.58 20.4211 20.58C21.3944 20.58 22.1611 20.28 22.7211 19.68C23.2811 19.08 23.5611 18.2067 23.5611 17.06V11.04H25.3811ZM29.3941 9.26C29.0474 9.26 28.7541 9.14 28.5141 8.9C28.2741 8.66 28.1541 8.36667 28.1541 8.02C28.1541 7.67333 28.2741 7.38 28.5141 7.14C28.7541 6.9 29.0474 6.78 29.3941 6.78C29.7274 6.78 30.0074 6.9 30.2341 7.14C30.4741 7.38 30.5941 7.67333 30.5941 8.02C30.5941 8.36667 30.4741 8.66 30.2341 8.9C30.0074 9.14 29.7274 9.26 29.3941 9.26ZM30.2741 11.04V22H28.4541V11.04H30.2741ZM35.1959 7.2V22H33.3759V7.2H35.1959ZM40.5178 12.54V19C40.5178 19.5333 40.6311 19.9133 40.8578 20.14C41.0845 20.3533 41.4778 20.46 42.0378 20.46H43.3778V22H41.7378C40.7245 22 39.9645 21.7667 39.4578 21.3C38.9511 20.8333 38.6978 20.0667 38.6978 19V12.54H37.2778V11.04H38.6978V8.28H40.5178V11.04H43.3778V12.54H40.5178ZM60.783 10.92L57.543 22H54.523L52.503 14.26L50.483 22H47.443L44.183 10.92H47.023L48.983 19.36L51.103 10.92H54.063L56.143 19.34L58.103 10.92H60.783ZM63.718 9.6C63.2246 9.6 62.8113 9.44667 62.478 9.14C62.158 8.82 61.998 8.42667 61.998 7.96C61.998 7.49333 62.158 7.10667 62.478 6.8C62.8113 6.48 63.2246 6.32 63.718 6.32C64.2113 6.32 64.618 6.48 64.938 6.8C65.2713 7.10667 65.438 7.49333 65.438 7.96C65.438 8.42667 65.2713 8.82 64.938 9.14C64.618 9.44667 64.2113 9.6 63.718 9.6ZM65.098 10.92V22H62.298V10.92H65.098ZM71.1244 13.22V18.58C71.1244 18.9533 71.211 19.2267 71.3844 19.4C71.571 19.56 71.8777 19.64 72.3044 19.64H73.6044V22H71.8444C69.4844 22 68.3044 20.8533 68.3044 18.56V13.22H66.9844V10.92H68.3044V8.18H71.1244V10.92H73.6044V13.22H71.1244ZM81.8583 10.76C82.6983 10.76 83.4449 10.9467 84.0983 11.32C84.7516 11.68 85.2583 12.22 85.6183 12.94C85.9916 13.6467 86.1783 14.5 86.1783 15.5V22H83.3783V15.88C83.3783 15 83.1583 14.3267 82.7183 13.86C82.2783 13.38 81.6783 13.14 80.9183 13.14C80.1449 13.14 79.5316 13.38 79.0783 13.86C78.6383 14.3267 78.4183 15 78.4183 15.88V22H75.6183V7.2H78.4183V12.3C78.7783 11.82 79.2583 11.4467 79.8583 11.18C80.4583 10.9 81.1249 10.76 81.8583 10.76Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreFeatures></MoreFeatures>
      <Features></Features>
      <DownloadCta></DownloadCta>
    </div>
  );
}