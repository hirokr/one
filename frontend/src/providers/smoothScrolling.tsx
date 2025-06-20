"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <>
      <main id='smooth-wrapper'>
        <div id='smooth-content'>{children}</div>
      </main>
    </>
  );
};

export default SmoothScrolling;
