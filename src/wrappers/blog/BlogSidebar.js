import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getRecentBlogs } from "../../redux/actions/blogActions";

const BlogSidebar = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogData.recentBlogs);

  useEffect(() => {
    dispatch(getRecentBlogs());
  }, [dispatch]);

  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Blogs </h4>
        <div className="sidebar-project-wrap mt-30">
        {blogs && blogs.length > 0 && blogs.map(blog=>(
          <div className="single-sidebar-blog" key={blog._id}>
            <div className="sidebar-blog-img">
              <Link to={`/blog/${blog._id}`}>
                <img
                  src={
                    blog.picture_url
                  }
                  alt={blog.title}
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>{blog.category}</span>
              <h4>
                <Link to={`/blog/${blog._id}`}>
                  <Typography.Paragraph ellipsis={{ rows: 1 }} >
                    {blog.title}
                  </Typography.Paragraph>
                </Link>
              </h4>
            </div>
          </div>
        ))}
          
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Categories</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Women <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Men <span>6</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Bags <span>2</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Accessories <span>9</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
