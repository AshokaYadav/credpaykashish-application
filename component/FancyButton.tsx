export default function FancyButton() {
  return (
    <button className="relative px-6 py-2 rounded-full border border-black bg-white text-black font-medium
                       hover:translate-y-[2px] transition">
      {/* Green shape behind */}
      <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-full bg-green-500 -z-10"></span>

      Learn more
    </button>
  )
}
