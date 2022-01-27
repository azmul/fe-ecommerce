import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import { useSelector } from "react-redux";
import { getSortedProducts } from "../../helpers/product";
import { Collapse, Button } from "antd";
import RelatedProducts from "../../wrappers/product/RelatedProducts";
import { useHistory } from "react-router-dom";

const { Panel } = Collapse;

const CTAGORY = "category";

const HomePage = () => {
  const history = useHistory();
  const products = useSelector((state) => state.productData.products);
  const categories = useSelector((state) => state.commonData.categories);
  const productsGrid = [];

  categories.forEach((category) => {
    const categoriesProducts = getSortedProducts(products, CTAGORY, category);
    if (categoriesProducts.length > 0) {
      productsGrid.push({
        category,
        products: categoriesProducts,
      });
    }
  });

  const goToProductDetails = (category) => {
    history.push(`/menu?item=${category}`);
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone Purchase your desire products."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSlider />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" />

        {productsGrid.map((item, index) => (
          <div className="container">
            <Collapse key={index}>
              <Panel
                key={item.category}
                header={<h4>{item.category} Products</h4>}
                extra={
                  <Button type="primary" onClick={() => goToProductDetails(item.category)}>
                    Show More Products
                  </Button>
                }
              >
                <RelatedProducts products={item.products} />
              </Panel>
            </Collapse>
          </div>
        ))}
        <br />
        <br />
        {/* testimonial */}
        <TestimonialOne />
      </LayoutOne>
    </Fragment>
  );
};

export default HomePage;
