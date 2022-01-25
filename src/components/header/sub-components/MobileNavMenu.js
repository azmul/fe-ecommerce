import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FETCH_USER, USER_TOKEN } from "../../../redux/actions/userActions";

const MobileNavMenu = ({ strings }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.user);
  const setting = useSelector((state) => state.settingData.setting);
  const categories = useSelector((state) => state.commonData.categories);

  const handleLogout = () => {
    dispatch({
      type: FETCH_USER,
      payload: null,
    });
    dispatch({
      type: USER_TOKEN,
      payload: false,
    });
  };
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      {user && user.picture_url ? (
        <img width="20" height="20" src={user.picture_url} alt="PROFILE" />
      ) : (
        <i className="pe-7s-user-female" />
      )}

      <ul>
        <li className="menu-item-has-children">
          <ul className="sub-menu">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => (
                <li key={category}>
                  <Link to={process.env.PUBLIC_URL + "/menu?item=" + category}>
                    {category} Items
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/collection"}>
            {strings["collection"]}
          </Link>
        </li>
        {setting && setting.is_campaign_sell && (
          <li className="campaign-products">
            <Link to={"/campaign"}>Campaign</Link>
          </li>
        )}
        {setting && setting.is_flash_sell && (
          <li className="flash-products">
            <Link to={"/flash"}>Flash Sell</Link>
          </li>
        )}
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog"}>{strings["blog"]}</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/my-account"}>
            {strings["account"]}
          </Link>
          <ul className="sub-menu">
            {!user && (
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  Login
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  Register
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  my account
                </Link>
              </li>
            )}
            {user && (
              <li>
                <a href={process.env.PUBLIC_URL + "/"} onClick={handleLogout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);
