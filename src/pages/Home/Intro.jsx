import s from "./Intro.module.css";
import useSplitText from "../../hooks/useSplitText";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  useSplitText("h1");


  return (
    <div className={s.intro} id="intro">
      <h1>
        Your market for a <br /> 
        world in water crisis.</h1>
      <button type="button">Act Now</button>
    </div>
  );
}

export default Intro;
