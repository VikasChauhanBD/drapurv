import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./BlogHome.css";
import blogData from "../../assets/data/blogData";
import { Helmet } from "react-helmet";

const BlogHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blogs- Dr. Apurv Mehra</title>
        <meta
          name="description"
          content="Read more blogs for information & updates by Dr. Apurv Mehra. He is an experienced & well known faculty for medico professionals for career building."
        />
      </Helmet>

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
          <img
            src="https://cdn.dribbble.com/userupload/45840657/file/9e5129db160c35315f62032bcb3478e1.jpg"
            alt="Blog Banner"
          />
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
    </>
  );
};

export default BlogHome;
