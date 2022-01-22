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
        Add Question
      </Button>
    </Form.Item>
  </>
);

const ProductQuestion = ({ questions }) => {
  const user = useSelector((state) => state.userData.user);
  const [submitting] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (!value) {
      return;
    }
    console.log(value);
  };

  return (
    <>
      {!user ? (
        <Row justify="center">
          <Col sm={15} xs={24}>
        <div className="single-review">
          <h5 className="login-register-link">
            <Link to={"/login-register"}>Login</Link> or{" "}
            <Link to={"/login-register"}>Register</Link> to post a question
          </h5>
        </div>
        </Col>
        </Row>
      ) : (
        <Row justify="center">
          <Col sm={15} xs={24}>
            <Comment
              avatar={
                <Avatar src="https://joeschmoe.io/api/v1/random" alt="Avatar" />
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
    </>
  );
};

export default ProductQuestion;
