import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import CourseCard from "../dashboard/_components/CourseCard";
import CreatorCard from "./CreatorCard";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | AI Course Generator</title>
        <meta
          name="description"
          content="Learn about AI Course Generator, your ultimate tool for creating personalized AI courses."
        />
        <meta
          name="keywords"
          content="AI courses, course generator, artificial intelligence, personalized learning"
        />
      </Head>
      <div className="container mx-auto px-8 py-8 w-full">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p>Developed By us!</p>
        <div className="mt-20 flex flex-wrap justify-center gap-10 w-full">
          <CreatorCard
            image="/myimage.jpeg"
            name="Saurav Mishra"
            email="saurav24242424@gmail.com"
          />
          <CreatorCard
            image="/miran-ahmad.jpeg"
            name="Miran Ahmad"
            email="222miran222@gmail.com"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
