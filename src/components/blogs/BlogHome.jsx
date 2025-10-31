import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./BlogHome.css";
import blogData from "../../assets/data/blogData";
import { BiCalendar } from "react-icons/bi";

const BlogHome = () => {
  const navigate = useNavigate();

  return (
    <div className="blogs-main-container">
      {/* Breadcrumb */}
      <div className="blogs-nav">
        <nav className="blogs-breadcrumb">
          <div className="blogs-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span className="blogs-breadcrumb-current">Blogs</span>
          </div>

          <button
            className="blogs-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <div className="blogs-header">
        <h1>Blogs</h1>
      </div>

      <main className="blogs-inner-container">
        {/* <NavLink to="/" className="blogs-back-btn">
          Back To Home
        </NavLink> */}

        <section className="blogs-grid">
          {blogData.map((data, index) => (
            <article key={index} className="blogs-card">
              <NavLink to={`/blog/${data.id}`}>
                <div className="blogs-card-images">
                  <img src={data.image} alt={data.metaTitle} />
                </div>
                <div className="blogs-card-content">
                  <span>{data.metaTitle}</span>
                  <h4>🗓️ {data.blogDate}</h4>
                  <h3>{data.metaDesc}</h3>
                  <p>Read More →</p>
                </div>
              </NavLink>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogHome;
