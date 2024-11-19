import productData from "../data/products.json";
import { useNavigate } from "react-router-dom";
function FeaturedProducts() {
  const navigate=useNavigate();
  return (
    <div className=" ">
     <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-semibold md:text-3xl text-xl  tracking-wider">FEATURED PRODUCT</h1>
        <hr className="bg-blue-500/20 h-0.5 md:w-[300px] w-[150px]" />
      </div>
      <section className="w-full  flex justify-center mt-10">
      <div className="flex gap-10 md:flex-row flex-col w-5/6 justify-center items-center">
  {productData.products.slice(0, 3).map((product, index) => (
    <div
      key={index}
      onClick={() => navigate(`/product/${(product.productCode)}`)} 
      className="md:h-[460px] h-[300px] md:w-96 border rounded-lg shadow-md flex flex-col items-center justify-between group transform transition-transform duration-500 group-hover:scale-105"
    >
      {/* Image with scale effect */}
      <div className="relative md:h-[460px] h-[300px] w-full p-3 overflow-hidden">
        <img
          src={product.productImage}
          alt={product.productName}
          className="h-full w-full object-contain rounded-t-lg group-hover:scale-90 transition-transform duration-700"
        />
        {/* Explore Now button */}
        <button
  className="absolute inset-0  rounded bg-gray-900/50 text-blue-100 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
>
<p  className="border py-1 px-6 rounded-xl hover:scale-125 hover:opacity-100 hover:transform transition-all duration-700">
  Explore
</p>
</button>
      </div>

      {/* Name container */}
      <div
      style={{ backgroundColor: "rgb(177, 177, 178, 0.1)" }}
        className="relative text-center  w-full md:h-1/6 h-1/4 group-hover:h-1/4 transition-all duration-500 flex flex-col justify-center items-center"
      >
        <p className="font-semibold text-lg">{product.productName}</p>
      </div>
    </div>
  ))}
</div>



      </section>
    </div>
  );
}

export default FeaturedProducts;
