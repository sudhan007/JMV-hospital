import backdrop from "../assets/equipments.png";

function About() {
  return (
    <div className="pt-24">
      {/* Backdrop Section */}
      <div
        className="relative h-96 w-full"
        style={{ backgroundColor: "rgb(177, 177, 178, 0.3)" }}
      >
        {/* Image on the right side */}
        <img
  src={backdrop}
  alt="Backdrop"
  className="absolute top-0 right-0 w-full md:w-1/2 h-full object-cover sm:object-contain md:opacity-50 opacity-30"
/>

        {/* Text on the left side */}
        <div className="absolute top-0 left-0 space-y-5 w-full md:w-3/4 h-full flex flex-col justify-center px-5 md:pl-20">
          <p className="text-gray-700 flex flex-col gap-5">
            <span className="text-3xl md:text-5xl xl:text-6xl text-center md:text-left">
              Your trusted source for all medical equipment needs
            </span>

            <p className="text-xl md:text-2xl text-center md:text-left">
              Unbeatable prices, exceptional quality, and cutting-edge style
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
