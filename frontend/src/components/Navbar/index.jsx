import "./index.css";
import {
  House,
  User,
  Code2,
  BrainCircuit,
  FolderKanban,
  FileText,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: <House size={22} />, name: "Home", id: "home", link: "#home" },
  { icon: <User size={22} />, name: "About", id: "about", link: "#about" },
  { icon: <Code2 size={22} />, name: "Skills", id: "skills", link: "#skills" },
  { icon: <FolderKanban size={22} />, name: "Projects", id: "projects", link: "#projects" },
  { icon: <BrainCircuit size={22} />, name: "DSA", id: "dsa", link: "#dsa" },
  { icon: <FileText size={22} />, name: "Resume", link: "/Medicharla_Adi_FullStack_Developer_Resume.pdf", download: true },
  { icon: <Mail size={22} />, name: "Contact", id: "contact", link: "#contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        
        rootMargin: "-20% 0px -65% 0px", 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const renderLink = (item, isMobile = false) => {
    const isActive = item.id && item.id === activeSection;

    return (
      <a
        href={item.link}
        className={`
          ${isMobile ? "mobile-nav-item" : "icon"}
          ${isActive ? "active" : ""}
        `}
        onClick={() => setIsSidebarOpen(false)}
        {...(item.download
          ? { download: "Aadi_Medicharla_Resume.pdf" }
          : {})}
      >
        {item.icon}
        {isMobile && <span className="mobile-nav-text">{item.name}</span>}
      </a>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar">
        {navItems.map((item) => (
          <div className="nav-item" key={item.name}>
            {renderLink(item)}
            <div className="tooltip">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Mobile Top Bar */}
      <div className="mobile-nav">
        <button
          className="menu-button"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={28} />
        </button>

        {navItems.map((item) => (
          <div key={item.name}>
            {renderLink(item, true)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;