const Contact = () => {
  return (
    <section id="contact" className="mb-16">
      <div className="max-w-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Although I'm not currently looking for any new opportunities, my inbox is 
            always open. Whether you have a question or just want to say hi, I'll 
            try my best to get back to you!
          </p>
          
          <div className="pt-4">
            <a 
              href="mailto:john@example.com"
              className="inline-flex items-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg font-medium"
            >
              Say Hello
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

