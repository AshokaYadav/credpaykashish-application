import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    question: "How do I get started with your payment platform?",
    answer:
      "Simply sign up for an account, follow our easy onboarding process, and start making transactions. You can explore our features and access support resources to help you get up and running quickly.",
  },
  {
    question: "How secure are my transactions?",
    answer:
      "We use advanced encryption and security protocols to ensure all your transactions are safe and secure.",
  },
  {
    question: "How do I integrate your platform with my existing systems?",
    answer:
      "We provide simple APIs and developer tools that make integration smooth and fast.",
  },
  {
    question: "Are there any fees for using the platform?",
    answer:
      "Our pricing is transparent. Please check our pricing page for detailed information about fees.",
  },
  {
    question: "Can I manage multiple currencies?",
    answer:
      "Yes, our platform supports multiple currencies to help you operate globally.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 customer support and dedicated account managers for enterprise clients.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-2xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Do More with <span className="text-green-600">KredPay</span>
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FiChevronDown className="text-xl" />
              ) : (
                <FiChevronRight className="text-xl" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
