/* eslint-disable react/prop-types */
import { getPbImageURL } from "@/utils/getPbImageURL";
import s from "./ProductItem.module.css";
import { gsap } from "gsap";
import { DelayLink } from '@/utils/DelayLink'
import { globalState } from "../../utils/globalState";


function ProductItem({ item }) {

  function start(){
    gsap.to('.loadingScreen',{duration:0.5,y:0,ease:'power2.inOut'});
  }

  function end(){
    gsap.to('.loadingScreen',{delay:0.5,duration:0.5,y:'-100%',ease:'power2.inOut',onComplete:()=>{
      gsap.set('.loadingScreen',{y:'100%'});
    }});
  }

  const handleClick = (e) => globalState.name = e.currentTarget.dataset.name

  return (
    <li className={s.item} data-name={item.name} onClick={handleClick}>
      <DelayLink delay={500} onDelayStart={start} onDelayEnd={end} to="/about">
        <img src={getPbImageURL(item, "photo")} alt="" />
        <div className="textContainer">
          <div className={s.name}>
            <div>{item.name}</div>
            <div> - {item.capacity}</div>
          </div>
          <div className={s.price}>${item.price}</div>
        </div>
      </DelayLink>
    </li>
    
  );
}

export default ProductItem;
