import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {Typography} from "antd";

const { Paragraph } = Typography;

const BlogPosts = ({blogs}) => {
  
  return (
    <Fragment>
    {blogs && blogs.length > 0 ? blogs.map(blog => (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={`/blog-details/${blog.id}`}>
              <img
                src={blog.picture_url}
                alt={blog.title}
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{moment(blog.createdAt).format('DD.MM.YYYY')}</li>
                <li>
                  <Link to={`/blog-details/${blog.id}`}>
                    {blog.like_count} <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={`/blog-details/${blog.id}`}>
                {blog.title}
              </Link>
            </h4>
            <Paragraph ellipsis={{ rows: 4 }} >
              {blog.content}
            </Paragraph>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={`/blog-details/${blog.id}`} >
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )): "There is No Blogs Right Now"}
      
    </Fragment>
  );
};

export default BlogPosts;
