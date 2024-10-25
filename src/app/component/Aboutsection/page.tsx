"use client"; // This ensures the component is client-side only
import React from "react";
import { TbArrowRight } from "react-icons/tb";
import Image from "next/image";
import Lineimg from "../../../../public/1 line white 1.png";
import Lineimg2 from "../../../../public/1 line white 1 (1).png";
import Lineimg3 from "../../../../public/White line logo.png";
import Iphone from "../../../../public/iPhone 14 Pro – Silver With Shadow 2.png";
import Recentagle from "../../../../public/Rectangle 199.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import Faq from "../Mobile-faq/page";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    // Dynamically import AOS to prevent SSR issues
    const AOS = require("aos");
    AOS.init({
      duration: 1000, // Customize options here
    });
  }, []);

  return (
    <>
      <div className="text-[#ffffff] sm:block hidden py-[50px] ">
        <div className="max-w-[1204px] mx-auto h-[694px] relative ">
          <div
            className="max-w-[694px] h-[694px] bg-[#3E3E3E] z-10"
            data-aos="fade-right"
          ></div>
          <div
            className="z-20 absolute top-[20%] right-[72px] max-w-[513px] "
            data-aos="fade-left"
          >
            <h2 className="text-[36px] text-[#ffffff] font-handel">About </h2>
            <h1 className="font-bold text-[52px] font-handel">
              VENTURE <span className="text-[#1654C1]">NXT</span>{" "}
            </h1>
            <div className="text-[18px] font-medium text-[#ffffff]">
              <p className="font-poppins ">
                Lorem Ipsum is simply dummy text of the printing and setting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500
              </p>

              <p className="pt-[30px] font-poppins">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* first section mobile responsive */}
      <div className="text-[#ffffff]  sm:hidden block">
        <div className="max-w-[1204px] mx-auto  sm:px-[0px] px-[20px]">
        <div
            className="max-w-[765px]"
            data-aos="fade-right"
          >
            <h1 className="text-[18px] leading-[30px] font-medium text-center tracking-[2px] uppercase font-handel text-[#ffffff]">ABOUT</h1>
            <h1 className="text-center font-bold leading-[48px] mx-auto text-[44px] font-handel">
              Venture <span className="text-[#1654C1]">NXT</span>{" "}
             
            </h1>
            <div className="text-[16px] font-medium text-[#ffffff] pt-[15px]">
              <p className="text-center leading-[25px] font-poppins">
              Lorem Ipsum is simply dummy text of the printing and setting industry. Lorem Ipsum has been the industry's
              </p>

              <p className="pt-[30px] text-center leading-[25px] font-poppins">
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="text-[#ffffff] mt-[34px] ">
              <button className="text-[22px] px-[35px] font-handel mx-auto bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center ">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
          <div
            className="max-w-[378px] mx-auto mt-[50px]  h-[378px] bg-[#3E3E3E] "
            data-aos="fade-left"
          >
            
          </div>
          
        </div>
      </div>

      <div className="text-[#ffffff] sm:block hidden py-[50px]">
        <div className="max-w-[1204px] mx-auto h-[694px] relative  flex flex-row-reverse">
          <div
            className="max-w-[694px] h-[694px] bg-[#3E3E3E] z-10"
            data-aos="fade-left"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            asperiores ducimus at eos harum praesentium alias quis earum cumque
            recusandae iste officiis nihil veritatis beatae quibusdam dolores
            blanditiis deleniti ab. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni fuga, voluptatem vero numquam est mollitia
            perspiciatis rerum, totam nemo cumque quae incidunt velit, harum
            animi doloremque at asperiores qui aliquid.
          </div>
          <div
            className="z-20 absolute top-[20%] left-[0px] max-w-[765px]"
            data-aos="fade-right"
          >
            <h2 className="text-[36px] text-[#ffffff] font-handel">Growth Consulting</h2>
            <h1 className="font-bold text-[52px] font-handel">
              Why A Brand Need <span className="text-[#1654C1]">Branding</span>{" "}
              And <span className="text-[#1654C1]">Growth Consulting</span>{" "}
            </h1>
            
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second section mobile responsive */}
      <div className="text-[#ffffff]  py-[50px] sm:hidden block">
        <div className="max-w-[1204px] mx-auto sm:px-[0px] px-[20px]">
        <div
            className="max-w-[765px]"
            data-aos="fade-right"
          >
            <h1 className="text-[18px] font-medium text-center tracking-[2px] uppercase text-[#ffffff] font-handel">Growth Consulting</h1>
            <h1 className="text-center font-bold leading-[48px] mx-auto text-[44px] font-handel">
              Why A Brand Need <span className="text-[#1654C1]">Branding</span>{" "}
              And <span className="text-[#1654C1]">Growth Consulting</span>{" "}
            </h1>
            <div className="text-[#ffffff] mt-[34px] ">
              <button className="text-[22px] px-[35px] mx-auto font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center ">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
          <div
            className="max-w-[378px] mx-auto mt-[50px]  h-[378px] bg-[#3E3E3E] "
            data-aos="fade-left"
          >
            
          </div>
          
        </div>
      </div>

      
