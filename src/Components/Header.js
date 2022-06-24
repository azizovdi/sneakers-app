import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/logo.png" alt="Logo" />

          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/cart.svg" alt="Cart" />
          <span>1205 руб</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favourites">
            <img height={18} width={18} src="/heart.png" alt="favourites " />
          </Link>
        </li>
        <li>
          <img height={18} width={18} src="/profile.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
