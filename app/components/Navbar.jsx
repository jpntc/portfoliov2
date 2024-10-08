"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { value: "About", link: "#about" },
  { value: "Education", link: "#education" },
  { value: "Projects", link: "#projects" },
  { value: "Experience", link: "#work" },
  { value: "Misc", link: "#misc" },
];

const socials = [
  {
    alt: "Github",
    link: "/images/socials/github-1.png",
    href: "https://github.com/jpntc",
  },
  {
    alt: "linkedin",
    link: "/images/socials/linkedin.png",
    href: "https://www.linkedin.com/in/jude-pierre ",
  },
  {
    alt: "Youtube",
    link: "/images/socials/youtube.png",
    href: "https://www.youtube.com/channel/UCEEc1WDQhT0AMrJtjvr96ZA",
  },
];

const Navbar = () => {
  return (
    <section className="lg:min-h-screen lg:w-full mb-16 lg:mb-0 lg:ml-20">
      <div className="lg:fixed lg:w-1/4 lg:min-h-screen ">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col mb-4">
            <p className="text-xl md:text-2xl lg:text-4xl font-extrabold ">
              Jude Pierre
            </p>
            <p className="text-base md:text-xl font-extrabold mt-4">
              Computer Science Student
            </p>
            <p className="text-base md:text-xl font-extrabold">
              Aspiring Engineer
            </p>
          </div>
          <div className="flex flex-row w-full text-pretty justify-center items-center mb-4">
            <p className="">
              Interested in software engineering, system designing and the
              latest tech trends.
              {/* latest tech trends. My goal is to become a software engineer by
              2024 */}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex mt-4 mb-28">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <Link className="text-lg font-bold" key={index} href={item.link}>
                {item.value}
              </Link>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="flex justify-start">
            {socials.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <Image
                  src={`${item.link}`}
                  alt={`${item.alt}`}
                  width={40}
                  height={40}
                  className="mr-2"
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar