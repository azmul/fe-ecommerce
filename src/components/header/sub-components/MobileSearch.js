import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { fetchSearchProducts } from "../../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { SEARCH_STRING } from "../../../redux/actions/commonActions";

const MobileSearch = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const onSearch = (values) => {
    if(!values.search) return;
    if(values && values.search) {
      dispatch({
        type: SEARCH_STRING,
        payload: values.search,
      });
      dispatch(fetchSearchProducts(values.search));
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu.classList.remove("active");
      history.push("/search");
    } else {
      return;
    }
  };

  return (
    <div className="offcanvas-mobile-search-area">
      <Form form={form} onFinish={onSearch} className="contact-form-style">
            <Form.Item
              name="search"
              style={{marginBottom: "10px"}}
            >
              <Input placeholder="Search" type="text" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
            <i className="fa fa-search" />
            </Button>
          </Form>
    </div>
  );
};

export default MobileSearch;
