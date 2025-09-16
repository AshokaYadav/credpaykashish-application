import FeaturesGrid from "@/component/FeaturesGrid";
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
      <section className="relative bg-[#f5fff6]   ">
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

        {/* Image Section
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <Image
            src="/image 6.png" // ✅ Dashboard image
            alt="Dashboard"
            width={800}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </div> */}
      </section>
            <FeaturesGrid/>
     
    </>
  );
};

export default HeroSection;
