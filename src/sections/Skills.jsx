function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend & APIs",
      skills: ["Python", "FastAPI", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["SQLite", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;