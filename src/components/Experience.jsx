const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 — PRESENT",
      title: "Full Stack Developer & Student",
      company: "Self-employed",
      description: "Working as a freelance full stack developer while pursuing studies. Building complete web applications from frontend to backend, including database design, API development, and deployment. Collaborating with various clients to deliver end-to-end solutions.",
      technologies: ["Vue.js", "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "Supabase", "PostgreSQL", "HTML/CSS", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      period: "2024 — PRESENT",
      title: "Full Stack Developer",
      company: "Hexanest.id",
      description: "Collaborating with friends and team members at Hexanest.id on full stack web development projects. Developing both frontend interfaces and backend APIs, managing databases, implementing authentication systems, and ensuring scalable architecture.",
      technologies: ["Vue.js", "React.js", "TypeScript", "Node.js", "Supabase", "AWS S3", "PostgreSQL", "GSAP", "Tailwind CSS", "REST APIs"],
      link: "https://hexanest.id"
    },
    {
      id: 3,
      period: "2024 — PRESENT",
      title: "Full Stack Student Developer",
      company: "University Projects",
      description: "Developing full stack applications for academic and personal projects. Building complete systems with frontend, backend, database, and deployment. Learning modern full stack technologies and best practices for scalable development.",
      technologies: ["Vue.js", "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "Supabase", "PostgreSQL", "Express.js", "MongoDB"],
      link: "#"
    }
  ]

  return (
    <section id="experience" className="mb-16">
      <div className="space-y-12">
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
    </section>
  )
}

export default Experience

