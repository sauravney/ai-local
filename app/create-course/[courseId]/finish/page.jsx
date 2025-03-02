"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FinishScreen({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const router = useRouter();
  useEffect(() => {
    console.log(params);
    params && GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <div className="flex flex-wrap justify-around">
        <h2 className="text-center font-bold text-2xl my-3">
          Congratulations! Your course is ready
        </h2>
        <Link href={"/dashboard"}>
          <Button className="mt-2 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-all">
            Dashboard
          </Button>
        </Link>
      </div>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
      <h2 className="mt-3">Course URL</h2>
      <h2 className="text-center text-gray-400 border p-2 rounded flex gap-5 items-center">
        {process.env.NEXT_PUBLIC_HOST_NAME}.course/view/{course?.courseId}{" "}
        <HiOutlineClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              process.env.NEXT_PUBLIC_HOST_NAME + "/course/" + course?.courseId
            )
          }
        />
        <p>(Copy it and start learning.)</p>
      </h2>
    </div>
  );
}

export default FinishScreen;
