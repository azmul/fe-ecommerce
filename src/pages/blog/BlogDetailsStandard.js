import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";
import { connect } from "react-redux";
import { getBlog } from "../../redux/actions/blogActions";
import { useDispatch, useSelector } from "react-redux";

const BlogDetailsStandard = ({ location, blogId }) => {
  const { pathname } = location;
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blogData.blog);

  useEffect(() => {
    dispatch(getBlog(blogId));
  }, [blogId, dispatch]);

  return (
    <Fragment>
      <MetaTags>
        <title>Kureghor | Blog Post</title>
        <meta
          name="description"
          content="Blog post page of flone Purchase your desire products."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/blog"}>Blog</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Blog Post
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-50 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPost blog={blog} />

                  {/* blog post comment */}
                  <BlogComment />
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

BlogDetailsStandard.propTypes = {
  location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.id;
  return {
    blogId: blogId
  };
};


export default connect(mapStateToProps)(BlogDetailsStandard);
