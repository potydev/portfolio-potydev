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
          Currently, I'm a Senior Front-End Engineer at{' '}
          <a 
            href="https://klaviyo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors duration-200"
          >
            Klaviyo
          </a>
          , specializing in accessibility. I contribute to the creation and maintenance 
          of UI components that power Klaviyo's frontend, ensuring our platform meets 
          web accessibility standards and best practices to deliver an inclusive user experience.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In the past, I've had the opportunity to develop software across a variety of 
          settings — from{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            advertising agencies
          </a>
          {' '}and{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            large corporations
          </a>
          {' '}to{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            start-ups
          </a>
          {' '}and{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            small digital product studios
          </a>
          . Additionally, I also released a{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            comprehensive video course
          </a>
          {' '}a few years ago, guiding learners through building a web app with the Spotify API.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In my spare time, I'm usually climbing, reading, hanging out with my wife and 
          two cats, or running around Hyrule searching for{' '}
          <a 
            href="#" 
            className="text-primary hover:underline transition-colors duration-200"
          >
            Korok seeds
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default About

