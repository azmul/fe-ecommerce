import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import RelatedProducts from "../../wrappers/product/RelatedProducts";
import { getSortedProducts } from "../../helpers/product";

const CTAGORY = "category";

const Product = ({ location, product, products }) => {

  const category = product && product.category ? product.category[0] : undefined;
  const filteredProducts = getSortedProducts(products, CTAGORY, category);

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Purchage Your desire Product</title>
        <meta
          name="description"
          content="Product page of flone Purchase your desire products."
        />
      </MetaTags>

      <LayoutOne headerTop="visible">
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-50"
          spaceBottomClass="pb-30"
          product={product}
        />

        {category && filteredProducts.length > 0 && <RelatedProducts title={"Related Products"} products={filteredProducts} /> }
        <br />
        <br />
        {/* product description tab */}
        <ProductDescriptionTab spaceBottomClass="pb-50" product={product} />

      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      (single) => single.id === Number(productId)
    )[0],
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Product);
