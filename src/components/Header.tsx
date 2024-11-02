import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-center w-full items-center py-4 bg-[#043873] text-white">
      <div className="flex flex-row items-center justify-between w-[1280px] flex-wrap">
        <Image src="/images/logo.png" alt="logo" width={191} height={34} />
        <nav className="flex flex-row gap-[24px] flex-wrap">
          <ul className="flex flex-row items-center p-0 gap-9 h-[60px] flex-wrap">
            <li>Products<IoChevronDown className="ml-2 inline" /></li>
            <li>Solution<IoChevronDown className="ml-2 inline" /></li>
            <li>Resources<IoChevronDown className="ml-2 inline" /></li>
            <li>Pricing<IoChevronDown className="ml-2 inline" /></li>
          </ul>
          <button className="flex items-center justify-center px-10 py-4 bg-[#FFE492] rounded-lg text-nowrap ml-9 text-[#043873]">
            Login
          </button>
          <button className="bg-[#4F9CF9] px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">Try Whitepace free<FaArrowRight className="ml-2"/></button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
