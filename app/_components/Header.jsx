import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#F9FAFB] to-[#EAEFF6] shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
        <Image src={"/logo.svg"} width={140} height={80} alt="logo" />
      </Link>

      {/* Get Started Button */}
      <Link href={"/dashboard"}>
        <Button className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-all">
          Get Started
        </Button>
      </Link>
    </header>
  );
};

export default Header;
