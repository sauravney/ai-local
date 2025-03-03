import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="flex flex-row-reverse justify-between items-center pt-5 pr-10">
      <UserButton />
    </div>
  );
}

export default Header;
