"use client";

import TypeWriterComp from "@/src/components/shared/TypeWriterComp";
import { userDetailsSidebar } from "@/src/staticData/home/home";
import Image from "next/image";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import { IoCloudDownloadOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SidebarProfile = () => {
  const [change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
    
    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 sm:max-w-sidebar xl:max-2xl:max-w-xs z-999">
      <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl shadow-lg h-auto">
        <div className="mx-4 mt-8 text-center user-info lg:mx-6">
          {/* Profile Image with Animation */}
          <div className="relative mb-1 h-40 w-40 mx-auto border-4 border-theme overflow-hidden rounded-full max-md:hidden hover:scale-105 transition-transform duration-300 shadow-md">
            <Image
              className="hidden dark:block w-full h-full rounded-full object-cover"
              src={userDetailsSidebar?.userImage}
              alt={userDetailsSidebar?.userName}
              width={200}
              height={200}
            />
            <Image
              className="dark:hidden w-full h-full rounded-full object-cover"
              src={userDetailsSidebar?.userImageLight}
              alt={userDetailsSidebar?.userName}
              width={200}
              height={200}
            />
          </div>
          
          {/* Name and Designation */}
          <h6 className={`mb-1 mt-3 text-2xl md:text-xl font-bold text-black dark:text-white name transition-all duration-700 px-4 py-2 md:p-0 ${scrolled ? 'md:transform-none md:text-black md:dark:text-white md:font-bold transform scale-[1.8] text-theme font-extrabold' : ''}`}>
            {userDetailsSidebar?.userName}
          </h6>
          <div className="leading-none cd-headline clip is-full-width mb-4">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme font-medium">
              <TypeWriterComp skillsData={userDetailsSidebar?.designations} />
            </h6>
          </div>
          
          {/* Social Links Row */}
          <div className="flex justify-start space-x-3 mb-2">
            {userDetailsSidebar?.basicInfo?.map((item) => 
              item?.url ? (
                <a 
                  key={item.id}
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-theme hover:text-white dark:hover:bg-theme transition-all duration-300 shadow-sm"
                  title={item.field}
                >
                  {item?.field === "LinkedIn" && <FaLinkedinIn size={18} />}
                  {item?.field === "GitHub" && <FaGithub size={18} />}
                </a>
              ) : null
            )}
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="pt-5 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-5 border-platinum dark:border-metalBlack">
          {/* Residence Info */}
          <div className="flex flex-wrap justify-start mb-5">
            {userDetailsSidebar?.basicInfo
              ?.filter(item => !item?.url && item?.field === "Residence")
              .map((item) => (
                <div key={item?.id} className="flex items-center text-sm group w-full mb-3 pr-2 justify-start">
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-theme mr-3 group-hover:bg-theme group-hover:text-white transition-all duration-300 shadow-sm">
                    <IoLocationOutline size={16} />
                  </div>
                  <div className="overflow-hidden text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item?.field}</p>
                    <p className="font-medium text-black dark:text-white truncate">{item?.value}</p>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Other Contact Info */}
          <ul className="space-y-4">
            {userDetailsSidebar?.basicInfo?.map((item) => 
              !item?.url && !(item?.field === "Email" || item?.field === "Residence") ? (
                <li key={item?.id} className="flex items-center text-sm group">
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-theme mr-3 group-hover:bg-theme group-hover:text-white transition-all duration-300 shadow-sm">
                    {/* Add more icon conditions if needed */}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item?.field}</p>
                    <p className="font-medium text-black dark:text-white">{item?.value}</p>
                  </div>
                </li>
              ) : null
            )}
            
            {/* Email Info (Moved Down) */}
            {userDetailsSidebar?.basicInfo
              ?.filter(item => !item?.url && item?.field === "Email")
              .map((item) => (
                <li key={item?.id} className="flex items-center text-sm group justify-start">
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-theme mr-3 group-hover:bg-theme group-hover:text-white transition-all duration-300 shadow-sm">
                    <IoMailOutline size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item?.field}</p>
                    <p className="font-medium text-black dark:text-white">{item?.value}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Skills Section */}
        <div className="px-4 center py-5 lg:py-2 lg:px-2 rounded-2xl md:px-4 md:py-4 bg-flashWhite dark:bg-metalBlack">
          <div className="text-sm font-medium text-black dark:text-white mb-2 text-left">
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {userDetailsSidebar?.skillsInfo?.map((item) => (
              <span
                key={item?.id}
                className="inline-block px-4 m-auto py-1 text-center transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl hover:text-theme dark:hover:text-white hover:border-theme dark:hover:border-theme shadow-sm"
              >
                {item?.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Download CV Button */}
        <div className="mt-6 px-4">
          <Link
            href="EdenCV.pdf"
            download
            target="_blank"
            className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-4 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover shadow-md"
          >
            DOWNLOAD CV
            <span className="animate-bounce">
              <IoCloudDownloadOutline size={18} />
            </span>
          </Link>
        </div>

        <svg className="absolute w-0 h-0">
          <clipPath
            id="my-clip-path"
            clipPathUnits="objectBoundingBox"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path>
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default SidebarProfile;
