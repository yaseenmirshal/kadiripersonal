'use client'
import { FaPhone, FaGlobe, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaBuilding, FaHandshake, FaShieldAlt, FaWallet } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#4A0D0D] text-yellow-400 p-4">
      {/* Header Image */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('/owner.jpeg')` }}>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#4A0D0D] to-transparent"></div>
      </div>

      {/* Company Name */}
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold">Abdul Matni Kadiri</h1>
        <p className="text-gray-300 text-lg">Managing Director</p>
      </div>

      {/* Social & Contact Icons */}
      <div className="w-full max-w-md flex flex-wrap justify-center gap-6 mt-6">
      <div className="flex space-x-6">
          <a href="tel:+97142560194" className="social-icon"><FaPhone /></a>
          <a href="https://www.kadirigold.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGlobe /></a>
          <a href="https://www.instagram.com/kadirigoldjewelleryllc/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
        </div>
        <div className="flex space-x-6">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="https://wa.me/97142560194" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
          <a href="mailto:info@kadirigold.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>
        </div>
      </div>

      {/* Company Name */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">KADIRI GOLD</h1>
        <p className="text-gray-300 text-lg">Bullion Jewellery L.L.C</p>
      </div>

      {/* About Section */}
      <div className="w-full max-w-md text-center bg-[#3B0A0A] rounded-lg p-6 shadow-lg mt-6">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="text-gray-200">
        At Kadiri Gold Jewellery LLC, we specialize in offering high-quality gold bullion for discerning investors. Our commitment to purity, transparency, and excellence ensures that your investment remains secure and valuable.
        </p>
      </div>

      {/* Boxes Section */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-6">
        {[{ heading: 'Gold Bullion', image: '/bullion.jpg' },
          { heading: 'Exquisite Jewellery', image: '/jewellery.jpg' },
          { heading: 'Gold Coins', image: '/coins.jpg' },
          { heading: 'Investment Plans', image: '/investment.jpg' }
        ].map((item, index) => (
          <div key={index} className="bg-[#3B0A0A] rounded-lg p-4 shadow-md text-center">
            <img src={item.image} alt={item.heading} className="w-full h-24 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-bold">{item.heading}</h3>
          </div>
        ))}
      </div>

      {/* Contact Details */}
      <div className="w-full max-w-md space-y-4 mt-6">
        {[{ icon: <FaBuilding />, label: 'Office No.', url: 'tel:+971564226479' },
          { icon: <FaHandshake />, label: 'Dealing', url: 'tel:+971564226950' },
          { icon: <FaShieldAlt />, label: 'Compliance', url: 'tel:+971564226709' },
          { icon: <FaWallet />, label: 'Accounts', url: 'tel:+971564226542' }
        ].map((item, index) => (
          <a key={index} href={item.url} className="w-full flex items-center justify-between bg-[#3B0A0A] rounded-lg p-4 shadow-md hover:bg-[#4A0D0D] transition-all text-white">
            <div className="flex items-center space-x-4">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <HiArrowNarrowRight className="text-xl" />
          </a>
        ))}
      </div>

      {/* Powered By Section */}
      <div className="mt-8 text-center text-gray-300">
        <p>Powered by</p>
        <a href="https://www.artifita.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">www.artifita.com</a>
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
          color: #4A0D0D;
          font-size: 24px;
          border: 2px solid #4A0D0D;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .social-icon:hover {
          background-color: #4A0D0D;
          color: white;
        }
      `}</style>
    </div>
  );
}
