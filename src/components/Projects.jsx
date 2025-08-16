import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsRef = useRef(null)
  const featuredRef = useRef(null)
  const otherProjectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Featured projects animation
      const featuredProjects = featuredRef.current.querySelectorAll('.featured-project')
      
      featuredProjects.forEach((project, index) => {
        gsap.fromTo(project, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Other projects animation
      const otherProjectCards = otherProjectsRef.current.querySelectorAll('.other-project')
      
      gsap.fromTo(otherProjectCards, 
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: otherProjectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "Lumora E-commerce",
      description: "A modern, responsive e-commerce platform for sustainable beauty products built with Next.js 14, TypeScript, and Supabase. Features complete product catalog with search and filtering, secure authentication, shopping cart with real-time updates, streamlined checkout process, user dashboard, and admin panel. Dedicated to promoting sustainable beauty practices with zero waste packaging and eco-friendly products.",
      technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn/ui", "Zustand", "PostgreSQL"],
      github: "https://github.com/potydev/lumora-ecommerce",
      demo: "https://lumora-ecommerce.vercel.app",
      image: "/images/Lumora e-commerce.png"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for modern teams who need efficient project coordination.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://taskmanager-demo.com",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and real-time data updates.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-demo.com",
      image: "/api/placeholder/600/400"
    }
  ]

  const otherProjects = [
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/johndoe/portfolio",
      demo: "https://johndoe.dev"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support, comment system, and SEO optimization.",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      github: "https://github.com/johndoe/blog-platform",
      demo: "https://blog-demo.com"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with rooms, file sharing, and user authentication.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/johndoe/chat-app",
      demo: "https://chat-demo.com"
    }
  ]

  return (
    <section ref={projectsRef} id="projects" className="mb-16">
      {/* Featured Projects */}
      <div ref={featuredRef} className="space-y-16 mb-20">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="featured-project group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-auto rounded-lg border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:text-left' : 'lg:text-right'}`}>
                <p className="text-primary text-sm font-medium mb-2">Featured Project</p>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:scale-105 transition-transform duration-200"
                  >
                    {project.title}
                    <svg className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                
                <div className="bg-card p-6 rounded-lg shadow-lg mb-4 relative z-10 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium text-muted-foreground font-mono hover:text-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex space-x-4 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    title="View Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    title="View Demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <div ref={otherProjectsRef}>
        <h3 className="text-2xl font-semibold text-foreground mb-8">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="other-project group bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                  </svg>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-medium text-muted-foreground font-mono hover:text-primary transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/potydev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline font-medium hover:scale-105 transition-transform duration-200"
          >
            View More on GitHub
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

