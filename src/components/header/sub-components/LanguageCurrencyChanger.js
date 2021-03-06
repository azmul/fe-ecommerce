import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import { useSelector } from "react-redux";

const LanguageCurrencyChanger = ({
  currency,
  changeCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const setting = useSelector((state) => state.settingData.setting);

  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "bn"
            ? "Bangla"
            : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="bn" onClick={e => changeLanguageTrigger(e)}>
                Bangla
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency">
        <p>Call Us {setting && setting.call_us_number}</p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  changeCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
