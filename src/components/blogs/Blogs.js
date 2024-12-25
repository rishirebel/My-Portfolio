import React from "react";
import "./Blogs.css";

export const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Cloud Security",
      link: "/blog/future-of-ai-cloud-security",
      description: `Explore how AI is transforming cloud security, with insights into its applications, challenges, and opportunities.`,
      date: "November 12, 2024",
      image: "https://via.placeholder.com/800x400", // Placeholder for blog image
    },
    {
      id: 2,
      title: "Designing with Accessibility in Mind",
      link: "/blog/designing-with-accessibility",
      description: `Learn about the principles of inclusive design and how to create digital products that cater to all users.`,
      date: "October 25, 2024",
      image: "https://via.placeholder.com/800x400",
    },
    {
      id: 3,
      title: "Data Fabric: Simplifying Complex Analytics",
      link: "/blog/data-fabric-analytics",
      description: `A deep dive into data fabric technology and how it simplifies data management for enterprises.`,
      date: "September 30, 2024",
      image: "https://via.placeholder.com/800x400",
    },
    {
        id: 4,
        title: "The Future of AI in Cloud Security",
        link: "/blog/future-of-ai-cloud-security",
        description: `Explore how AI is transforming cloud security, with insights into its applications, challenges, and opportunities.`,
        date: "November 12, 2024",
        image: "https://via.placeholder.com/800x400", // Placeholder for blog image
      },
      {
        id: 5,
        title: "Designing with Accessibility in Mind",
        link: "/blog/designing-with-accessibility",
        description: `Learn about the principles of inclusive design and how to create digital products that cater to all users.`,
        date: "October 25, 2024",
        image: "https://via.placeholder.com/800x400",
      },
      {
        id: 6,
        title: "Data Fabric: Simplifying Complex Analytics",
        link: "/blog/data-fabric-analytics",
        description: `A deep dive into data fabric technology and how it simplifies data management for enterprises.`,
        date: "September 30, 2024",
        image: "https://via.placeholder.com/800x400",
      }
  ];

  return (
    <section id="blogs" className="blogs-section">
      <h2 className="blogs-title">Latest Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <a href={blog.link} className="blog-link">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-description">{blog.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
