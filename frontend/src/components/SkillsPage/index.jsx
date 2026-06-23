import { useState } from "react";
import "./index.css";
import { skills } from "./skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Core Skills");

  const selectedCategory = skills.find(
    (category) => category.title === activeCategory
  );

  return (
    <div className="skills">
      <h1 className="section-title">
        <span className="line"></span>
        Skills
      </h1>

      <h1 className="section-heading">
        My <span className="highlight">Technologies & Tools</span>
      </h1>

      <p className="skills-description">
        Building impactful solutions through full-stack development, AI, and
        automation.
      </p>

      <div className="skills-select-wrapper">
        <select
          className="skills-select"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {skills.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="skills-card">
        <div className="skill-category">
          <h3>{selectedCategory.title}</h3>

          <div className="skill-tags">
            {selectedCategory.items.map((skill) => {
              const Icon = skill.icon;

              return (
                <div key={skill.name} className="skill-tag">
                  <Icon
                    className="skill-icon"
                    color={skill.iconColor}
                  />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;