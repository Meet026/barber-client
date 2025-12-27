import { FiHeadphones } from "react-icons/fi";

export default function ChatButton() {
  return (
    <button
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 
      bg-black text-white 
      px-3 sm:px-4 py-2 sm:py-3 
      rounded-full shadow-xl 
      font-semibold text-xs sm:text-sm 
      hover:scale-105 transition 
      z-50 flex items-center gap-2"
    >
      <FiHeadphones className="text-[#E6B31E] text-lg sm:text-xl" />
      Talk With Us
    </button>
  );
}
