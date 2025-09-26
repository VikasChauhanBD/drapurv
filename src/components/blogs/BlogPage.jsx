import React, { useRef, useState, useMemo } from "react";
import "./BlogPage.css";
import blogData from "../../assets/data/blogData";
import { useParams, Link, NavLink } from "react-router-dom";

function BlogPage() {
  const carouselRef = useRef(null);

  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === blogId);

  // ✅ Like / Dislike state
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);

  // ✅ Estimate reading time
  const readingTime = useMemo(() => {
    if (!blog?.para) return "0 min read";
    const words = blog.para.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // average 200 WPM
    return `${minutes} min read`;
  }, [blog]);

  // ✅ Share function
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: blog.metaTitle,
        text: blog.metaDesc,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Blog link copied to clipboard!");
    }
  };

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

  return (
    <div>
      <section className="blog-page-section">
        <img src={blog.image} alt={blog.metaTitle} />
        <NavLink to="/blogs" className="blogs-btn">
          Back To Blogs
        </NavLink>
        <h1>{blog.metaTitle}</h1>

        <span className="blog-read-time">Estimated Time:- {readingTime}</span>

        <div className="blog-content">{formatContent(blog.para)}</div>

        <div className="blog-actions">
          {/* <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
          <button onClick={() => setDislikes(dislikes + 1)}>
            👎 {dislikes}
          </button> */}
          <button onClick={handleShare}>🔗 Share</button>
        </div>
      </section>

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
                <h3>{data.metaDesc}</h3>
                <p>Read More</p>
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
