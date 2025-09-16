import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white mt-80 ">
      {/* ==== TOP BANNER SECTION ==== */}
      <div className="relative bg-blue-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-12">
          {/* Left side: Logo + QR + App buttons */}
          <div className="flex flex-col items-center md:items-start gap-6 z-10">
            {/* Logo */}
            <Image
              src="/footer/KredPay.png"
              alt="KredPay Logo"
              width={150}
              height={50}
            />

            {/* QR + App buttons */}
            <div className="flex items-center gap-6">
              <Image
                src="/footer/Qr.png"
                alt="QR Code"
                width={120}
                height={120}
              />

              <div className="flex flex-col gap-3">
                <Image
                  src="/footer/AppStore.png"
                  alt="App Store"
                  width={120}
                  height={40}
                />
                <Image
                  src="/footer/googlePlay.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Right side: Tilted phone image */}
          <div className="absolute bottom-0 right-10">
            <Image
              src="/footer/tiltImage.png"
              alt="Tilt Image"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* ==== MAIN FOOTER SECTION ==== */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* KredPay + Address */}
        <div>
          <h2 className="text-xl font-bold text-green-600">KredPay</h2>
          <p className="mt-4 text-gray-600 text-sm">
            123 Finance Street, Suite 456. Cityville, Bankland
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Our commitment to excellence and innovation has made us a leader in
            the banking industry.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Products</h3>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            {[
              "Accept Payments",
              "Pay Bills",
              "Send Payments",
              "Transfers",
              "Merchant",
              "Partner",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            {["About", "Services", "Features", "Help Center"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            {["Instagram", "Twitter", "LinkedIn", "Facebook"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex space-x-3">
            <a href="#">
              <Image
                src="/footer/appButton1.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </a>
            <a href="#">
              <Image
                src="/footer/appButton1.png"
                alt="Google Play"
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>Copyright © KredPay. 2025</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {["Cookies", "Privacy", "Terms of Service"].map((item, i) => (
              <a key={i} href="#" className="hover:text-green-600">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
