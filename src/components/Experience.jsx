const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "2024 — PRESENT",
      title: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
      link: "https://klaviyo.com"
    },
    {
      id: 2,
      period: "2018 — 2024",
      title: "Lead Engineer",
      company: "Upstatement",
      description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
      technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"],
      link: "https://upstatement.com"
    },
    {
      id: 3,
      period: "JULY — DEC 2017",
      title: "UI Engineer Co-op",
      company: "Apple",
      description: "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
      technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
      link: "https://apple.com"
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

