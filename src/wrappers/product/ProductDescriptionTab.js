import PropTypes from "prop-types";
import React, {useEffect} from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview, fetchQuestion } from "../../redux/actions/productActions";
import ProductQuestion from "./Question";
import ProductReview from "./Review";

const ProductDescriptionTab = ({ spaceBottomClass, product }) => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.productData.review);
  const questions = useSelector((state) => state.productData.question);

  useEffect(() => {
    dispatch(fetchReview(product.id));
    dispatch(fetchQuestion(product.id));
  }, [dispatch, product.id]);

  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews({reviews ? reviews.reviews.length : 0})</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productQuestions">
                  Ask Question({questions ? questions.questions.length : 0})
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="productDescription">
                {product && product.fullDescription}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                 <ProductReview reviews={reviews} />
              </Tab.Pane>
              <Tab.Pane eventKey="productQuestions">
                 <ProductQuestion questions={questions}/>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
