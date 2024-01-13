import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

const Projects = () => {
  // Configuring fade-in animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="bg-image" style={fadeIn}>
      {/* <Navbar /> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Explore My Creations
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Embark on a journey through innovation as we unveil our
                groundbreaking project section, where creativity meets purpose.
                Explore the realms of cutting-edge solutions and transformative
                ideas that define the essence of our commitment to excellence.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href="/organic">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="/organic.jpg"
                  />
                </div>
              </Link>

              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Organic.in
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Pioneered an AI-driven health website offering personalized meal
                plans with detailed macros, fostering informed dietary choices.
                Empowering users to achieve goals with ease, whether at home or
                on the go.
              </p>
              <a
                href="/organic"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </animated.div>

            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href={"/meditrack"}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="/meditrack.jpg"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                MediTrack Healthcare
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Innovated a secure medical data management app, ensuring users
                have instant access to their complete medical history,
                addressing the issue of lost or unavailable records in crucial
                situations.
              </p>
              <a
                href="/meditrack"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </animated.div>
            <animated.div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={fadeIn}>
              <Link href={"/keeper"}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-transform transform hover:scale-105"
                    src="google.jpg"
                  />
                </div>
              </Link>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Keeper-App
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Crafted a groundbreaking medical data app, providing secure
                storage and instant retrieval of comprehensive medical
                histories, mitigating challenges of lost records in critical
                moments.
              </p>
              <a
                href="/keeper"
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </animated.div>
          </div>
        </div>
      </section>
      <Footer />
    </animated.div>
  );
};

export default Projects;
