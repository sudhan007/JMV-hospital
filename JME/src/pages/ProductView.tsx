import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import Footer from "./Footer";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useEffect } from "react";
import React from "react";

function ProductView() {
  const { code } = useParams<{ code: string }>(); // Get the product code from URL params

  // Find the product using the code
  const product = productsData.products?.find((p) => p.productCode === code);

  if (!product) {
    return (
      <div className="mt-32">
        <h2 className="text-xl font-bold">
          Product with code <span className="text-red-500">{code}</span> not found.
        </h2>
      </div>
    );
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20 flex flex-col min-h-screen overflow-y-auto">
      <div className="px-5 py-5">
        <hr className="w-1/2 h-0.5 bg-blue-900/40" />
        <h1 className="md:text-3xl text-xl font-bold my-5">{product.productName}</h1>
        <hr className="w-3/4 h-0.5 bg-blue-900/60" />

        <div className="flex flex-col lg:flex-row gap-10  mt-10">
          {/* Fixed Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:px-10 px-5 sticky top-0">
            <div className="shadow-md shadow-blue-100 w-full hover:shadow-blue-300 flex justify-center items-center rounded">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full md:w-3/4 h-[300px] md:h-[500px] hover:scale-110 transition-transform duration-500 object-contain rounded"
              />
            </div>
          </div>

          {/* Scrollable Right Side */}
          <div className="w-full md:w-1/2  md:pr-10 px-5 flex flex-col gap-5">
            <p className="md:text-xl text-base md:text-left text-center">
              {product.description.split('<Br />').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="md:text-xl text-base">
              <strong>Product Code:</strong> {product.productCode}
            </p>
            <p className="md:text-xl text-base">
              <strong>Category:</strong> {product.category}
            </p>

            {/* Product Details Table */}
            {product.productDetails &&
  Array.isArray(product.productDetails) &&
  product.productDetails.length > 0 &&
  product.productDetails.map((detail, detailIdx) => (
    <div key={detailIdx}>
      <div className="overflow-x-auto"> {/* Wrap table with this div for horizontal scrolling */}
        <table className="table-auto border-collapse border border-gray-300 w-full mb-1">
          {detail.th && detail.th.length > 0 && (
            <thead>
              <tr>
                {detail.th.map(
                  (header: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, idx: Key | null | undefined) => (
                    <th key={idx} className="border text-sm md:text-lg border-gray-300 px-4 py-2">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
          )}
          <tbody>
            {detail.tb.map((row: any[], rowIdx: Key | null | undefined) => (
              <tr key={rowIdx}>
                {row.map(
                  (cell: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, cellIdx: Key | null | undefined) => (
                    <td key={cellIdx} className="border text-sm md:text-lg border-gray-300 px-4 py-2">
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))}


            {/* Product Features */}
            {product.features && Object.keys(product.features).length > 0 && (
              <div className="mt-5">
                <h3 className="font-semibold text-lg md:text-xl pb-2">Product Features:</h3>
                {Object.entries(product.features).map(([featureKey, featureList], featureIdx) => (
                  <div key={featureIdx} className="mb-4 md:pl-10 pl-5">
                    <h3 className="font-semibold text-lg md:text-xl">{featureKey}</h3>
                    <ul className="list-disc list-inside">
                      {Array.isArray(featureList) &&
                        featureList.map((item, idx) => (
                          <li key={idx} className="text-gray-700 md:text-lg text-sm">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProductView;
