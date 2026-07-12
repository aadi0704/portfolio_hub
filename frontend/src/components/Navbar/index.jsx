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
X,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
{ icon: <House size={22} />, name: "Home", id: "home", link: "#home" },
{ icon: <User size={22} />, name: "About", id: "about", link: "#about" },
{ icon: <Code2 size={22} />, name: "Skills", id: "skills", link: "#skills" },
{ icon: <FolderKanban size={22} />, name: "Projects", id: "projects", link: "#projects" },
{ icon: <BrainCircuit size={22} />, name: "DSA", id: "dsa", link: "#dsa" },
{
icon: <FileText size={22} />,
name: "Resume",
link: "/Medicharla_Adi_Resume.pdf",
external: true,
},
{ icon: <Mail size={22} />, name: "Contact", id: "contact", link: "#contact" },
];

const Navbar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
const handleEsc = (e) => {
if (e.key === "Escape") {
setIsSidebarOpen(false);
}
};


window.addEventListener("keydown", handleEsc);

return () => {
  window.removeEventListener("keydown", handleEsc);
};


}, []);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const renderLink = (item, isMobile = false) => {
const isActive = item.id === activeSection;


return (
  <a
    href={item.link}
    aria-label={item.name}
    className={`
      ${isMobile ? "mobile-nav-item" : "icon"}
      ${isActive ? "active" : ""}
    `}
    onClick={() => setIsSidebarOpen(false)}
    {...(item.external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {})}
  >
    {item.icon}
    {isMobile && (
      <span className="mobile-nav-text">{item.name}</span>
    )}
  </a>
);


};

return (
<> <div className="sidebar">
{navItems.map((item) => ( <div className="nav-item" key={item.name}>
{renderLink(item)} <div className="tooltip">{item.name}</div> </div>
))} </div>


  <div className="mobile-nav">
    <button
      className="menu-button"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <Menu size={28} />
    </button>
  </div>

  {isSidebarOpen && (
    <div
      className="mobile-overlay"
      onClick={() => setIsSidebarOpen(false)}
    />
  )}

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
