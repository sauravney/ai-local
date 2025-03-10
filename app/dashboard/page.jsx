import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";

const Dashboard = () => {
  return (
    <div>
      <AddCourse />
      {/* Display List of Courses. */}
      <UserCourseList />
    </div>
  );
};

export default Dashboard;
