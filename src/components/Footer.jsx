import React from 'react';
import logo from "../assets/footLogo.png";
import { FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-20 bg-gradient-to-b from-[#37A6D0]/40 to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row md:justify-between gap-10 lg:mt-12">
        {/* Left: Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <img src={logo} alt="Logo" className="h-14 mb-2" />
          <div className="h-1 w-32 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-4" />
          <p className="text-black mb-6">
            Transforming Ideas into Digital Excellence. <br />
            Elevate your online presence with our innovative solutions and strategic digital services.
          </p>
          <div>
            <h3 className="font-bold text-lg mb-1">Follow Us</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <div className="flex gap-4">
              <a href="#" aria-label="WhatsApp"><FaWhatsapp size={38} className="text-[#232323]" /></a>
              <a href="#" aria-label="Facebook"><FaFacebook size={38} className="text-[#232323]" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={38} className="text-[#232323]" /></a>
            </div>
          </div>
        </div>

        {/* Center: Services & Support */}
        <div className="flex flex-col sm:flex-row gap-10 flex-1 lg:justify-center">
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
        <div className="flex flex-col-reverse sm:flex-row gap-10 flex-1 lg:justify-end">
          <div>
            <h3 className="font-bold text-2xl mb-1">Contact Us</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-cyan-400 rounded mb-3" />
            <div className="flex items-start gap-3 mb-2">
              <FaMapMarkerAlt size={28} className="mt-1" />
              <div>
                <span className="font-bold">Kalaji Business Center, Dharampur Chokdi, NH8,</span>
                <br />
                <span className="text-sm">
                  near Saurashtra Kadva Patidar Samaj Vadi, Abrama Village, Valsad, Gujarat 396001
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope size={24} />
              <div>
                <span className="font-bold">vernoxy2@gmail.com</span>
                <br />
                <span className="text-sm">Any quires? Mail Now.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={24} />
              <div>
                <span className="font-bold">+91 998 9149 443</span>
                <br />
                <span className="text-sm">Any quires? Mail Now.</span>
              </div>
            </div>
          </div>
          <div>
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
