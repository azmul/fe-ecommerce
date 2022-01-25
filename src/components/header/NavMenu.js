import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useSelector } from "react-redux";
import { ThunderboltOutlined, CrownOutlined } from "@ant-design/icons";
import banner from "../../assets/img/nice-banner.png";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const setting = useSelector((state) => state.settingData.setting);
  const categories = useSelector((state) => state.commonData.categories);

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <a href="javascript:void(0)">
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </a>
            <ul className="mega-menu">
              <li>
                <ul>
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
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/collection"}>
                      <img
                        src={banner}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/collection"}>
              {strings["collection"]}
            </Link>
          </li>
          {setting && setting.is_campaign_sell && (
            <li className="campaign-products">
              <CrownOutlined /> <Link to={"/campaign"}>Campaign</Link>
            </li>
          )}
          {setting && setting.is_flash_sell && (
            <li className="flash-products">
              <ThunderboltOutlined /> <Link to={"/flash"}>Flash Sell</Link>
            </li>
          )}
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>{strings["blog"]}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
