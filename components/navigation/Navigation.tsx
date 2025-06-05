// File: components/navigation/Navigation.tsx
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(18, 18, 18, 0)", "rgba(18, 18, 18, 0.8)"]
  );
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8]);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "projects", label: "WORK" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0,
      }));

      const currentPosition = window.scrollY + 100;
      const currentSection = sections.reduce((acc, section) => {
        if (currentPosition >= section.offset) {
          return section.id;
        }
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const MobileMenuItem = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <ScrollLink
        to={item.id}
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="block relative"
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300
          ${
            activeSection === item.id
              ? "bg-purple-500/10 text-purple-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <motion.div
            initial={false}
            animate={{
              scale: activeSection === item.id ? 1 : 0,
              opacity: activeSection === item.id ? 1 : 0,
            }}
            className="w-2 h-2 rounded-full bg-purple-400"
          />
          <div className="flex-1">
            <p className="font-display text-lg">{item.label}</p>
            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
              {getSectionDescription(item.id)}
            </p>
          </div>
          <motion.span
            className="text-purple-400 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
          >
            →
          </motion.span>
        </div>
      </ScrollLink>
    </motion.div>
  );

  const getSectionDescription = (id: string) => {
    const descriptions = {
      home: "Welcome & Introduction",
      projects: "Featured Work & Case Studies",
      skills: "Technical Expertise",
      experience: "Professional Journey",
      contact: "Get in Touch",
    };
    return descriptions[id];
  };

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/10"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-display font-bold text-purple-400 z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AS
            </motion.a>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className={`relative px-4 py-2 text-sm tracking-wider cursor-pointer 
                            transition-colors duration-300
                            ${
                              activeSection === item.id
                                ? "text-purple-400"
                                : "text-gray-400 hover:text-white"
                            }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-px bg-purple-400"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </ScrollLink>
              ))}
            </div>

            <motion.button
              className="relative z-50 block md:hidden p-2 rounded-full bg-surface-light 
                       border border-purple-500/10 text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoClose className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-surface-dark/95 backdrop-blur-xl z-40"
          >
            <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <MobileMenuItem key={item.id} item={item} index={index} />
                ))}
              </div>

              {/* Contact and Extra Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-6 rounded-xl bg-surface-light/5 border border-purple-500/10"
              >
                <p className="text-gray-400 text-sm mb-4">Get in touch</p>
                <a
                  href="mailto:ayon7930@gmail.com"
                  className="block text-purple-400 hover:text-purple-500 transition-colors"
                >
                  ayon7930@gmail.com
                </a>
                <a
                  href="https://github.com/AkagamiShnaks"
                  target="_blank"
                  className="block mt-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  GitHub Profile
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
