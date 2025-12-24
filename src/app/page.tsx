"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Mail, Phone } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Input } from "@/components/ui/input";
import Snowfall from "react-snowfall";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";
import { AboutSection } from "@/components/ui/AboutSection";
import { Sheet } from "@/components/ui/sheet";
import { InfiniteSlider } from "../../components/motion-primitives/infinite-slider";

const page = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const { scrollY } = useScroll({});
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });
  const MAX_SCROLL = 2000;

  const progress = Math.min(scrollPosition / MAX_SCROLL, 1);
  const scale = 1 - progress * 1.0;
  const lastScale = 1 - progress * 0.2;

  return (
    <div className=" relative min-h-screen overflow-hidden bg-black">
      <Snowfall snowflakeCount={1000} />
      <header className="fixed h-22 flex items-center justify-between px-10  backdrop-blur-sm z-999 w-full text-white">
        <div className="text-2xl  absolute flex items-center gap-2 font-bold px-4">
          <Image
            className="rounded-full hover:scale-120 cursor-pointer transition-transform duration-300"
            src="/images/Icon.jpg"
            alt="Logo"
            width={70}
            height={70}
          />
          Diatoro
        </div>
        <div className="w-52"></div>
        <ul className="flex w-150 justify-between gap-15 text-lg font-medium rounded-2xl">
          <a href="#about">
            <Button className=" text-xl hover:cursor-pointer text-gray-300">
              About
            </Button>
          </a>

          <a href="#skills">
            <Button className="text-xl hover:cursor-pointer text-gray-300">
              Skills
            </Button>
          </a>
          <a href="#contact">
            <Button className=" text-xl hover:cursor-pointer text-gray-300">
              Contact
            </Button>
          </a>
        </ul>
        <ul className="flex gap-9 p-3">
          <a href="https://github.com/Ts-Adiya" target="_blank">
            <Github className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"></Github>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"></Instagram>
          </a>
          <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
        </ul>
      </header>
      <div className="fixed top-0 w-full justify-content-center mix-blend-lighten h-screen ">
        <video
          className="w-full -mt-[23.5%] pointer-events-none"
          src="/videos/blackhole.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>
      <div
        className="relative flex w-full h-screen items-center justify-center text-white mx-auto md:flex-row flex-col"
        style={{
          width: `calc(100vw - (100vw / 400) * ${scrollPosition})`,
        }}
      >
        <span
          className=" text-blue-400 text-2xl md:text-4xl xl:text-5xl  font-semibold w-full flex items-center justify-center "
          style={{ scale: scale }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Dia",
              1000,
              "Welcome to my Portfolio",
              1000,
              "Front-End Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
        {/* <h1 className="text-4xl ">My Portfolio</h1>
          <p className="mt-2 text-lg">Welcome — explore my projects</p> */}

        <div className="w-full mix-blend-lighten overflow-hidden z-0 ">
          <video
            className="object-cover pointer-events-none"
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>
      </div>

      <AboutSection scale={scale} />

      <section
        className=" flex items-center justify-center min-h-screen w-full mx-auto"
        id="skills"
      >
        <div className="flex items-center justify-center">
          <InfiniteSlider gap={200}>
            <Image
              className=" 
                "
              src="/images/css-3.svg"
              alt="Logo"
              width={200}
              height={200}
            />
            <Image
              src="/images/html-1.svg"
              alt="Logo"
              width={200}
              height={200}
            />
            <Image
              className="bg-white rounded-full size-50 "
              src="https://www.svgrepo.com/show/394174/github.svg"
              alt="Logo"
              width={200}
              height={200}
            />
            <Image
              className="bg-white rounded-full size-50
                "
              src="/images/next.svg"
              alt="Logo"
              width={200}
              height={200}
            />
            <Image
              className="
                "
              src="https://vite.dev/assets/react.Dn3lPOaa.svg"
              alt="Logo"
              width={200}
              height={200}
            />{" "}
            <Image
              className="
                "
              src="https://vite.dev/logo.svg"
              alt="Logo"
              width={200}
              height={200}
            />
          </InfiniteSlider>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center min-h-screen text-white font-semibold "
        id="contact"
      >
        <p className="text-blue-400 text-5xl font-semibold mb-10">Contact Me</p>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 px-20">
          <div className="flex flex-col h-150 w-100 gap-5 justify-center text-white">
            <div
              className=" mix-blend-lighten
            "
            >
              <Image
                className="rounded-full 
                "
                src="/images/brain.png"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="text-2xl pt-20">
              <p>
                <Phone className="text-white inline-block w-6 h-6 mr-2 mb-2" />
                +976 9940 9330
              </p>
              <p className="mt-4">
                <Mail className="text-white inline-block w-6 h-6 mr-2 mb-2 " />
                Adiyatsolmonbaatar@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col h-150 w-100  justify-center text-white  text-2xl gap-5">
            <p>Full name</p>
            <Input placeholder="Your full name"></Input>
            <p>Email Adress</p>
            <Input placeholder="Your Email:"></Input>
            <p>Message</p>
            <Input
              className="h-20"
              placeholder="Share your thoughts..."
            ></Input>
            <Button className="mt-4 border-2 hover:bg-gray-700 cursor-pointer text-white">
              Send Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
