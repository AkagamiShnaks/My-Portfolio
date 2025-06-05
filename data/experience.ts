import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "bangla-news-nlp",
    role: "Undergraduate Researcher – NLP",
    company: "East West University",
    companyUrl: "https://www.ewubd.edu/",
    duration: "2024 - Present",
    mode: "Academic",
    description:
      "Designed and implemented a full NLP pipeline for event detection in Bangla news text using both traditional and deep learning models.",
    achievements: [
      "Built preprocessing pipeline with text cleaning, tokenization, TF-IDF, FastText, and transformer-based embeddings",
      "Developed classifiers including SVM, Random Forest, and BiLSTM with attention achieving over 90% accuracy",
      "Enhanced performance using Named-Entity Recognition and dependency parsing",
      "Developed a full-stack web app (React.js frontend + Flask backend) for real-time classification and visualization",
      "Conducted robustness evaluation across multiple Bangla news sources",
    ],
    technologies: [
      "Python",
      "Flask",
      "React.js",
      "BiLSTM",
      "FastText",
      "TF-IDF",
      "Transformers",
      "Scikit-learn",
      "NER",
      "Pandas",
    ],
  },
  {
    id: "bangla-braille-cv",
    role: "Undergraduate Researcher – Computer Vision",
    company: "East West University",
    companyUrl: "https://www.ewubd.edu/",
    duration: "2024 - Present",
    mode: "Academic",
    description:
      "Developed a CNN-based system for recognizing Bangla Braille characters from dot-pattern images to support accessibility tools for the visually impaired.",
    achievements: [
      "Manually compiled and labeled a dataset of 30,000 images for 50 Braille characters",
      "Applied data augmentation and labeling via Roboflow",
      "Evaluated multiple models including YOLOv8n, YOLOv8s, and Faster R-CNN",
      "Achieved 94% mAP@50 and 80% mAP@50–95 with YOLOv8s, enabling real-time usage",
      "Highlighted trade-offs between model speed and detection granularity",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "Faster R-CNN",
      "Roboflow",
      "OpenCV",
      "CNN",
      "PyTorch",
      "Image Augmentation",
    ],
  },
];
