import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const ctaRef = useRef(null)
  const socialRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([greetingRef.current, nameRef.current, titleRef.current, taglineRef.current, ctaRef.current, socialRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 50
      })

      // Create timeline
      const tl = gsap.timeline({ delay: 0.3 })
      
      tl.to(greetingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to([ctaRef.current, socialRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1
      }, "-=0.4")
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2")

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p ref={greetingRef} className="text-primary font-mono text-sm sm:text-base mb-4">
          Hi, my name is
        </p>
        
        {/* Name */}
        <h1 ref={nameRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Dapot Matthew
        </h1>
        
        {/* Title */}
        <h2 ref={titleRef} className="text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          Full Stack Web Developer
        </h2>
        
        {/* Tagline */}
        <p ref={taglineRef} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web. 
          Passionate about creating beautiful and functional applications that solve real-world problems.
        </p>
        
        {/* CTA Button */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="px-8 py-3 text-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            Lihat Proyek Saya
          </Button>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex gap-4 justify-center mb-12">
          <a 
            href="https://github.com/potydev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform hover:shadow-lg rounded-lg"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/dapot-matthew-065707277/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform hover:shadow-lg rounded-lg"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:dapotmatthew02@gmail.com"
            className="p-3 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform hover:shadow-lg rounded-lg"
          >
            <Mail size={24} />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-muted-foreground mx-auto cursor-pointer hover:text-primary transition-colors"
            onClick={() => {
              const element = document.querySelector('#about')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

