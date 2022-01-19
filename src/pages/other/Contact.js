import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import { Form, Input, Button } from 'antd';
import * as contactApi from "../../api/contactApi";
import { toast } from 'react-toastify';
import bdPhone from '@0devco/bd-phone-validator'

const Contact = ({ location }) => {
  const { pathname } = location;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    if(!values.phone) {
      form.setFields([
        {
          name: 'phone',
          errors: ["Plese give correct phone number"]
        }
      ])
      return;
    }
    setLoading(true);
    try {
      await contactApi.sendMessage(values);
      form.resetFields();
      toast.success("Message send sucessfully");
    } catch (e) {
      toast.error("Message not send");
    }finally{
      setLoading(false);
    }
  };

  const checkMobileNumber= (event) => {
    const number = event.target.value;
    if(!number) return;
    const info = bdPhone(number);
    if (info.core_valid && info.has_operator) {
      form.setFields([
        {
          name: 'phone',
          errors: undefined
        }
      ])
    } else {
      form.setFields([
        {
          name: 'phone',
          errors: ["Not correct number"]
        }
      ])
    }
  }


  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Contact</title>
        <meta
          name="description"
          content="Contact of flone Purchase your desire products."
        />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-50 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="23.2156112" longitude="89.1269443" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+01734 24 08 25</p>
                      <p>+01518 32 90 44</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:kureghor@email.com">kureghor@email.com</a>
                      </p>
                      <p>
                        <a href="http://kureghor.com">kureghor.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>Salua, Chowgacha 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="https://web.facebook.com/Kureghorbangladesh">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/Kureghor">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <Form form={form} onFinish={onFinish} className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Item
                          name="name"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input name="name" placeholder="Name*" type="text" />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6">
                      <Form.Item
                          name="phone"
                        >
                          <Input onChange={checkMobileNumber}  name="phone" placeholder="Phone*" type="text" />
                        </Form.Item>
                      </div>
                      <div className="col-lg-12">
                        <Form.Item
                          name="subject"
                          rules={[{ required: true, message: 'Please input your subject!' }]}
                        >
                          <Input name="subject"
                          placeholder="Subject*"
                          type="text" />
                        </Form.Item>
                      </div>
                      <div className="col-lg-12">
                        <Form.Item
                          name="message"
                          rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                          <Input.TextArea name="message"
                          placeholder="Your Massege*"
                          />
                        </Form.Item>
                        <Button loading={loading} type="primary" htmlType="submit">
                           SEND
                        </Button>
                        
                      </div>
                    </div>
                  </Form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
