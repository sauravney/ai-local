import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
        <Image src={"/logo.svg"} width={150} height={100} alt="logo" />
      </Link>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
