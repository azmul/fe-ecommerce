import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import RelatedProducts from "../../wrappers/product/RelatedProducts";
import { getProducts } from "../../helpers/product";

const Product = ({ location, product, products }) => {
  const { pathname } = location;
  
  const category = product && product.category ? product.category[0] : undefined;
  const filteredProducts = getProducts(products, category, "new", 1000)

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Purchage Your desire Product</title>
        <meta
          name="description"
          content="Product page of flone Purchase your desire products."
        />
      </MetaTags>

      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Shop Product</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-50"
          spaceBottomClass="pb-30"
          product={product}
        />

        {category && filteredProducts.length > 0 && <RelatedProducts products={filteredProducts} /> }
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
