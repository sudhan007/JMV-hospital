import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo1-removebg-preview.png"
function Footer() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-blue-100 border-t to-blue-300 text-white py-10 px-5 animate-wave">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
        {/* Inquiry Form Section */}
        <div className="space-y-4">
          <h2 className="text-2xl text-blue-900 font-semibold">Inquire with Us</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-transparent  text-blue-800 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-transparent text-blue-800 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg bg-transparent text-blue-800 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Location Section */}
        <div className="space-y-4">
          <h2 className="text-2xl text-blue-900 font-semibold">Our Location</h2>
          <p className="text-lg text-blue-900/80">
            Jeya Medical Enterprises, 123 Health St., Medical City, Country
          </p>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24353.442517473946!2d-74.00601536422726!3d40.712775634308045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAwJzE0LjAiTiA3NMKwMDcnMjAuNiJX!5e0!3m2!1sen!2sus!4v1593576532276!5m2!1sen!2sus"
            className="w-full h-64 rounded-lg border-none"
            style={{ borderRadius: "8px" }}
            
            loading="lazy"
          />
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-900">Follow Us</h2>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-125  duration-600 hover:text-blue-500 transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-125  duration-600 hover:text-blue-500 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-125  duration-600 hover:text-blue-500 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-125  duration-600 hover:text-blue-500 transition-all"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="pt-16">
          <img src={logo} alt="" className="w-64" />
        </div>
        </div>
       
      </div>
      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <p className="text-sm text-blue-900">
          &copy; 2024 Jeya Medical Enterprises. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
