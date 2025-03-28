import { forwardRef } from 'react'
import { Code, Zap, Server } from 'lucide-react'

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="badge mb-2">
              Skills
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I've mastered frontend development and automation tools to create exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Expert in creating responsive, user-friendly interfaces with modern frameworks and libraries.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">HTML5</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">CSS3</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">JavaScript</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">React</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Next.js</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Make.com</h3>
                <p className="text-muted-foreground">
                  Creating powerful automated workflows and integrations between various platforms and services.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Workflow Automation</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">API Integration</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Data Processing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Zapier</h3>
                <p className="text-muted-foreground">
                  Building automated connections between apps to streamline workflows and increase productivity.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">App Integration</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Trigger-Action</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Multi-step Zaps</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">n8n</h3>
                <p className="text-muted-foreground">
                  Developing complex workflow automation with this powerful open-source tool for technical users.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Self-hosted</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Custom Functions</span>
                  <span className="px-2 py-1 text-xs rounded-md bg-background border border-border">Advanced Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'
export default Skills