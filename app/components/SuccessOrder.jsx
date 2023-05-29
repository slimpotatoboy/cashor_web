export default function SuccessOrder({ name, router, setIsModal }) {
  return (
    <div>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Order Placed
      </h2>
      <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Thank you for placing your order with {name}! Should you have any
        questions or require any further assistance regarding your order, please
        don&apos;t hesitate to reach out to our customer support team. We are
        here to assist you every step of the way.
      </p>
      <button
        onClick={() => {
          setIsModal(false);
          router.push("/");
        }}
        className="inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4"
      >
        Back to Homepage
      </button>
    </div>
  );
}
