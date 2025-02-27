'use client'
import { FaPhone, FaGlobe, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-white text-zinc-900 p-4">
      {/* Header Image */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('/owner.jpeg')` }}>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Company Name */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold text-yellow-600">Abdul Matni Kadiri</h1>
        <p className="text-gray-600 text-lg">Managing Director</p>
      </div>

      {/* Social & Contact Icons - Two Rows with Spacing */}
      <div className="w-full max-w-md flex flex-wrap justify-center gap-6 mt-6">
        {/* First Row */}
        <div className="flex space-x-6">
          <a href="tel:+97142560194" className="social-icon"><FaPhone /></a>
          <a href="https://www.kadirigold.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGlobe /></a>
          <a href="https://www.instagram.com/kadirigoldjewelleryllc/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
        </div>

        {/* Second Row */}
        <div className="flex space-x-6 ">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="https://wa.me/97142560194" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
          <a href="mailto:info@kadirigold.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-md bg-yellow-100 rounded-lg p-6 shadow-lg mt-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-600">About</h2>
        <p className="text-gray-700">
          Kadiri Gold is a trusted name in the bullion and jewellery industry, offering premium-quality gold products and exceptional service. Specializing in gold bullion, coins, and exquisite jewellery, we cater to investors and collectors seeking reliability and elegance.
        </p>
      </div>

      {/* Powered By Section */}
      <div className="mt-8 text-center text-gray-600">
        <p>Powered by</p>
        <a href="https://www.artifita.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">www.artifita.com</a>
      </div>

      {/* Styles for social icons */}
      <style jsx>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: white;
          color: #b8860b; /* Gold */
          font-size: 24px;
          border: 2px solid #b8860b; /* Gold Outline */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .social-icon:hover {
          background-color: #b8860b;
          color: white;
        }
      `}</style>
    </div>
  );
}
