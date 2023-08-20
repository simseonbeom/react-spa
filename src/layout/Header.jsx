import s from "./Header.module.css";
import logo from '/logo.svg?url'

function Header() {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />

      <nav>
        <ul>
          <li>Drop Collection</li>
          <li>Our Story</li>
        </ul>
      </nav>

      <div>
        <a href="/">Cart</a>
      </div>
    </header>
  );
}

export default Header;
