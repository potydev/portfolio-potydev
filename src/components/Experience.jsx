const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 — PRESENT",
      title: "Freelance Web Developer & Student",
      company: "Self-employed",
      description: "Working as a freelance developer while pursuing studies. Collaborating with various clients to build modern web applications and websites. Specializing in frontend development with focus on user experience and performance optimization.",
      technologies: ["Vue.js", "React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      period: "2024 — PRESENT",
      title: "Collaborative Developer",
      company: "Hexanest.id",
      description: "Collaborating with friends and team members at Hexanest.id on various web development projects. Contributing to frontend development, implementing modern UI/UX designs, and ensuring responsive and accessible web applications.",
      technologies: ["Vue.js", "React.js", "TypeScript", "Supabase", "AWS S3", "GSAP", "Tailwind CSS"],
      link: "https://hexanest.id"
    },
    {
      id: 3,
      period: "2023 — PRESENT",
      title: "Student Developer",
      company: "University Projects",
      description: "Developing various academic and personal projects to enhance skills in modern web technologies. Building full-stack applications, learning new frameworks, and experimenting with different tech stacks to expand knowledge base.",
      technologies: ["Vue.js", "React.js", "Next.js", "TypeScript", "JavaScript", "Supabase", "Node.js"],
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

