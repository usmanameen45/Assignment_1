import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';
import { BsGlobe2 } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center w-full gap-[50px] bg-[#043873] text-white pt-[140px] pb-8 px-8">
      <div className="flex flex-row items-start justify-center w-[1280px] gap-[100px]">
        <div className='flex flex-col justify-start items-start gap-2'>
            <Image src="/images/Logo.png" alt="logo" width={191} height={34} />
            <p className='text-sm leading-[30px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday task</p>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='text-lg font-bold'>Products</h3>
            <ul className='space-y-[15px]'>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Overview</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Pricing</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Customer stories</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='text-lg font-bold'>Resources</h3>
            <ul className='space-y-[15px]'>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Blog</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Guides & tutorials</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Help center</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='text-lg font-bold'>Company</h3>
            <ul className='space-y-[15px]'>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>About us</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Careers</li>
                <li className='hover:text-[#FFE492] transition-all duration-200 '>Media Kit</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start items-start gap-[23px]'>
            <h2 className='text-[28px] font-bold'>Try It Today</h2>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap mt-8">
            Try Taskey free
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between w-[1280px] border-t border-t-[#2E4E73] pt-8'>
        <div className='flex flex-row items-center justify-center '>
            <ul className='flex flex-row items-center justify-start gap-[60px]'>
                <li className='flex flex-row items-center gap-[6px]'><BsGlobe2 />English<IoChevronDown /></li>
                <li>Terms & privacy</li>
                <li>Security</li>
                <li>Status</li>
                <li>©2021 Whitepace LLC</li>
            </ul>
        </div>
        <div className='flex flex-row gap-8'>
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        </div>
      </div>
    </footer>
  )
}

export default Footer