import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchCollectionsProducts,
} from "./redux/actions/productActions";
import { getSetting } from "./redux/actions/settingActions";
import { useClearCacheCtx } from "react-clear-cache";
import { fetchCategories } from "./redux/actions/commonActions";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

// New pages
const ShopSearch = lazy(() => import("./pages/shop/Search"));
const CampaignPage = lazy(() => import("./pages/shop/Campaign"));
const FlashPage = lazy(() => import("./pages/shop/Flash"));
const MenuPage = lazy(() => import("./pages/shop/Menu"));

const App = (props) => {
  const dispatch = useDispatch();
  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx();

  /** Empy Cache when new version comes */
  useEffect(() => {
    if (!isLatestVersion) {
      emptyCacheStorage();
    }
  }, [emptyCacheStorage, isLatestVersion]);

  useEffect(() => {
    dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          bn: require("./translations/bangla.json"),
        },
      })
    );
    dispatch(fetchProducts());
    dispatch(getSetting());
    dispatch(fetchCollectionsProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeFashion}
                />

                {/* Homepages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/home-fashion"}
                  component={HomeFashion}
                />

                {/* Shop pages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop"}
                  component={ShopGridStandard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                  component={ShopGridFilter}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/search"}
                  component={ShopSearch}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/campaign"}
                  component={CampaignPage}
                />
                 <Route
                  exact
                  path={process.env.PUBLIC_URL + "/flash"}
                  component={FlashPage}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/menu"}
                  component={MenuPage}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                  component={ShopGridTwoColumn}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                  component={ShopGridNoSidebar}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                  component={ShopGridFullWidth}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                  component={ShopGridRightSidebar}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-list-standard"}
                  component={ShopListStandard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                  component={ShopListFullWidth}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                  component={ShopListTwoColumn}
                />

                {/* Shop product pages */}
                <Route
                  exact
                  path={"/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                  component={ProductTabLeft}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                  component={ProductTabRight}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                  component={ProductSticky}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/product-slider/:id"}
                  component={ProductSlider}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                  component={ProductFixedImage}
                />

                {/* Blog pages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/blog"}
                  component={BlogStandard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                  component={BlogNoSidebar}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                  component={BlogRightSidebar}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/blog/:id"}
                  render={(routeProps) => (
                    <BlogDetailsStandard
                      {...routeProps}
                      key={routeProps.match.params.id}
                    />
                  )}
                />

                {/* Other pages */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
