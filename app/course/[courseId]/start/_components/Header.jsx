import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center pt-5 pb-5 pr-10 shadow-sm">
      <Link href={"/dashboard"}>
        <Image src={"/logo.svg"} width={100} height={100} className="ml-10" alt="o" />
      </Link>
      <UserButton />
    </div>
  );
}

export default Header;
