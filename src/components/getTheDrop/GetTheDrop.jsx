import s from "./GetTheDrop.module.css";
import trademark from '/icon/trademark.svg?url'
import ellipse from '/icon/ellipse.svg?url'

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
