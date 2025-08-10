import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

gsap.registerPlugin(ScrollTrigger)

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const sidebarRef = useRef(null)
  const navItemsRef = useRef([])

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/johndoe',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/johndoe',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/johndoe',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:john@example.com',
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for sidebar elements
      gsap.fromTo(sidebarRef.current.querySelector('h1'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
      
      gsap.fromTo(sidebarRef.current.querySelector('h2'), 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      )
      
      gsap.fromTo(sidebarRef.current.querySelector('p'), 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      )

      // Animate navigation items
      gsap.fromTo(navItemsRef.current, 
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          ease: 'power3.out', 
          stagger: 0.1, 
          delay: 0.8 
        }
      )

      // Animate social icons
      gsap.fromTo('.social-icon-sidebar', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power3.out', 
          stagger: 0.1, 
          delay: 1.2 
        }
      )

      // Setup scroll triggers for active section detection
      const sections = ['home', 'about', 'experience', 'projects']
      
      // Home section (top of page)
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: () => {
          const aboutSection = document.querySelector('#about')
          return aboutSection ? aboutSection.offsetTop - 100 : 500
        },
        onEnter: () => setActiveSection('home'),
        onEnterBack: () => setActiveSection('home'),
      })

      // Other sections
      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveSection(item.href.substring(1)),
            onEnterBack: () => setActiveSection(item.href.substring(1)),
          })
        }
      })

    }, sidebarRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sidebarRef} className="fixed left-0 top-0 h-screen w-2/5 flex flex-col justify-between p-12 lg:p-16">
      {/* Header Section */}
      <div>
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
            John Doe
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
            Fullstack Web Developer
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={item.name} ref={el => navItemsRef.current[index] = el}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`group flex items-center text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span 
                    className={`h-px bg-muted-foreground group-hover:bg-foreground transition-all duration-300 mr-4 ${
                      activeSection === item.href.substring(1) 
                        ? 'w-16 bg-foreground' 
                        : 'w-8 group-hover:w-12'
                    }`}
                  ></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col space-y-6">
        {/* Theme Toggle */}
        <div className="flex justify-start">
          <ThemeToggle />
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-sidebar text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                title={social.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

