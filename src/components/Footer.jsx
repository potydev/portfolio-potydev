const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 John Doe. Built with React & Tailwind CSS.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

