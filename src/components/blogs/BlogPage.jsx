import React, { useRef, useMemo, useEffect } from "react";
import "./BlogPage.css";
import blogData from "../../assets/data/blogData";
import {
  useParams,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";

function BlogPage() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const { blogId } = useParams();
  const location = useLocation();
  const blog = blogData.find((b) => b.id === blogId);

  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId, location.pathname]);

  const readingTime = useMemo(() => {
    if (!blog?.para) return "2 min read";
    const words = blog.para.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }, [blog]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.metaTitle,
          text: blog.metaDesc,
          url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Blog link copied to clipboard!");
    }
  };

  const formatContent = (content) => {
    if (!content) return null;
    const paragraphs = content.split("\n\n").filter((p) => p.trim());
    let headingIndex = 0;

    return paragraphs.map((paragraph, index) => {
      if (paragraph.trim().startsWith("—")) {
        return (
          <p
            key={index}
            className="author-signature"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      }

      // Check if paragraph contains an h4 tag
      if (paragraph.includes("<h4>")) {
        const modifiedParagraph = paragraph.replace(
          /<h4>/g,
          () => `<h4 id="section-${headingIndex++}">`
        );
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: modifiedParagraph }}
          />
        );
      }

      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      );
    });
  };

  const tableOfContents = useMemo(() => {
    const headings = [];
    const temp = document.createElement("div");
    temp.innerHTML = blog?.para || "";
    const h4Elements = temp.querySelectorAll("h4");
    h4Elements.forEach((h4, index) => {
      headings.push({
        id: `section-${index}`,
        title: h4.textContent,
      });
    });
    return headings;
  }, [blog]);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>
        <NavLink to="/blogs" className="back-btn">
          Back to Blogs
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDesc} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDesc} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDesc} />
        <meta name="twitter:image" content={blog.image} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="blog-page">
        {/* Breadcrumb */}
        <div className="blog-nav">
          <nav className="blog-breadcrumb">
            <div className="blog-breadcrumb-btn-div">
              <button
                className="blog-breadcrumb-btn"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className="blog-breadcrumb-btn"
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </button>
            </div>

            <div className="blog-breadcrumb-content">
              <span>›</span>
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/blogs">Blogs</Link>
              <span>›</span>
              <span className="blog-breadcrumb-current">
                {blog.metaTitle.substring(0, 50)}...
              </span>
            </div>
          </nav>
        </div>

        {/* Main Container */}
        <div className="blog-container">
          <article className="blog-main-article">
            <div className="blog-hero-image">
              <img src={blog.image} alt={blog.metaTitle} />
            </div>

            <div className="blog-meta-info">
              <span>📅 {blog.blogDate}</span>
              <span>⏱️ {readingTime}</span>
            </div>

            <h1 className="blog-article-title">{blog.metaTitle}</h1>

            <div className="blog-article-content">
              {formatContent(blog.para)}
            </div>

            <button className="blog-share-btn" onClick={handleShare}>
              🔗 Share
            </button>
          </article>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-widget">
              <h3>Table of Contents</h3>
              <ul className="blog-toc-list">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Recommended Section */}
        <section className="recommended-blog">
          <h6>KEEP EXPLORING</h6>
          <h1>Recommended Reads - Just for You</h1>

          <section className="recommended-blog-cards" ref={carouselRef}>
            {blogData.map((data, index) => (
              <article key={index} className="recommended-blog-card">
                <Link to={`/blog/${data.id}`}>
                  <div className="recommended-blog-card-images">
                    <img src={data.image} alt={data.metaTitle} />
                  </div>

                  <span>{data.metaTitle}</span>
                  <h4>🗓️ {data.blogDate}</h4>
                  <h3>{data.metaDesc}</h3>
                  <p>Read More</p>
                </Link>
              </article>
            ))}
          </section>

          <hr />

          <div className="recommended-blog-buttons">
            <p onClick={() => handleScroll("prev")}>← Previous Blog</p>
            <p onClick={() => handleScroll("next")}>Next Blog →</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogPage;
