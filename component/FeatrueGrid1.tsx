import {
  FaRupeeSign
} from "react-icons/fa";

const features = [
  // Razorpay
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.2 3L9 21h3.2l11.2-18h-3.2zM4 3L2 7h9.2L4 21h3.2L14 3H4z" />
      </svg>
    ),
    title: "Razorpay",
  },

  // BHIM UPI
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M10 48L26 16h12L22 48h-12zm26-32h12L38 48h-12L36 16z" />
      </svg>
    ),
    title: "BHIM UPI",
  },

  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 3" },
  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 4" },
  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 5" },
  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 6" },
  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 7" },
  { icon: <FaRupeeSign className="text-green-500 text-2xl" />, title: "Feature 8" },
];

export default function FeatrueGrid1() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Do it all</h2>
        <p className="text-3xl font-bold">At one place.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">
              This feature of KredPay help in uplifting the user experience and this is its description
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
