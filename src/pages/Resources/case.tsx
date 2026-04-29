import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Spinner } from 'react-bootstrap';

const API_URL =
  "https://api.cinergiedigital.com/recruitment/admin/get_casestudies.php";

const Resources = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      if (json.status === "success") {
        const formatted = json.data.map((blog: any) => ({
          slug: blog.slug,
          title: blog.title,
          desc: blog.meta_description || "",
          img: blog.featured_image
            ? `https://cinergie-recruitment-bucket.s3.me-central-1.amazonaws.com/${blog.featured_image}`
            : "/placeholder.jpg",
          alt: blog.image_alt || blog.title,
          badge: "NEW",
          tags: blog.focus_keyword ? blog.focus_keyword.split(",").map((tag: string) => `#${tag.trim()}`) : []
        }));

        setBlogs(formatted);
      }
    } catch (err) {
      console.error("API error:", err);
    }
    finally {
      setLoading(false)
    }
  };

  // Convert array into rows of 2 blogs
  const rows = [];
  for (let i = 0; i < blogs.length; i += 2) {
    rows.push(blogs.slice(i, i + 2));
  }

  if (loading) {
    return (<div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="d-flex flex-column align-items-center gap-2">
        <Spinner animation="border" variant="primary" role="status" />
        <div className="text-white">Loading...</div>
      </div>
    </div>)
  }

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">
        ↑
      </button>

      <section className="resources-section">
        <div className="resources-container">
          <h2 className="fw-bold" style={{ fontFamily: "Garet" }}>
            Explore Cinergie Digital's Case Studies
          </h2>


          {!rows || rows.length === 0 ? (
            <div className="no-blogs">No blogs available</div>
          ) : (
            rows.map((row, index) => {
              const isFlipped = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`services-grid ${isFlipped ? "services-grid-flipped" : ""}`}
                >
                  {row.map((blog: any, i) => {
                    const isSmallCard =
                      (!isFlipped && i === 1) || (isFlipped && i === 0);
                    return (
                      <div
                        key={i}
                        className={i === 0 ? "left-column" : "right-column"}
                      >
                        <Link to={`/case-study/${blog.slug}`} className="resource-card-link">
                          <div className="resource-card">
                            <div className="card-image">
                              <img src={blog?.img} alt={blog?.alt} />
                              <div className="metric-badge">{blog?.badge}</div>
                            </div>

                            <div className="resource-content">
                              <h3
                                className="fw-medium subheading"
                                style={{ fontFamily: "Garet" }}
                              >
                                {blog?.title}
                              </h3>

                              <p style={{ fontFamily: "Garet" }}>{isSmallCard ? blog?.desc.slice(0, 35) + "..." : blog?.desc}</p>

                              <div className="resource-footer">
                                <span
                                  className="cta-link"
                                  style={{ fontFamily: "Garet" }}
                                >
                                  Read More →
                                </span>

                                <div className="labels">
                                  {blog?.tags.map((tag: any, t: any) => (
                                    <span key={t} className="label">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;