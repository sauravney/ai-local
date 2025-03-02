import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-[#2563EB] via-[#6B46C1] to-[#9333EA] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            AI Course Generator
            <span className="sm:block">
              {" "}
              Custom Learning Paths, Powered by AI{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-600">
            Unlock personalized education with AI-driven course creation. Tailor
            your learning journey to fit unique goals and pace.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            <Link href={"/dashboard/explore"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all"
              >
                Explore Now
                <HiChevronDoubleRight className="text-xl ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
