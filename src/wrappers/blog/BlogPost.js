import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

const BlogPost = ({ blog }) => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img alt={blog.title} src={blog.picture_url} />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>{moment(blog.createdAt).format("DD.MM.YYYY")}</li>
              <li>
                  {blog.like_count} <i className="fa fa-comments-o" />
              </li>
            </ul>
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                {blog.category}
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>share :</span>
          <div className="share-social">
            <ul>
              <li>
                <FacebookShareButton
                  className="facebook"
                  url={window.location.href}
                  quote={blog.title}
                >
                  <i className="fa fa-facebook" />
                </FacebookShareButton>
              </li>
              <li>
                <TwitterShareButton
                  className="twitter"
                  url={window.location.href}
                  quote={blog.title}
                >
                  <i className="fa fa-twitter" />
                </TwitterShareButton>
              </li>
              <li>
                <PinterestShareButton
                  className="instagram"
                  url={window.location.href}
                  quote={blog.title}
                >
                  <i className="fa fa-instagram" />
                </PinterestShareButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
