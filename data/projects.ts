// src/data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "tong-social-media-web-app",
    title: "Tong - The Social Media Web App",
    description:
      "Tong is a community-driven social media web app inspired by the vibrant culture of Bangladeshi tea stalls (tong). It enables users to connect, debate, and share stories in a lively, interactive environment.",
    image: "images/projects/tong.png",
    technologies: ["TypeScript", "React", "Node.js", "WebSockets", "MongoDB"],
    links: {
      github: "https://github.com/AkagamiShnaks/Tong-the-social-media-web-app",
      live: "https://tong-the-social-media-web-app.vercel.app/",
    },
    category: "web",
    featured: true,
  },
  {
    id: "bone-tumor-prediction",
    title: "Bone Tumor Prediction",
    description:
      "Published research in Springer on bone tumor prediction using machine learning techniques. The study focuses on developing accurate prediction models for bone tumor classification and early detection.",
    image: "images/projects/bone-tumor.png",
    technologies: [
      "Machine Learning",
      "Medical Imaging",
      "Python",
      "Research",
      "Data Analysis",
      "Deep Learning",
    ],
    links: {
      publication: "https://link.springer.com/",
    },
    category: "publications",
    featured: true,
  },
  {
    id: "bangla-news-nlp",
    title: "Bangla News Event Detection",
    description:
      "Research work on event detection in Bangla news text using advanced NLP techniques. Implemented a full pipeline with text preprocessing, transformer-based embeddings, and deep learning models.",
    image: "images/projects/bangla-news.png",
    technologies: [
      "NLP",
      "Transformers",
      "BiLSTM",
      "FastText",
      "Python",
      "Research",
    ],
    links: {
      github: "https://github.com/AkagamiShnaks/bangla-news-nlp",
    },
    category: "publications",
    featured: true,
  },
  {
    id: "bangla-braille-cv",
    title: "Bangla Braille Recognition",
    description:
      "Research project on recognizing Bangla Braille characters using computer vision and deep learning. Developed a CNN-based system achieving 94% mAP@50 for real-time character recognition.",
    image: "images/projects/bangla-braille.png",
    technologies: [
      "Computer Vision",
      "YOLOv8",
      "CNN",
      "Python",
      "Research",
      "Accessibility",
    ],
    links: {
      github: "https://github.com/AkagamiShnaks/bangla-braille-cv",
    },
    category: "publications",
    featured: true,
  },
  {
    id: "ai-agent-chatbot",
    title: "AI Agent Chatbot",
    description:
      "An advanced AI chatbot built using LangGraph, FastAPI, and Streamlit. Features intelligent agent-based interactions and natural language processing capabilities.",
    image: "images/projects/ai-agent-chatbot.png",
    technologies: ["Python", "LangGraph", "FastAPI", "Streamlit", "AI", "NLP"],
    links: {
      github: "https://github.com/AkagamiShnaks/AI-agent-chatbot",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "football-analysis",
    title: "Football Field Analytics",
    description:
      "An intelligent system for analyzing football matches through video using Machine Learning and OpenCV. Combines deep learning-based object detection (YOLOv5) with traditional computer vision techniques.",
    image: "images/projects/football-analysis.png",
    technologies: [
      "Python",
      "OpenCV",
      "YOLOv5",
      "Machine Learning",
      "Computer Vision",
      "Jupyter Notebooks",
    ],
    links: {
      github:
        "https://github.com/AkagamiShnaks/Football-Analysis-using-ML-and-OpenCV",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "ghotona-chitro",
    title: "Ghotona Chitro",
    description:
      "A web application that detects events from Bangla text sources using advanced NLP techniques and machine learning models.",
    image: "images/projects/ghotona-chitro.png",
    technologies: ["JavaScript", "NLP", "Machine Learning", "Web Development"],
    links: {
      github: "https://github.com/AkagamiShnaks/ghotona-chitro",
      live: "https://ghotona-chitro.vercel.app/",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "opal",
    title: "Opal",
    description:
      "A video messaging tool that lets you quickly record your screen, voice, and face to share information faster than typing. Perfect for async communication, tutorials, product demos, and team updates.",
    image: "images/projects/opal.png",
    technologies: ["TypeScript", "React", "Video Processing", "WebRTC"],
    links: {
      github: "https://github.com/AkagamiShnaks/Opal",
    },
    category: "web",
    featured: true,
  },
  {
    id: "ml-assignments",
    title: "Machine Learning Assignments",
    description:
      "A collection of Machine Learning practice assignments and implementations covering various ML concepts and techniques.",
    image: "images/projects/ml-assignments.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Jupyter Notebooks",
      "Data Analysis",
    ],
    links: {
      github: "https://github.com/AkagamiShnaks/ML-ASSIGNMENTS",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "samayrizer",
    title: "Samayrizer",
    description:
      "An efficient tool for summarizing PDF documents quickly and accurately using advanced NLP techniques.",
    image: "images/projects/samayrizer.png",
    technologies: ["Python", "NLP", "PDF Processing", "Text Summarization"],
    links: {
      github: "https://github.com/AkagamiShnaks/samayrizer",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "bangla-article-dataset",
    title: "Bangla Article Dataset",
    description:
      "A curated collection of Bangla news articles for NLP research and development, supporting various natural language processing tasks.",
    image: "images/projects/bangla-articles.png",
    technologies: [
      "Python",
      "NLP",
      "Data Collection",
      "Bangla Language Processing",
    ],
    links: {
      github: "https://github.com/AkagamiShnaks/bangla-article-dataset",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "restaurant-sys",
    title: "RestaurantSys",
    description:
      "A comprehensive restaurant management system with features for menu management, order processing, and customer service.",
    image: "images/projects/restaurant-sys.png",
    technologies: [
      "Python",
      "Web Development",
      "Database Management",
      "System Design",
    ],
    links: {
      github: "https://github.com/AkagamiShnaks/restaurant-sys",
    },
    category: "web",
    featured: true,
  },
];
