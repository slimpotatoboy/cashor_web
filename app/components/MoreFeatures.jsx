export default function MoreFeatures() {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full " src="/reminder.svg" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Comprehensive Cash Management
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              💸 Cashor simplifies cash management by providing a robust
              cashbook feature. Track income, expenses, and cash flow
              effortlessly, gain insights into your financial health, and make
              informed decisions. 💸
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Streamlined Order Management 🛒
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              With Cashor, you can efficiently create, track, and manage orders
              from start to finish. Monitor order statuses, update progress, and
              ensure timely delivery, all within a centralized platform for
              enhanced order processing
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full" src="/order.svg" alt="dashboard image" />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full" src="/product.svg" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Integrated Product Management 🗳️
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Cashor enables you to effectively manage your products, including
              inventory, pricing, and stock levels. Stay organized, update
              product information in real-time, and optimize product
              availability to meet customer demand with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
