import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ThirdBody = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-50% to-purple-200 to-90% flex flex-col justify-center items-center gap-4 rounded-2xl mx-8">
      <div className="grid grid-cols-2 text-white gap-4 m-2 md:flex md:flex-row md:mt-10 md:gap-8 lg:gap-20 py-2">
        <div>
          <h2 className="font-semibold text-lg mb-3 lg:text-xl">Company</h2>
          <div className="text-xs space-y-2 lg:text-sm">
            <h1>About Us</h1>
            <h1>Bulk SMS Nepal</h1>
            <h1>Bulk SMS Service</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3 lg:text-xl">Services</h2>
          <div className="text-xs space-y-2 lg:text-sm">
            <h1>Bulk SMS to Nepal</h1>
            <h1>SMS Gateway API</h1>
            <h1>SMS Shortcodes</h1>
            <h1>SMS Voting</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3 lg:text-xl">
            Get in Touch
          </h2>
          <div className="text-xs space-y-2 lg:text-sm">
            <h1>Contact Us</h1>
            <h1>Careers</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3 lg:text-xl">Support</h2>
          <div className="text-xs space-y-2 lg:text-sm">
            <h1>Help Center</h1>
            <h1>Cookie policy</h1>
            <h1>Terms of services</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>

      <hr className="w-[80%]" />

      <div className="flex gap-2 md:w-80 justify-between py-4 text-2xl md:text-4xl text-white">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default ThirdBody;
