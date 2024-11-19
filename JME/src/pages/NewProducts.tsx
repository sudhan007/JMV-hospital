import { useRef, useState, useEffect } from "react";
import productData from "../data/products.json";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function NewProducts() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
const navigate=useNavigate();
  // To adjust the scroll amount, we can use the state and event listener to track scroll behavior
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const updateArrowState = () => {
      if (scrollContainer) {
        // Handle arrow state updates if needed
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateArrowState);
    }

    updateArrowState();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateArrowState);
      }
    };
  }, []);

  return (
  <div className="pt-10">
  <div className="flex flex-col w-full gap-5 justify-center items-center">
  <h1 className="font-semibold md:text-3xl text-xl  tracking-wider">NEW PRODUCT</h1>
        <hr className="bg-blue-500/20 h-0.5 md:w-[300px] w-[150px]" />
  </div>

  <div className="relative w-full flex justify-center items-center">
    <section className="w-5/6 flex mt-10 overflow-x-auto">
      <div
        ref={scrollContainerRef}
        className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-2"
      >
        {/* First Product Card */}
        <div
          onClick={() => navigate(`/product/${productData.products[0].productCode}`)}
          className="md:h-[620px] w-full md:w-1/2 border rounded-lg shadow-md flex flex-col items-center justify-between group transform transition-transform duration-500 group-hover:scale-105"
        >
          <div className="relative md:h-[460px] w-full p-3 overflow-hidden">
            <img
              src={productData.products[0].productImage}
              alt={productData.products[0].productName}
              className="h-full w-full object-contain rounded-t-lg group-hover:scale-90 transition-transform duration-700"
            />
            <button className="absolute inset-0 rounded bg-gray-900/50 text-blue-100 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="border py-1 px-6 rounded-xl hover:scale-125 hover:opacity-100 hover:transform transition-all duration-700">
                Explore
              </p>
            </button>
          </div>
          <div
            style={{ backgroundColor: "rgb(177, 177, 178, 0.1)" }}
            className="relative text-center w-full h-1/6 group-hover:h-1/4 transition-all duration-500 flex flex-col justify-center items-center"
          >
            <p className="font-semibold text-lg">{productData.products[0].productName}</p>
          </div>
        </div>

        {/* Next 4 Product Cards */}
        <div className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-2 md:gap-10 gap-2">
          {productData.products.slice(1, 5).map((product, index) => (
            <div
              key={index}
              onClick={() => navigate(`/product/${product.productCode}`)}
              className="border md:h-72 h-56 rounded-lg shadow-md flex flex-col items-center justify-between group transform transition-transform duration-300 group-hover:scale-105"
            >
              <div className="relative md:h-60 h-32 w-full p-3 overflow-hidden">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="h-full w-full object-contain rounded-t-lg group-hover:scale-95 transition-transform duration-500"
                />
                <button className="absolute inset-0 rounded bg-gray-900/50 text-blue-100 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="border py-1 px-6 rounded-xl hover:scale-110 hover:opacity-100 hover:transform transition-all duration-700">
                    Explore
                  </p>
                </button>
              </div>
              <div
                style={{ backgroundColor: "rgb(177, 177, 178, 0.1)" }}
                className="relative text-center w-full md:h-1/6  h-1/4 group-hover:h-1/4 transition-all duration-300 flex flex-col justify-center items-center"
              >
                <p className="font-semibold md:text-lg text-sm">{product.productName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>

  );
}

export default NewProducts;
