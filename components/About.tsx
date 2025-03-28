import { forwardRef } from "react";

const About = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <section ref={ref} id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30" {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="badge mb-2">About Me</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to know me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate frontend developer with expertise in automation tools. I specialize in building
              modern, responsive websites and creating efficient workflows that save time and resources.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="bg-background p-6 rounded-xl shadow-sm border border-border/50 transition-all hover:shadow-md">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="bg-primary/10 p-2 rounded-md mr-3">
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
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </span>
                    Education
                  </h3>
                  <p className="text-muted-foreground mt-2">
                  Bachelor's Degree in Information Technology Engineering
                  </p>
                </div>
              </li>
              <li className="bg-background p-6 rounded-xl shadow-sm border border-border/50 transition-all hover:shadow-md">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="bg-primary/10 p-2 rounded-md mr-3">
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
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m9 16 2 2 4-4" />
                      </svg>
                    </span>
                    Experience
                  </h3>
                  <p className="text-muted-foreground mt-2">
                  Experience in frontend development and automation, working with various technologies and frameworks.
                  </p>
                </div>
              </li>
              <li className="bg-background p-6 rounded-xl shadow-sm border border-border/50 transition-all hover:shadow-md">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="bg-primary/10 p-2 rounded-md mr-3">
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
                        className="h-5 w-5 text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </span>
                    Interests
                  </h3>
                  <p className="text-muted-foreground mt-2">
                  When I'm not coding, I enjoy trading, photography, hiking, and exploring new technologies.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-70 blur"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&h=400&auto=format&fit=crop"
                alt="About Dicky Juliansyah"
                width={500}
                height={400}
                className="relative aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
