import { Link } from "react-router-dom"; // If using React Router
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const numberOfItems = useSelector((state) => state.cartReducer.totalQuantity);
  const { t } = useTranslation();
  const body = document.body;

  const toggleNav = () => {
    document.getElementById("pages-mob").classList.toggle("disappear");
    body.classList.toggle("no-scroll");
    document.querySelector(".fa-bars").classList.toggle("disappear");
  };
  return (
    <nav className="nav-bar">
      <ul className="pages">
      <li>
          <Link to="/HomeP">{t("Home Page")}</Link>
        </li>
        <li>
          <Link to="/">{t("Products")}</Link>
        </li>
        <li>
          <Link to="/About">{t("About")}</Link>
        </li>
 
      </ul>
      <div className="bars">
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            toggleNav();
          }}
        ></i>
      </div>
      <ul
        onClick={() => {
          toggleNav();
        }}
        id="pages-mob"
        className="pages-mob disappear"
      >
        <li className="mob-close">
          <i id="mob-close" className="fa-solid fa-x "></i>
        </li>
        <li>
          <Link to="/HomeP">{t("Home Page")}</Link>
        </li>
        <li>
          <Link to="/">{t("Products")}</Link>
        </li>
        <li>
          <Link to="/cart">{t("Cart")}</Link>
        </li>
        <li>
          <Link to="/About">{t("About")}</Link>
        </li>

      </ul>
      <ul className="buttons">
        <Link to="/cart">
          <li className="shopping">
            <i className="fa-solid fa-cart-shopping"></i>
            {<span className="cart-items">{numberOfItems}</span>}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
