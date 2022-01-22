import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_USER, USER_TOKEN } from "../../redux/actions/userActions";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  removeFromCart,
  iconWhiteClass,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userData.user);
  const [form] = Form.useForm();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

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

  const onSearch = (values) => {
    if(values && values.search) {
      form.setFields([
        {
          name: "search",
          value: undefined,
          errors: undefined,
        },
      ]);
      history.push("/shop");
    } else {
      return;
    }
    
  };

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <Form form={form} onFinish={onSearch} className="contact-form-style">
            <Form.Item
              name="search"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Search" type="text" />
            </Form.Item>
            <Button style={{width: "100%", height: "40px"}} type="primary" htmlType="submit">
              <i style={{fontWeight: "bold", color: "white"}} className="pe-7s-search" />
            </Button>
          </Form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          {user && user.picture_url ? (
            <img width="20" height="20" src={user.picture_url} alt="PROFILE" />
          ) : (
            <i className="pe-7s-user-female" />
          )}
        </button>
        <div className="account-dropdown">
          <ul>
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
        </div>
      </div>
      <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          removeFromCart={removeFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  removeFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item, addToast) => {
      dispatch(removeFromCart(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
