const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 — PRESENT",
      title: "Freelance Web Developer",
      company: "Vendor Lepas",
      description: "Mengembangkan website dan aplikasi web untuk berbagai klien sebagai vendor lepas. Fokus pada pembuatan website portfolio, landing page, dan aplikasi web sederhana menggunakan teknologi modern.",
      technologies: ["React", "JavaScript", "HTML & CSS", "Vite", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      period: "2024 — PRESENT",
      title: "Mahasiswa & Developer",
      company: "Hexanest.id Community",
      description: "Bergabung dengan komunitas developer Hexanest.id untuk belajar dan berkolaborasi dalam pengembangan web. Aktif mengikuti workshop, sharing session, dan project collaboration dengan teman-teman developer.",
      technologies: ["Web Development", "Collaboration", "Learning", "Community"],
      link: "https://hexanest.id"
    },
    {
      id: 3,
      period: "2024 — PRESENT",
      title: "Portfolio Development",
      company: "Personal Project",
      description: "Mengembangkan portfolio website pribadi menggunakan React dan Vite. Website ini menampilkan skill, project, dan experience dalam pengembangan web.",
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design", "Modern UI/UX"],
      link: "https://github.com/potydev/portfolio-potydev"
    }
  ]

  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Tools & Build Tools",
      items: ["Vite", "Git", "GitHub", "VS Code", "npm/pnpm"]
    },
    {
      category: "Learning & Growth",
      items: ["Web Development", "UI/UX Design", "Modern Frameworks", "Best Practices"]
    }
  ]

  return (
    <section id="experience" className="mb-16">
      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Experience & Learning Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="group relative">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
                  {/* Period */}
                  <div className="lg:col-span-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {exp.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        {exp.title} · {exp.company}
                        <svg className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path Note */}
        <div className="bg-muted/50 p-6 rounded-lg border">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Learning Journey</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sebagai mahasiswa yang baru memulai karir di dunia web development, saya aktif belajar dan mengembangkan skill melalui project pribadi, 
                kolaborasi dengan komunitas Hexanest.id, dan pengalaman freelance. Portfolio ini adalah bukti dari perjalanan belajar dan pertumbuhan skill saya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

