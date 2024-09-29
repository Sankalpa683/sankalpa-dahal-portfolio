import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">

          {/* Left Section: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Fade-in animation */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-4 animate-fade-in">
              Hello👋 I'm Sankalpa Dahal And I'm a 
            </p>

            {/* Slide-in animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-in">
              Jr Web Developer <span className="text-blue-500">based in Nepal</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-xl mb-8 animate-fade-in">
              I love designing websites and user interfaces, doing freelance work, and focusing on creating digital products that are user-friendly and visually appealing.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                href="#about"
                className="bg-transparent flex border gap-2 border-gray-400 text-gray-700 items-center py-2 px-6 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-100 transition-all animate-bounce"
              >
                About me
              </Link>
              <Link
                href="#contact"
                className="bg-blue-500 flex items-center gap-2 text-white py-2 px-6 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-600 transition-all animate-pulse"
              >
                Contact Me
                <ArrowUpRight className="hidden sm:block" />
              </Link>
            </div>
          </div>

          {/* Right Section: Single Image */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 hidden lg:flex justify-center lg:justify-end">
            <Image
              src="/portfolioimage/5one.jpg" // Replace with your actual image URL
              alt="Professional portrait"
              width={550}
              height={550}
              className="rounded-lg object-cover shadow-lg animate-zoom-in"
            />
            

        </div>
        </div>
      </div>
    </section>
  );
}
