import { forwardRef } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="badge mb-2">
              Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my latest projects and collaborations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="card group">
            <div className="overflow-hidden relative">
              <img
                src="masjid.png"
                alt="Mosque Website"
                width={400}
                height={300}
                className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex gap-2 justify-center">
                    <Link
                      href="https://assalam-omega.vercel.app/"
                      target="_blank"
                      className="text-white bg-primary/90 hover:bg-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-background to-muted/50">
              <h3 className="text-xl font-bold">Mosque Website</h3>
              <p className="text-muted-foreground mt-2 line-clamp-3">
                A comprehensive website for a mosque featuring prayer times, event calendar, donation system, and
                community resources.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Next.js</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Tailwind CSS</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Make.com</span>
              </div>
            </div>
          </div>
          
          <div className="card group">
            <div className="overflow-hidden relative">
              <img
                src="outfit.png"
                alt="Millennial Outfit E-commerce"
                width={400}
                height={300}
                className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex gap-2 justify-center">
                    <Link
                      href="https://milenial-three.vercel.app/"
                      target="_blank"
                      className="text-white bg-primary/90 hover:bg-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-background to-muted/50">
              <h3 className="text-xl font-bold">Millennial Outfit E-commerce</h3>
              <p className="text-muted-foreground mt-2 line-clamp-3">
                A trendy e-commerce platform targeting millennial fashion enthusiasts with modern UI, personalized
                recommendations, and seamless checkout.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Next.js</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Tailwind CSS</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Make.com</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Shopee</span>
              </div>
            </div>
          </div>
          
          <div className="card group">
            <div className="overflow-hidden relative">
              <img
                src="barber.png"
                alt="The Barberhood E-commerce"
                width={400}
                height={300}
                className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex gap-2 justify-center">
                    <Link
                      href="https://barber-nine-zeta.vercel.app/"
                      target="_blank"
                      className="text-white bg-primary/90 hover:bg-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-background to-muted/50">
              <h3 className="text-xl font-bold">The Barberhood E-commerce</h3>
              <p className="text-muted-foreground mt-2 line-clamp-3">
                A premium e-commerce platform for barber supplies and men's grooming products with appointment
                booking and loyalty program.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">React</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">n8n</span>
                <span className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-2 py-1 text-xs rounded-md">Zapier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
export default Projects