<div className="sm:px-[0px] px-[20px]">
      <div className="text-[#ffffff] sm:block hidden  ">
        <div className="max-w-[1204px] h-[800px] mx-auto  flex items-center justify-center">
          <div className=" text-center ">
            <h1 className="font-bold text-[52px] font-handel uppercase " data-aos="fade-down">
              Services offered by
            </h1>
            <Image
              src={Lineimg}
              alt="Logo"
              className=" mx-auto pt-[30px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      {/* third section mobile responsive */}
      <div className="text-[#ffffff]   sm:hidden block">
        <div className="max-w-[1204px] h-[800px] mx-auto  flex items-center justify-center">
          <div className=" text-center ">
            <h1 className="leading-[46px] text-[44px] font-handel uppercase" data-aos="fade-down">
              Services <br /> Offered By
            </h1>
            <Image
              src={Lineimg2}
              alt="Logo"
              className=" mx-auto pt-[30px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
</div>

      {/* <div className="text-[#ffffff] max-w-[1440px] mx-auto mb-[50px]">
        <div className="max-w-[1204px] mx-auto grid grid-cols-2">
          <div className="col-span-1">
            <Image src={Iphone} alt="Logo" className=" mx-auto pt-[30px]" />
          </div>
          <div className="col-span-1 my-auto">
            <h2 className="text-[22px] text-[#ffffff]">
              Lorem Ipsum is simply dummy
            </h2>
            <h1 className="font-bold text-[52px] leading-[60px] mt-[22px]">
              WEBSITE DEVELOPMENT
            </h1>
            <div className="text-[18px] font-medium text-[#ffffff] mt-[20px]">
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and setting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500
              </p>
            </div>
            <div className="text-[#ffffff] mt-[40px]">
              <button className="text-[20px] px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                Read more <TbArrowRight className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="text-[#ffffff] max-w-[1440px] sm:px-[0px] px-[20px] mx-auto mt-[50px]">
        <div className="max-w-[1204px] mx-auto  py-[30px]">
          <h2 className="sm:text-[36px] text-[30px] text-[#ffffff] font-handel">Glimes Of Services</h2>
        </div>
        <div className="max-w-[1204px] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-3">
          <div className="col-span-1 ">
            <div className="">
              <Image
                src={""}
                alt="Logo"
                className=" h-[400px] bg-[#ae7d7d] rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                  Computer Generated images
                </h2>
                <p className="sm:text-[18px] text-[14px] font-poppins sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 ">
            <div className="">
              <Image
                src={""}
                alt="Logo"
                className=" h-[400px] bg-[#ae7d7d] rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                Artificial intelligence
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] font-handel px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 ">
            <div className="">
              <Image
                src={""}
                alt="Logo"
                className=" h-[400px] bg-[#ae7d7d] rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="sm:text-[36px] font-handel text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                UI/UX
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] font-handel px-[35px] bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 ">
            <div className="">
              <Image
                src={""}
                alt="Logo"
                className=" h-[400px] bg-[#ae7d7d] rounded-tr-[14px] rounded-tl-[14px]"
              />
              <div className="bg-[#ffffff] p-[14px] rounded-br-[14px] rounded-bl-[14px]">
                <h2 className="font-handel sm:text-[36px] text-[26px] sm:leading-[40px] leading-[32px] text-[#000000]">
                VR/AR
                </h2>
                <p className="sm:text-[18px] font-poppins text-[14px] sm:leading-[25px] leading-[20px] font-medium text-[#000000] mt-[12px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </p>
                <div className="text-[#ffffff] mt-[30px]">
                  <button className="text-[20px] px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
                    Explore <TbArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-[1204px] mx-auto py-[30px]">
          <div className="text-[#ffffff] ">
            <button className="text-[20px] mx-auto px-[35px] font-handel bg-[#002BAA] rounded-full py-[10px] flex items-center justify-center">
              Browse all work <TbArrowRight className="ml-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-[#ffffff] max-w-[1440px] my-[50px] mx-auto  ">
        <div className="sm:max-w-[817px] max-w-[378px]  mx-auto  flex items-center justify-center ">
          <div className=" text-center sm:mx-[0px] mx-[20px]">
            <h1 className="sm:font-bold font-handel sm:text-[52px] text-[26px] sm:leading-[58px] leading-[32px]">
              It's Time Make Your Decision Business Growth
            </h1>
            <p className="sm:text-[18px] text-[14px] sm:leading-[30px] font-poppins leading-[20px] font-medium pt-[14px] sm:px-[0px] px-[40px]">
              Ditch the “Coming Soon” page and sign up below to start getting
              your customers fired up about your launch.
            </p>
            <div className="mt-[32px] gap-6 flex justify-center">
              <input
                type="text"
                className="rounded-[7px] px-[12px] sm:max-w-none max-w-[220px] h-[51px] text-[#000] "
              />
              <div className="text-[#ffffff]  ">
                <button className="text-[20px] px-[35px] rounded-[7px] font-handel bg-[#002BAA] py-[10px] ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* footer */}
      <div className="text-[#ffffff] sm:block hidden max-w-[1204px] my-[100px] mx-auto  ">
        <div className="">
          <p className="text-[14px] font-poppins text-[#ffffff] ">
            Lorem Ipsum is simply dummy text of{" "}
          </p>
          <ul className="text-[#ffffff] text-[26px] mt-[20px] font-handel">
            <li>
              <a href="" className="pr-[23.50px] ">
                Home
              </a>
              <a href="" className="px-[23.50px]">
                About us
              </a>
              <a href="" className="px-[23.50px]">
                Service
              </a>
              <a href="" className="px-[23.50px]">
                Chat
              </a>
              <a href="" className="px-[23.50px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <footer className=" py-4 text-white mt-[50px]">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-[16px] font-poppins">
              2024© Venturenxt. All rights reserved
            </div>

            <div className="flex space-x-12">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <FaInstagram className="w-9 h-9" />
                <span className="text-[16px] font-poppins">Instagram</span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <FaLinkedinIn className="w-9 h-9" />
                <span className="text-[16px] font-poppins ">LinkedIn</span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <RiTwitterXFill className="w-9 h-9" />
                <span className="text-[16px] font-poppins">Twitter</span>
              </a>
            </div>
          </div>
        </footer>
      </div>

       {/*  */}
      <div className="text-[#ffffff] sm:hidden block max-w-[430px] my-[100px] mx-auto sm:px-[0px] px-[20px] ">
        <div className="">
        <Image
              src={Lineimg3}
              alt="Logo"
              className="  pt-[30px]"
              
            />
          <p className="text-[16px] font-poppins font-medium pt-[10px] leading-[22px] text-[#ffffff] ">
            Lorem Ipsum is simply <br />
             dummy text of{" "}
          </p>

          
          <Faq/>


        </div>
        <footer className=" py-4 text-white mt-[50px]">
          <div className="">
          <div className="flex space-x-6 justify-center items-center mx-auto">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaInstagram className="w-9 h-9" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedinIn className="w-9 h-9" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <RiTwitterXFill className="w-9 h-9" />
              </a>
            </div>
            <div className="text-[16px] text-center font-poppins leading-[20px] pt-[15px]">
              2024© Venturenxt. All rights reserved
            </div>

            
          </div>
        </footer>
      </div>
    </>
  );
}