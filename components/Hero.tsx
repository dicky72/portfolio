import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

type HeroProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  projectsRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
}

export default function Hero({ scrollToSection, projectsRef, contactRef }: HeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Foto di atas untuk mobile, setelah itu di samping untuk desktop */}
          <div className="flex items-center justify-center lg:order-2 lg:ml-auto">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-75 blur-lg md:blur-xl"></div>
              <Image
  src="/p.jpg"
  alt="Dicky Juliansyah"
  width={300}
  height={300}
  className="relative aspect-square overflow-hidden rounded-full object-cover border-2 border-primary/20 
  w-[150px] h-[150px] 
  sm:w-[200px] sm:h-[200px] 
  md:w-[250px] md:h-[250px] 
  lg:w-[300px] lg:h-[300px]"
/>

            </div>
          </div>

          {/* Konten teks */}
          <div className="flex flex-col justify-center space-y-4 lg:order-1">
            <div className="space-y-2 text-center lg:text-left">
            <span className="badge mb-2 hidden sm:inline-block">
  Frontend Developer & Automation Expert
</span>
<h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
  Hi, I'm Dicky Juliansyah
</h1>


              <p className="max-w-[600px] text-muted-foreground text-sm md:text-xl mt-2 md:mt-4">
                A passionate frontend developer and automation specialist focused on creating beautiful, functional
                digital experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-2 md:mt-4 justify-center lg:justify-start">
              <button
                className="btn-primary"
                onClick={() => scrollToSection(projectsRef)}
              >
                View Projects
              </button>
              <button 
                className="btn-outline" 
                onClick={() => scrollToSection(contactRef)}
              >
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 mt-3 md:mt-6 justify-center lg:justify-start">
            <Link
  href="https://www.facebook.com/dickyjuliansyah72"
  target="_blank"
  className="text-muted-foreground hover:text-foreground transition-all transform hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
  <span className="sr-only">Facebook</span>
</Link>
<Link
  href="https://linkedin.com"
  target="_blank"
  className="text-muted-foreground hover:text-foreground transition-all transform hover:scale-110"
>
  <Linkedin className="h-6 w-6" />
  <span className="sr-only">LinkedIn</span>
</Link>
<Link
  href="https://www.instagram.com/dickyjuliansyah72/"
  target="_blank"
  className="text-muted-foreground hover:text-foreground transition-all transform hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Z" />
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M16.5 7.5v.001" />
  </svg>
  <span className="sr-only">Instagram</span>
</Link>
<Link
  href="https://twitter.com"
  target="_blank"
  className="text-muted-foreground hover:text-foreground transition-all transform hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
  <span className="sr-only">Twitter</span>
</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}