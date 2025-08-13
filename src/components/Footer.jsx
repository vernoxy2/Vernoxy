import React from "react";
import logo from "../assets/footLogo.png";
import {
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FootBg from "../assets/FootBg.webp";
import { RiInstagramLine, RiWhatsappFill } from "react-icons/ri";

const style = {
  backgroundImage: `url(${FootBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <footer
      style={style}
      className="w-full pt-10 pb-20 bg-gradient-to-b from-[#37A6D0]/40 to-white"
    >
      <div className="container flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
        {/* Left: Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <img src={logo} alt="Logo" className="h-14 mb-2" />
          <div className="h-1 w-32 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-4" />
          <p className="text-black mb-6 max-w-md">
            Transforming Ideas into Digital Excellence. <br />
            Elevate your online presence with our innovative solutions and
            strategic digital services.
          </p>
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-1">Follow Us</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <div className="flex gap-4">
              <a href="#" aria-label="WhatsApp">
                <RiWhatsappFill size={38} className="text-[#232323]" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook size={38} className="text-[#232323]" />
              </a>
              <a href="#" aria-label="Instagram">
                <RiInstagramLine
                  size={38}
                  className="bg-[#232323] rounded-full text-white p-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Center: Services & Support */}
        <div className="flex flex-col md:flex-row gap-10 flex-1 min-w-[200px]">
          <div>
            <h3 className="font-bold text-2xl mb-1">Services</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <ul className="space-y-2 text-lg">
              <li>Ui/UX Designer</li>
              <li>Web Development</li>
              <li>Graphics Designer</li>
              <li>Video Editing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-1">Support</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <ul className="space-y-2 text-lg">
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Right: Contact & Company */}
        <div className="flex flex-col-reverse  xl:flex-col sm:flex-row lg:flex-col gap-10 flex-1 min-w-[250px]">
          {/* Contact Us */}
          <div className="flex-1">
            <h3 className="font-bold text-2xl mb-1">Contact Us</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />

            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt size={28} className="mt-1 shrink-0" />
              <div>
                <span className="font-bold">
                  Kalaji Business Center, Dharampur Chokdi, NH8,
                </span>
                <br />
                <span className="text-sm">
                  near Saurashtra Kadva Patidar Samaj Vadi, Abrama Village,
                  Valsad, Gujarat 396001
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <FaEnvelope size={24} className="shrink-0" />
              <div>
                <span className="font-bold">vernoxy2@gmail.com</span>
                <br />
                <span className="text-sm">Any queries? Mail Now.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt size={24} className="shrink-0" />
              <div>
                <span className="font-bold">+91 998 9149 443</span>
                <br />
                <span className="text-sm">Call us for any queries</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="flex-1">
            <h3 className="font-bold text-2xl mb-1">Company</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <ul className="space-y-2 text-lg">
              <li>Home</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
