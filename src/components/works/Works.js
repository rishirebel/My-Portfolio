import React, { useState } from "react";
import { TextDecrypt } from "../content/TextDecrypt";
import "./Works.css";
import Fugu from "../../assets/recentprojects/fugu.png";
import EC from "../../assets/recentprojects/ExC.png";
import Motific from "../../assets/recentprojects/motific.png";
import Panoptica from "../../assets/recentprojects/panoptica.png";
import HPEEDF from "../../assets/recentprojects/hpeedf.png";
import HPEEUAS from "../../assets/recentprojects/HPEEUAS.png";

const PanopticaVideo = "https://cyberrishi.s3.ap-south-1.amazonaws.com/panoptica.webm"; // Add video file path
const HPEEDFVideo = "https://cyberrishi.s3.ap-south-1.amazonaws.com/hpeedf.mp4"; // HPE video path
const HPEEUASVideo = "https://cyberrishi.s3.ap-south-1.amazonaws.com/HPEEUAS.mov"; // HPE video path
const ECVideo = "https://cyberrishi.s3.ap-south-1.amazonaws.com/ec.mp4"; // EC video path

export const Works = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Panoptica",
      link: "https://www.panoptica.app/",
      description: `As Software Architect and CISO Researcher for Panoptica (by Cisco Outshift), I collaborated closely with the Head of Product Design at Cisco and other UX/UI members from their team. Together, we focused on designing a seamless user experience for the platform while ensuring top-notch security. My DevOps and UX/UI teams at Intelligaia were instrumental in transforming these ideas into a modern cloud security solution, blending innovative UX with strong cloud-native security practices to create a powerful, user-centered product.`,
      alter: "Panoptica CNAPP",
      image: `${Panoptica}`,
      video: `${PanopticaVideo}`, // Add video property
      
    },
    {
      id: 2,
      title: "Motific AI",
      link: "https://www.motific.ai/",
      description: "While serving as CTO at Intelligaia, I worked on Motific, another project by Cisco Outshift. I led the development of UX/UI for Cisco's Generative AI platform, using the power of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) capabilities. My work enabled enterprises to leverage AI Agent-driven innovation, enhancing GenAI for Line-of-Business Leaders by deploying smarter assistants. Together with my team, we delivered services such as Design Workshops, UX Design, Product Development, and AI & Data Science, contributing to transformative solutions in the GenAI and LLM sectors.",
      alter: "Motific AI",
      image: Motific,
      
    },
    {
      id: 3,
      title: "HPE Ezmeral Data Fabric",
      link: "https://www.hpe.com/in/en/hpe-ezmeral-data-fabric.html",
      description: `As Software Architect for HPE Ezmeral Data Fabric, I led the efforts in full-stack development and data integration, utilizing my Data Science, UX/UI, DevOps, and Research teams at Intelligaia. Our engineering team made significant contributions by leveraging React JS and Express JS to build the platform, while employing Grommet, a React-based framework, to ensure a responsive UI. We also played a pivotal role in integrating Apache Spark and Apache Livy, customizing the user interface to enhance data processing capabilities seamlessly.`,
      alter: "HPE Ezmeral Data Fabric",
      image: `${HPEEDF}`,
      video: `${HPEEDFVideo}`, // HPE video property
      
    },
    {
      id: 4,
      title: "HPE Ezmeral Unified Analytics Software",
      link: "https://www.hpe.com/in/en/hpe-ezmeral-unified-analytics.html",
      description: `This project was part of the HPE Ezmeral suite, driving innovation in data management. As Software Architect, I led the efforts in full-stack development and data integration, utilizing my Data Science, UX/UI, DevOps, and Research teams at Intelligaia. Our engineering team made significant contributions by leveraging React JS and Express JS to build the platform, while employing Grommet, a React-based framework, to ensure a responsive UI. We also played a pivotal role in integrating Apache Spark and Apache Livy, customizing the user interface to enhance data processing capabilities seamlessly.`,
      alter: "HPE Ezmeral Unified Analytics Software",
      image: `${HPEEUAS}`,
      video: `${HPEEUASVideo}`, // HPE video property
      
    },
    {
      id: 5,
      title: "Export Comments",
      link: "https://exportcomments.io/",
      description: "As CTO at Intelligaia, I created 'Export Comments,' an in-house product designed to streamline feedback management for Figma. This ongoing project combines a Figma Plugin and a Web App, offering the first and only feedback management solution specifically for Figma. With over 13K users and growing by 400+ new users monthly, all purely organic without marketing spend, we are scaling the product by integrating AI capabilities and expanding tool integrations. I built the team from scratch and led the entire project setup, driving its development and future growth.",
      alter: "Export Comments",
      image: EC,
      video: ECVideo,
    },
    {
      id: 6,
      title: "Fugu",
      link: "https://web.fugu.chat/",
      description: "Open source alternative to Slack for Team Chat.",
      alter: "Fugu Chat",
      image: Fugu,
    },
  ]);

  const [videoEnded, setVideoEnded] = useState({});

  const handleVideoEnd = (id) => {
    setVideoEnded((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section id="projects" className="works-section">
      {projects.map((project, index) => (
        <div className={index % 2 === 0 ? "project" : "project project-reverse"}
        key={project.id}>
          <div className="__img_wrapper">
            {project.id === 1 || project.id === 3 || project.id === 4 || project.id === 5 ? (
              !videoEnded[project.id] ? (
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop={false} // Do not loop the video
                  playsInline
                  onEnded={() => handleVideoEnd(project.id)} // Trigger when video ends
                  style={{ borderRadius: '8px' }}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.alter} />
                </a>
              )
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.alter} />
              </a>
            )}
          </div>
          <div className="__content_wrapper">
            <h3 className="title">
              {project.id + ". " + project.title}
            </h3>
            <p className="description">{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
