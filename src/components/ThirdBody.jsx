import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ThirdBody = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-50% to-purple-200 to-90% h-72 w-full flex flex-col justify-center items-center gap-4 rounded-2xl">
      <div className="flex justify-between w-4/5 text-white">
        <div>
          <h2 className="font-semibold text-lg mb-3">Company</h2>
          <div className="text-xs space-y-2">
            <h1>About Us</h1>
            <h1>Bulk SMS Nepal</h1>
            <h1>Bulk SMS Service</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Services</h2>
          <div className="text-xs space-y-2">
            <h1>Bulk SMS to Nepal</h1>
            <h1>SMS Gateway API</h1>
            <h1>SMS Shortcodes</h1>
            <h1>SMS Voting</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Get in Touch</h2>
          <div className="text-xs space-y-2">
            <h1>Contact Us</h1>
            <h1>Careers</h1>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Support</h2>
          <div className="text-xs space-y-2">
            <h1>Help Center</h1>
            <h1>Cookie policy</h1>
            <h1>Terms of services</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
      <hr className="w-[40rem]" />
      <div className="flex w-80 justify-between p-3 text-4xl text-white mr-12">
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
