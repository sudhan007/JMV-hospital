import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import productData from "../data/products.json";

function OurProducts() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

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
    <div className="md:py-20 py-10">
      <div className="flex flex-col w-full gap-5 justify-center items-center">
      <h1 className="font-semibold md:text-3xl text-xl  tracking-wider">OUR PRODUCT</h1>
        <hr className="bg-blue-500/20 h-0.5 md:w-[300px] w-[150px]" />
      </div>

      <div className="relative w-full flex justify-center items-start">
        <section className="md:w-5/6 pl-5 md:pl-0 flex mt-10 overflow-x-auto">
          <div
            ref={scrollContainerRef}
            className="flex md:gap-10 gap-5 w-max justify-center items-center scroll-smooth py-2"
          >
            {productData.products.map((product, index) => (
              <div
                key={index}
                onClick={() => navigate(`/product/${(product.productCode)}`)} // Navigate to product view
                className="md:h-[460px] md:w-96 w-60 h-[300px]  border rounded-lg shadow-md flex flex-col items-center justify-between group transform transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              >
                <div className="relative md:h-[460px] h-[300px] w-full p-3 overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="h-full w-full object-contain rounded-t-lg group-hover:scale-90 transition-transform duration-700"
                  />
                  <button
                    className="absolute inset-0 rounded bg-gray-900/50 text-blue-100 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  >
                    <p className="border py-1 px-6 rounded-xl hover:scale-125 hover:opacity-100 hover:transform transition-all duration-700">
                      Explore
                    </p>
                  </button>
                </div>

                <div
                  style={{ backgroundColor: "rgb(177, 177, 178, 0.1)" }}
                  className="relative text-center w-full md:h-1/6 h-1/4 group-hover:h-1/4 transition-all duration-500 flex flex-col justify-center items-center"
                >
                  <p className="font-semibold md:text-lg text-sm">{product.productName}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurProducts;
