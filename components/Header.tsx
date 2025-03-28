"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type HeaderProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  aboutRef: React.RefObject<HTMLElement>
  skillsRef: React.RefObject<HTMLElement>
  projectsRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
}

export default function Header({ scrollToSection, aboutRef, skillsRef, projectsRef, contactRef }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', ref: aboutRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef }
  ]

  const handleNavClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        {/* Navbar di tengah untuk desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-8 mx-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer text-sm font-medium"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        {/* Menu mobile */}
        <div className="md:hidden w-full flex justify-end items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-10 w-10 flex items-center justify-center rounded-md border border-input bg-background"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-background z-50">
              <div className="container pt-14 space-y-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-md border border-input bg-background"
                >
                  <X className="h-6 w-6" />
                </button>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.ref)}
                    className="block w-full text-left py-3 text-lg text-muted-foreground hover:text-foreground border-b border-input"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
