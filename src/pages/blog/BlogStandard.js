import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPosts from "../../wrappers/blog/BlogPosts";
import { getBlogs } from "../../redux/actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

const BlogStandard = ({ location }) => {
  const { pathname } = location;
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogData.blogs);

  const paginationHandle = (page, pageSize) => {
     dispatch(getBlogs({ current: page, pageSize }));
  }

  useEffect(() => {
    dispatch(getBlogs({ current: 1, pageSize: 6 }));
  }, [dispatch]);

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Blog</title>
        <meta
          name="description"
          content="Blog of flone Purchase your desire products."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Blog
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-50 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="ml-20">
                  <div className="row">
                    {/* blog posts */}
                    <BlogPosts blogs={blogs && blogs.data} />
                  </div>

                  {/* blog pagination */}
                  <div className="text-center">
                      <Pagination onChange={paginationHandle} pageSize={6} defaultCurrent={1} total={blogs && blogs?.pagination && blogs.pagination.total} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

BlogStandard.propTypes = {
  location: PropTypes.object,
};

export default BlogStandard;
