// File: components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", to: "home" },
    { label: "Work", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  const FooterLink = ({ to, label }) => (
    <li>
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="block py-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
        activeClass="text-purple-400"
      >
        {label}
      </ScrollLink>
    </li>
  );

  const ContactLink = ({ href, children }) => (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 5 }}
        className="block py-2 text-gray-400 hover:text-purple-400 transition-colors"
      >
        {children}
      </motion.a>
    </li>
  );

  const socialLinks = [
    {
      id: "github",
      url: "https://github.com/AkagamiShnaks",
      icon: FaGithub,
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/ayon-sen-a37b50349",
      icon: FaLinkedin,
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/katakuri_nichan?igsh=dzJ5bnh5aWY3NnVy",
      icon: FaInstagram,
    },
    // X/Twitter link intentionally left blank
  ];

  return (
    <footer className="relative bg-surface-dark py-16 overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px)] 
                   bg-[size:4rem_4rem] opacity-20"
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <motion.a
              href="/"
              className="inline-block text-2xl font-display font-bold text-purple-400 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AS
            </motion.a>
            <p className="text-gray-400 max-w-md">
              Born to solve problems with technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-1">
                {footerLinks.map((link) => (
                  <FooterLink key={link.to} {...link} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-1">
                <ContactLink href="tel:+8801771769898">
                  +880 1771 769898
                </ContactLink>
                <ContactLink href="mailto:ayon7930@gmail.com">
                  ayon7930@gmail.com
                </ContactLink>
                <ContactLink href="https://maps.google.com/?q=Narayanganj,Bangladesh">
                  Narayanganj, Bangladesh
                </ContactLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface-light border border-purple-500/10
                       hover:border-purple-500/30 text-gray-400 hover:text-purple-400 
                       transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear}</span>
            <span className="text-lime-light">Ayon</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" />
            </span>
          </div>

          <div className="flex items-center gap-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
