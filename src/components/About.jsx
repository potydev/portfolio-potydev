import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = contentRef.current.querySelectorAll('p')
      
      gsap.fromTo(paragraphs, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={aboutRef} id="about" className="mb-16">
      <div ref={contentRef} className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I'm a developer passionate about crafting accessible, pixel-perfect user 
          interfaces that blend thoughtful design with robust engineering. My favorite 
          work lies at the intersection of design and development, creating experiences 
          that not only look great but are meticulously built for performance and usability.
        </p>
        
        <p className="text-muted-foreground leading-relaxed">
          Currently, I'm a student at{' '}
          <a 
            href="https://politekniknegericilacap.ac.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors duration-200"
          >
            Politeknik Negeri Cilacap
          </a>
          , majoring in Software Engineering Technology. I love coding and have completed several projects before.
          , specializing in accessibility. I contribute to the creation and maintenance 
          of UI components that power Klaviyo's frontend, ensuring our platform meets 
          web accessibility standards and best practices to deliver an inclusive user experience.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Previously, I interned at a government institution, the Ministry of Trade, where I worked as a Frontend developer. One of the projects I worked on was a website for attendance tracking.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In my spare time, I enjoy hiking, swimming, trail running, and various other sports activities.
        </p>
      </div>
    </section>
  )
}

export default About

