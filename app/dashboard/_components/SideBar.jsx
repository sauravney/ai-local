"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";
import { CiPower } from "react-icons/ci";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { Progress } from "@/components/ui/progress";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function SideBar() {
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  const menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <CiPower />,
      path: "/dashboard/logout",
      isLogout: true,
    },
  ];
  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
        <Image src={"/logo.svg"} width={160} height={100} alt="o" />
      </Link>
      <hr className="my-5" />
      <ul>
        {menu.map((item, index) => (
          <Link href={item.path}>
            <div
              className={`flex items-center gap-2 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.path == path && "bg-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList?.length / 3) * 100} />
        <h2 className="text-sm my-2">
          {userCourseList?.length} Out of 3 Courses Created
        </h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimited Courses.
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
