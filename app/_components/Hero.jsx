import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="">
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300">
              Explore more Courses by other User's
              <span className="flex items-center gap-x-1">
                <Link href="dashboard/explore">
                  <span className="border-s border-gray-200 text-blue-600 ps-2">
                    Explore
                  </span>
                </Link>
                <svg
                  className="shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>
          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              AI Course Generator
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600">
              Effortlessly generate customized courses with AI. Create
              structured lessons and resources tailored to any topic in minutes!
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-8 gap-3 flex justify-center">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all">
                Get Started
              </Button>
            </Link>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero -->    */}
    </section>
  );
};

export default Hero;
