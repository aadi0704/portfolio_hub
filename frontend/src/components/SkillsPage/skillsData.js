import {
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaRobot,
  FaNetworkWired,
  FaProjectDiagram,
  FaServer,
  FaCode,
  FaLink,
  FaCogs,
  FaPython,
  FaChartBar,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiExpress,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiMongodb,
  SiSqlite,
  SiOpenai,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skills = [
    {
  title: "Core Skills",
  items: [
    { name: "Java", icon: FaJava, iconColor: "#f89820" },
    { name: "React", icon: SiReact, iconColor: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, iconColor: "#339933" },
    { name: "Express.js", icon: SiExpress, iconColor: "#ffffff" },
    { name: "Spring Boot", icon: SiSpringboot, iconColor: "#6DB33F" },
    { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
    { name: "SQLite", icon: SiSqlite, iconColor: "#003B57" },
    { name: "Git", icon: FaGitAlt, iconColor: "#F05032" },
    { name: "GitHub", icon: FaGithub, iconColor: "#ffffff" },
    { name: "DSA", icon: FaCode, iconColor: "#8B5CF6" }
  ]
},
  {
    title: "Backend",
    items: [
      { name: "Java", icon: FaJava, iconColor: "#f89820" },
      { name: "Spring Boot", icon: SiSpringboot, iconColor: "#6DB33F" },
      { name: "Node.js", icon: FaNodeJs, iconColor: "#339933" },
      { name: "Express.js", icon: SiExpress, iconColor: "#ffffff" },
    ]
  },

  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, iconColor: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, iconColor: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, iconColor: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, iconColor: "#7952B3" }
    ]
  },

  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
      { name: "SQLite", icon: SiSqlite, iconColor: "#003B57" }
    ]
  },

  {
    title: "AI & Automation",
    items: [
      { name: "LLMs", icon: SiOpenai, iconColor: "#10A37F" },
      { name: "RAG", icon: FaDatabase, iconColor: "#8B5CF6" },
      { name: "AI Agents", icon: FaRobot, iconColor: "#F97316" },
      { name: "MCP", icon: FaProjectDiagram, iconColor: "#06B6D4" },
      { name: "n8n", icon: FaCogs, iconColor: "#EF4444" },
      { name: "Automation Workflows", icon: FaCogs, iconColor: "#F59E0B" }
    ]
  },

  {
    title: "Data Analytics",
    items: [
      { name: "Python", icon: FaPython, iconColor: "#3776AB" },
      { name: "Data Analytics", icon: FaChartBar, iconColor: "#22C55E" }
    ]
  },

  {
    title: "CS Fundamentals",
    items: [
      { name: "DSA", icon: FaCode, iconColor: "#8B5CF6" },
      { name: "OOP", icon: FaJava, iconColor: "#f89820" },
      { name: "DBMS", icon: FaDatabase, iconColor: "#3B82F6" },
      { name: "Operating Systems", icon: FaServer, iconColor: "#F43F5E" },
      { name: "Computer Networks", icon: FaNetworkWired, iconColor: "#06B6D4" },
      { name: "System Design", icon: FaProjectDiagram, iconColor: "#A855F7" }
    ]
  },

  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, iconColor: "#F05032" },
      { name: "GitHub", icon: FaGithub, iconColor: "#ffffff" },
      { name: "Postman", icon: SiPostman, iconColor: "#FF6C37" },
      { name: "ngrok", icon: FaLink, iconColor: "#38BDF8" },
      { name: "VS Code", icon: VscVscode, iconColor: "#007ACC" }
    ]
  }
];
