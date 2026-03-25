import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navbar2 } from "components/navbars";
import Footer from "pages/Home/Footer";
import BackToTop from "components/BackToTop";
import Connect from "components/shared/Connect";
import { Spinner } from 'react-bootstrap';
import "./styles.css";

const BlogDetail = () => {
    const { slug } = useParams();

    const [blog, setBlog]: any = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = `https://api.cinergiedigital.com/recruitment/admin/get_blog_by_slug.php?slug=${slug}`;

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlog();
    }, [slug]);

    const fetchBlog = async () => {
        try {
            const res = await fetch(API_URL);
            const json = await res.json();

            if (json.status === "success") {
                setBlog(json.data);
            }
        } catch (err) {
            console.error("Blog fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const cleanContent = blog?.content?.replace(/<h([1-6])[^>]*>/g, "<h$1>");

    if (loading) {
        return (<div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column align-items-center gap-2">
                <Spinner animation="border" variant="primary" role="status" />
                <div>Loading...</div>
            </div>
        </div>)
    }
    if (!blog) return <p style={{ padding: "100px" }}>Blog not found</p>;

    const imageUrl = blog?.featured_image
        ? `https://cinergie-recruitment-bucket.s3.me-central-1.amazonaws.com/${blog.featured_image}`
        : "/placeholder.jpg";

    const formattedDate = blog?.published_at
        ? new Date(blog?.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        : "";

    return (
        <>
            <Navbar2 isSticky hideSearch />

            <main className="blog-container">
                <article className="blog-article">
                    <header className="blog-header">
                        <h1
                            className="hero-title"
                            style={{
                                fontSize: "3.2rem",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontFamily: "Garet"
                            }}
                        >
                            {blog.title}
                        </h1>

                        <p className="blog-date" style={{ fontFamily: "Garet" }}>
                            {formattedDate}
                        </p>

                        <img
                            src={imageUrl}
                            alt={blog.image_alt || blog.title}
                            className="blog-cover"
                        />
                    </header>

                    {/* Blog Content from API */}

                    <section
                        className="blog-content"
                        style={{ fontFamily: "Garet" }}
                        dangerouslySetInnerHTML={{ __html: cleanContent }}
                    />

                </article>
            </main>

            <Connect
                title="Get In Touch"
                description="Let's discuss how Cinergie can help you modernize your operations with data-driven solutions."
            />

            <Footer />
            <BackToTop />
        </>
    );
};

export default BlogDetail;