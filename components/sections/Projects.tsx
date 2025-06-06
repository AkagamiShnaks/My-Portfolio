// File: components/sections/Projects.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { FaGithub, FaGlobe, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { SplitHeading } from "../common/animations";
import { projects } from "@/data/projects";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    {
      icon: FaGlobe,
      url: project.links.live,
      label: "Visit Site",
      bgColor: "bg-purple-500 hover:border-purple-400",
    },
    {
      icon: FaGithub,
      url: project.links.github,
      label: "View Code",
      bgColor: "bg-violet-500 hover:border-violet-400",
    },
    {
      icon: FaGooglePlay,
      url: project.links.playStore,
      label: "Play Store",
      bgColor: "bg-purple-500 hover:border-purple-400",
    },
    {
      icon: FaAppStore,
      url: project.links.appStore,
      label: "App Store",
      bgColor: "bg-violet-500 hover:border-violet-400",
    },
  ].filter((link) => link.url);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface-light rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Image Overlay */}
        <motion.div
          className="absolute inset-0 bg-surface-dark/80 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-200 text-sm md:text-base">
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-display text-white mb-3 group-hover:text-purple-400 
                     transition-colors duration-300"
        >
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-surface-dark 
                       text-purple-400 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links - Always visible */}
        <div className="flex flex-wrap gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${link.bgColor} 
                       text-surface-dark transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "ai", label: "AI & ML" },
    { id: "web", label: "Web Apps" },
    { id: "Publications", label: "Publications" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-section bg-surface-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-mono text-sm tracking-wider mb-4"
          >
            FEATURED WORK
          </motion.p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Selected Projects
          </SplitHeading>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-start gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                       ${
                         activeCategory === category.id
                           ? "bg-purple-500 text-surface-dark"
                           : "bg-surface-light text-gray-400 hover:text-purple-400"
                       }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
