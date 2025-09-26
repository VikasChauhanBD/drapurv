import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./BlogHome.css";
import blogData from "../../assets/data/blogData";

const BlogHome = () => {
  return (
    <div className="blogs-main-container">
      <div className="blogs-header">
        <h1>Blogs</h1>
      </div>

      <main className="blogs-inner-container">
        <NavLink to="/" className="blogs-back-btn">
          Back To Home
        </NavLink>

        <section className="blogs-grid">
          {blogData.map((data, index) => (
            <article key={index} className="blogs-card">
              <NavLink to={`/blog/${data.id}`}>
                <div className="blogs-card-images">
                  <img src={data.image} alt="Project Avenue interior" />
                </div>
                <div className="blogs-card-content">
                  <span className="blogs-card-category">{data.metaTitle}</span>
                  <h3>{data.metaDesc}</h3>
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
