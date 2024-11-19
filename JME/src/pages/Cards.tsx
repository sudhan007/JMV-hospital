import { FaTruck, FaRupeeSign, FaHeadset } from "react-icons/fa"; // Importing icons from react-icons

function Cards() {
  return (
    <div className="flex md:my-24 my-12 justify-center items-center px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-10 w-full max-w-5xl">
        {/* Free Delivery Card */}
        <div className="flex flex-col items-center md:p-6 p-2 border rounded-lg shadow-md bg-white md:hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
          <FaTruck className="text-gray-400 md:text-4xl text-2xl md:mb-6 mb-2" />
          <h3 className="md:text-xl text-base font-semibold">Free Delivery</h3>
          <p className="text-center md:text-lg text-sm text-gray-600">
            Get your orders delivered to your doorstep for free!
          </p>
        </div>

        {/* Secure Payment Card */}
        <div className="flex flex-col items-center md:p-6 p-2 border rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
          <FaRupeeSign className="text-gray-400 md:text-4xl text-2xl md:mb-6 mb-2" />
          <h3 className="md:text-xl text-base font-semibold">Secure Payment</h3>
          <p className="text-center md:text-lg text-sm text-gray-600">
            Your transactions are safe and secure with us.
          </p>
        </div>

        {/* 24/7 Support Card */}
        <div className="flex flex-col items-center md:p-6 p-2 border rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 lg:w-1/3">
          <FaHeadset className="text-gray-400 md:text-4xl text-2xl md:mb-6 mb-2" />
          <h3 className="md:text-xl text-base font-semibold">24/7 Support</h3>
          <p className="text-center md:text-lg text-sm text-gray-600">
            Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
