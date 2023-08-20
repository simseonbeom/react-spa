import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";

function useSmoother() {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

  useEffect(() => {
    scroller.current = document.querySelector("#scroll-container");
    bodyScrollBar.current = Scrollbar.init(scroller.current, {
      damping: 0.1,
      continuousScrolling: true,
      alwaysShowTracks: false,
      renderByPixels: !("ontouchstart" in document),
      delegateTo: scroller.current,
    });
    setScrollBarCreated(true);

    return ()=>{
    }
  }, []);

  // useEffect(() => {
  //   if (scrollBarCreated) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     ScrollTrigger.scrollerProxy(scroller.current, {
  //       scrollTop(value) {
  //         if (arguments.length) {
  //           bodyScrollBar.current.scrollTop = value;
  //         }
  //         return bodyScrollBar.current.scrollTop;
  //       },
  //     });
  //     bodyScrollBar.current.addListener(ScrollTrigger.update);
  //     ScrollTrigger.defaults({ scroller: scroller.current });
  //   }
  // }, [scrollBarCreated]);

  return bodyScrollBar.current
}

export default useSmoother;
