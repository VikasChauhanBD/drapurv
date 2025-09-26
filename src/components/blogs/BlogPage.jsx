import React, { useRef } from "react";
import "./BlogPage.css";
import blogData from "../../assets/data/blogData";
import { useParams, Link, useNavigate, NavLink } from "react-router-dom";

function BlogPage() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".recommended-blog-card");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30; // Adjust based on your CSS
        const scrollAmount = cardWidth + gap;

        carouselRef.current.scrollBy({
          left: direction === "next" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  // ✅ Function to format content with HTML rendering
  const formatContent = (content) => {
    if (!content) return null;

    const paragraphs = content.split("\n\n").filter((p) => p.trim());
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
      return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
    });
  };

  return (
    <div>
      <section className="blog-page-section">
        <img src={blog.image} alt={blog.metaTitle} />
        <NavLink to="/blogs" className="blogs-btn">
          Back To Blogs
        </NavLink>
        <h1>{blog.metaTitle}</h1>
        <div className="blog-content">{formatContent(blog.para)}</div>
      </section>

      <section className="recommended-blog">
        <h6>KEEP EXPLORING</h6>
        <h1>Recommended Reads - Just for You</h1>

        <section className="recommended-blog-cards" ref={carouselRef}>
          {blogData.map((data, index) => (
            <article key={index} className="recommended-blog-card">
              <Link to={`/blog/${data.id}`}>
                <img src={data.image} alt={data.metaTitle} />
                <h6>{data.metaTitle}</h6>
                <h3>{data.metaDesc}</h3>
              </Link>
            </article>
          ))}
        </section>

        <hr />

        <div className="recommended-blog-buttons">
          <p onClick={() => handleScroll("prev")}>Previous Blog</p>
          <p onClick={() => handleScroll("next")}>Next Blog</p>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
