import Image from "next/image";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaBolt,
  FaTv,
  FaGlobe,
  FaMobileAlt,
  FaFileInvoice,
  FaShieldAlt,
  FaTicketAlt,
  FaStore,
  FaPlus,
} from "react-icons/fa";

const HeroSection: FC = () => {
 

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#f5fff6] overflow-hidden pt-10">
        {/* Green Arc Background */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-green-500 rounded-t-[100%]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <p className="text-sm text-gray-500 mb-2">About KredPay</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Discover KredPay, <br />
              <span className="block">
                Designed to empower{" "}
                <span className="text-green-600">Modern India.</span>
              </span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg">
              Unlock seamless transactions and growth with our all-in-one
              solution, trusted by over 500 million active users.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/aboutmobile.png"
              alt="Mobile App"
              width={239}
              height={485}
              className="rounded-4xl shadow-2xl relative z-20"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-20 max-w-6xl mx-auto mt-20 px-4">
        {/* Text Section */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Pay Friends</h2>
          <p className="text-gray-600 mb-4">
            KredPay Recharge simplifies and speeds up the process of recharging
            your Mobile and DTH accounts. Skip the trip to retail
            outlets—KredPay’s online recharge service makes topping up your
            account effortless. Recharge Mobile and DTH services for providers
            like Airtel, Jio, Vi, BSNL, Dish TV, Big TV, Sun Direct, Videocon
            D2H, and Tata Sky with ease. KredPay’s Bill Payment service enhances
            convenience by allowing you to instantly settle a wide range of
            bills, including Electricity, Postpaid, Landline/Broadband, Gas, Gas
            Cylinder, Water, Insurance Premiums, and Google Play Gift Codes,
            covering all major operators and service providers.
          </p>

          <div className="flex gap-4 mt-6">
      <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 384 512"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.3-26.3-46.1-40.7-84.1-43.9-35.3-3.1-74.3 20.7-88.2 20.7-14.3 0-47.4-19.8-73.3-19.3-56.3.8-115.9 41.3-115.9 123.5 0 28.1 5.2 57.3 15.7 85.3 14 36.7 64.3 126.7 116.6 125 27.4-.7 46.8-19.3 73.8-19.3 26.4 0 44.2 19.3 73.3 19.3 52.6-.8 100.2-83.6 114.1-120.4-72.3-34.1-68.4-99.4-68.3-106.1z" />
        </svg>
        <span className="font-medium">App Store</span>
      </button>

      <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M325.3 234.3L104.4 32.1c-4.3-4-9.8-6.1-15.4-6.1C79.8 26 72 34.1 72 44.1V467.9c0 10 7.8 18.1 17 18.1 5.6 0 11.1-2.1 15.4-6.1l220.9-202.2-34.2-43.4 34.2-43.4zM344.2 256l83.6 106-104.4-95.5L344.2 256zm-20.8-37.5L427.8 123 344.2 229.5l-20.8-11zm0 75l20.8-11L427.8 389 323.4 293.5z" />
        </svg>
        <span className="font-medium">Google Play</span>
      </button>
    </div>

          
        </div>
        {/* Icons Grid */}
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 md:gap-8">
          {/* First Row */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaBolt />
            </div>
            <span className="text-sm">Electricity</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaTv />
            </div>
            <span className="text-sm">DTH</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaGlobe />
            </div>
            <span className="text-sm">Internet</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaMobileAlt />
            </div>
            <span className="text-sm">Mobile</span>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaFileInvoice />
            </div>
            <span className="text-sm">Bill</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaShieldAlt />
            </div>
            <span className="text-sm">Insurance</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaTicketAlt />
            </div>
            <span className="text-sm">Voucher</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaStore />
            </div>
            <span className="text-sm">Merchant</span>
          </div>

          {/* More Option */}
          <div className="flex flex-col items-center col-span-4 mt-4">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2 text-green-600 text-xl">
              <FaPlus />
            </div>
            <span className="text-sm">More</span>
          </div>
        </div>
      </div>

      {/* Grow Business Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto mt-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Grow a business.</h2>
            <p className="text-gray-600 mb-4">
              Take business payments and engage customers with the help of a
              seamless checkout process and low charges for merchants because we
              know how hard it is to scale.
            </p>
            <button className="px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-green-50 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Icon */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-green-500 text-8xl">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto  mt-30 gap-10 px-4">
        {/* Left Image (upper) */}
        <div className="relative top-10 w-full md:w-1/2 flex justify-center">
          <Image
            src="/handphone1.png"
            alt="Phone 1"
            width={320}
            height={240}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Image (lower) */}
        <div className="relative -top-10 w-full md:w-1/2 flex justify-center">
          <Image
            src="/handPhone2.png"
            alt="Phone 2"
            width={320}
            height={240}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
