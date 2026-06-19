"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

let registered = false;

/** Register every plugin + named eases exactly once, client-side. */
export function registerGsap(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(
    ScrollTrigger,
    Draggable,
    InertiaPlugin,
    DrawSVGPlugin,
    Flip,
    SplitText,
    CustomEase,
    MotionPathPlugin,
  );
  // physics personality — 2 named eases reused site-wide
  CustomEase.create("lift", "M0,0 C0.16,1 0.3,1 1,1");
  CustomEase.create("snap", "M0,0 C0.34,1.56 0.64,1 1,1");
  registered = true;
}

export { gsap, ScrollTrigger, Draggable, Flip, SplitText, MotionPathPlugin };
