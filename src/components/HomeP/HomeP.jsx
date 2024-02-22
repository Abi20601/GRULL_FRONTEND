import { ThemeContext } from "../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const HomeP = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="setting">
      <h1>{t("HOME")}</h1>
      <div>
        <h2>{t("WELCOME !!")}</h2>
        
      </div>
    </div>
  );
};

export default HomeP;
