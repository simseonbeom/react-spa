/* eslint-disable no-undef */
import { gsap } from "gsap";
import { useEffect } from "react";

function useSplitText(target) {
  useEffect(() => {
    const split = new SplitText(target, {
      type: "chars",
      charsClass: "cover",
    });

    const splitCover = new SplitText(target,{type:'chars',charsClass:'chars'})


    const tl = gsap.timeline();

    tl.to("h1 .chars", {
      delay: 1,
      y: 0,
      rotation:0,
      stagger: {
        each: 0.04,
        ease: "power2.Out",
      },
    });
    tl.to("button", {
      delay: 2,
      opacity: 1,
      duration: 2,
      webkitFilter: "blur(0px)",
    });
  });
}

export default useSplitText;
