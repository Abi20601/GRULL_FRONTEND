import { ThemeContext } from "../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="setting">
      <h1>{t("About")}</h1>
      <div>
        <p>{t("Welcome to PRODUCT SHOP, your go-to destination for a wide range of quality products.")}</p>
        <p>{t("At PRODUCT SHOP, we strive to provide a seamless and enjoyable online shopping experience for our valued customers.")}</p>
        <p>{t("Whether you're in search of cutting-edge electronics, trendy clothing, or stylish accessories, we've got you covered.")}</p>
      </div>
    </div>
  );
};

export default About;
