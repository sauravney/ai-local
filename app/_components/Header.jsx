import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#e0c6ff] to-[#ffffff] py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
          <Image src={"/logo.svg"} width={140} height={80} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
