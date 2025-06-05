// src/data/social.ts
import { SocialLink } from "../types";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/AkagamiShnaks",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/ayon",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/katakuri_nichan?igsh=dzJ5bnh5aWY3NnVy",
    icon: FaInstagram,
  },
  {
    id: "twitter",
    name: "X",
    url: "",
    icon: FaXTwitter,
  },
];

export const contactInfo = {
  email: {
    personal: "ayon7930@gmail.com",
    business: "ayon@dissolvesoftware.com",
  },
  phone: {
    primary: "01771769898",
    secondary: "",
  },
  location: "Narayanganj, Bangladesh",
  availability: "Actively seeking opportunities in ML, AI, and full stack development",
  preferredContact: "Email, LinkedIn",
  timeZone: "BST (UTC+6)",
  languages: [
    {
      language: "English",
      proficiency: "Fluent",
    },
    {
      language: "Bengali",
      proficiency: "Native",
    },
  ],
};

export const resumeData = {
  downloadUrl: "/resume.pdf",
  lastUpdated: "2024-06",
  sections: {
    profile: {
      title: "Professional Summary",
      content:
        "Recent Computer Science and Engineering graduate with strong experience in machine learning, NLP, and computer vision. Skilled in building interpretable AI systems and full-stack applications using modern tools like React, Django, and PyTorch. Passionate about solving real-world problems with technology and open to impactful opportunities in AI and software engineering.",
    },
    expertise: [
      "Machine Learning Engineering",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Full Stack Web Development",
      "AI Integration",
      "Research & Publication",
      "Data Analysis & Visualization",
    ],
  },
};
