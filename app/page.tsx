
import Image from "next/image";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
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
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#f5fff6] mb-20  ">
        {/* Green Arc Background */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-green-500 rounded-t-[100%]" />

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center px-6 pt-32 pb-48 relative z-10">
          {/* Small Text */}
          <p className="text-sm text-gray-500 mb-2">
            A Product of Kashish India Pvt.Ltd
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smart, trusted digital <br />
            solution built for the{" "}
            <span className="text-green-600">New Age India.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Drive conversion with an all-in-one payments platform fueled by
            430M+ million active accounts.
          </p>
        </div>

        {/* Image Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <Image
            src="/image 6.png" // ✅ Dashboard image
            alt="Dashboard"
            width={800}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Gift Voucher Section */}

      <section className="bg-white py-24 px-6  relative ">
        <div className="max-w-6xl  mx-auto mt-20">
          {/* LEFT CONTENT */}
          <div className="relative flex flex-col ">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Gift Voucher
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-md">
              KredPay helps settling up feel more like catching up. Send and
              receive money to split everyday necessities, bills, and shared
              activities like takeout or travel.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-md">
              Need a gift? Keep it simple and make any payment feel extra
              special with KredPay.
            </p>

            <button className="mt-8 w-fit px-6 py-3 border border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300">
              Learn more
            </button>
          </div>

          <div className="flex justify-center items-center gap-x-60">
            {/* LEFT Receipt image */}
            <div className="mt-28">
              <Image
                src="/Payscreen.png"
                alt="Payment Receipt"
                width={300}
                height={150}
                className="rounded-xl shadow-xl"
              />
            </div>

            {/* RIGHT BIG IMAGE (Doubled using scale) */}
            <div className="-mt-60 scale-150 origin-center">
              <Image
                src="/student.png"
                alt="Main Voucher"
                width={300}
                height={200}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-20 max-w-6xl mx-auto mt-20 px-4">
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

        {/* Text Section */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Do it all at one place.</h2>
          <p className="text-gray-600 mb-4">
            KredPay can be used for paying utility bills from in-stores and
            online. Or paying EMIs bills at the last moments night dinner can
            cover this morning latte.
          </p>
          <p className="text-gray-600 mb-4">
            Digital gift cards are also available to send for last-minute gifts,
            special occasions, or just saying thanks.
          </p>
          <button className="px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-green-50 transition">
            Learn more
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20 max-w-6xl  mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Do More with KredPay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6  rounded-lg hover:shadow-md transition"
            >
              <div className="text-green-500 mb-4 text-xl">
                <FaRupeeSign />
              </div>
              <h3 className="font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600 text-sm">
                This feature of KredPay help in uplifting the user experience
                and this is its description
              </p>
            </div>
          ))}
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
        <div className="relative -top-10 w-full md:w-1/2 flex justify-center">
          <Image
            src="/handphone1.png"
            alt="Phone 1"
            width={320}
            height={240}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Image (lower) */}
        <div className="relative top-10 w-full md:w-1/2 flex justify-center">
          <Image
            src="/handPhone2.png"
            alt="Phone 2"
            width={320}
            height={240}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-around gap-16 max-w-6xl mx-auto mt-20 mb-32">
        {/* LEFT SIDE */}
        <div className="relative flex items-end">
          {/* Green background */}
          <div className="absolute left-20 bottom-0 w-[320px] h-[420px] bg-green-500 rounded-3xl -z-10"></div>

          {/* Left phone */}
          <div className="relative bottom-10 mr-6">
            <Image
              src="/Bil Payment Payment 1.png"
              alt="Phone screen 1"
              width={200}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right phone */}
          <div className="relative top-10 ">
            <Image
              src="/Bil Payment Payment 2.png"
              alt="Phone screen 2"
              width={200}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Pay Electricity Bills</h2>
          <p className="text-gray-600 mb-6">
            Pay your electricity bills instantly with KredPay’s seamless and
            secure payment service. Enjoy hassle-free transactions for all major
            electricity providers through the KredPay app.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
            Learn more
          </button>
        </div>
      </div>

      
    </>
  );
};

export default HeroSection;
