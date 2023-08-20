import s from "./GetTheDrop.module.css";
import trademark from '../../../public/icon/trademark.svg'
import ellipse from '../../../public/icon/ellipse.svg'

function GetTheDrop() {
  return (
    <div className={s.getTheDrop}>
      <span>Get The Drop</span>
      <div>
        <img
          alt=""
          loading="lazy"
          width="12"
          height="12"
          decoding="async"
          data-nimg="1"
          src={trademark}
          style={{ color: "transparent", rotate: "90deg" }}
        />
        <img
          alt=""
          loading="lazy"
          width="12"
          height="12"
          decoding="async"
          data-nimg="1"
          src={ellipse}
        />
      </div>
    </div>
  );
}

export default GetTheDrop;
