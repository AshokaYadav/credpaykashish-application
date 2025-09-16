import { FaBolt, FaTv, FaGlobe, FaMobileAlt, FaFileInvoice, FaShieldAlt, FaTicketAlt, FaStore } from "react-icons/fa";

const features = [
  { icon: <FaBolt className="text-green-500 text-2xl" />, title: "Electricity Bill" },
  { icon: <FaTv className="text-green-500 text-2xl" />, title: "DTH" },
  { icon: <FaGlobe className="text-green-500 text-2xl" />, title: "Internet" },
  { icon: <FaMobileAlt className="text-green-500 text-2xl" />, title: "Mobile" },
  { icon: <FaFileInvoice className="text-green-500 text-2xl" />, title: "Bills" },
  { icon: <FaShieldAlt className="text-green-500 text-2xl" />, title: "Insurance" },
  { icon: <FaTicketAlt className="text-green-500 text-2xl" />, title: "Voucher" },
  { icon: <FaStore className="text-green-500 text-2xl" />, title: "Merchant" },
];

export default function FeaturesGrid() {
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
