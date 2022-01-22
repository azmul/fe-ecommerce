import React, { useState } from "react";
import { Comment, Avatar, Form, Button, Input, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Review
      </Button>
    </Form.Item>
  </>
);

const ProductReview = ({ reviews }) => {
  const user = useSelector((state) => state.userData.user);
  const [submitting] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    if (!value) {
      return;
    }
    console.log(value);
  };

  return (
    <>
      <div>
        {!user ? (
          <Row justify="center">
            <Col sm={15} xs={24}>
              <div className="single-review">
                <h5 className="login-register-link">
                  <Link to={"/login-register"}>Login</Link> or{" "}
                  <Link to={"/login-register"}>Register</Link> to give review
                </h5>
              </div>
            </Col>
          </Row>
        ) : (
          <Row justify="center">
            <Col sm={15} xs={24}>
              <Comment
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Avatar"
                  />
                }
                content={
                  <Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default ProductReview;
