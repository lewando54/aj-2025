import Image from "next/image";
import { MsMadi } from "../Fonts";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-10 bg-[#002200] w-full">
      <p className={`text-3xl ${MsMadi.className}`}>Agata i Jakub 2025</p>
      <div className="flex ml-auto gap-4 text-xl">
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#" className="text-white hover:text-gray-300 ml-5">Potwierdź przybycie</a>
        <a href="#" className="text-white hover:text-gray-300 ml-5">Dane kontaktowe</a>
      </div>
    </nav>
  );
}