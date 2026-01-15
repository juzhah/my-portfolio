export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 lg:pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[120px]"></div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative z-20 order-1 lg:order-1">
            <h1 className="sr-only">J. Esteban Lozada - Software Developer</h1>
            <div
              className="text-5xl md:text-6xl xl:text-8xl font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight mb-6 min-h-[120px] lg:min-h-[200px]"
              aria-hidden="true"
            >
              J. Esteban
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Lozada
              </span>
              <span className="animate-pulse text-primary">|</span>
            </div>
            <div
              className="mt-8 lg:mt-16 hidden lg:flex items-center space-x-6 text-xs font-bold tracking-widest text-gray-500 animate-fade-in-up"
              style={{ animationDelay: "2s" }}
            >
              <a
                href="https://www.linkedin.com/in/fahim-sium/"
                className="hover:text-primary transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/FahimMIST"
                className="hover:text-primary transition-colors"
              >
                GITHUB
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 relative flex justify-center lg:justify-center order-2 lg:order-2">
            <div className="absolute top-10 right-10 w-20 h-20 border-[10px] border-dark-card rounded-full z-0 hidden md:block"></div>
            <div className="absolute top-20 -right-10 w-4 h-4 bg-accent-teal rounded-full animate-pulse z-30"></div>
            <div className="absolute bottom-20 -left-10 w-0 h-0 border-l-[15px] border-l-transparent border-t-[25px] border-t-dark-card border-r-[15px] border-r-transparent transform -rotate-45 z-0"></div>
            <div
              className="relative z-10 w-72 h-80 md:w-96 md:h-[500px] transition-transform duration-75 ease-out will-change-transform"
              style={{ transform: "translateY(0px)" }}
            >
              <div className="absolute inset-0 bg-dark-card rounded-t-[100px] rounded-b-[20px] transform rotate-3 border border-white/5"></div>
              <div className="absolute inset-0 w-full h-full rounded-t-[100px] rounded-b-[20px] overflow-hidden">
                <img
                  src="https://drive.google.com/thumbnail?id=12TSvdSyhPhCHovFODqfuRYvPqeMt1ALP&amp;sz=w1000"
                  alt="Esteban Lozada standing confidently in professional attire, representing his role as a Technical Product Manager"
                  width="500"
                  height="600"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 will-change-transform mask-[url(/assets/overlay.png)]"
                  style={{ transform: "scale(1)" }}
                />
              </div>
            </div>
          </div>
          <div
            className="lg:col-span-3 flex flex-col justify-center lg:items-start animate-fade-in-up order-3 lg:order-3"
            style={{ animationDelay: "1s" }}
          >
            <div className="mb-8">
              <span className="inline-block text-primary font-semibold mb-2 tracking-wider text-sm uppercase">
                Software Developer
              </span>
              <div className="w-12 h-0.5 bg-primary mb-6"></div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Open to remote or relocation oportunities
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I transform concepts into digital products. Known for building
                scalable and maintainable SaaS solutions with modern tools.
              </p>
              <div className="space-y-2">
                <p className="text-primary font-medium">+507 6309-9430</p>
                <p className="text-gray-400 text-sm">
                  estebanlozadah@gmail.com
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1V9ADcrPSPR3Wmstu33u_-xhscigUlBqZjkW2vSuQYH8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-lg active:scale-95 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 shadow-lg hover:shadow-[0_0_30px_rgba(255,90,60,0.3)] hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-download w-5 h-5 transition-transform group-hover:-translate-y-1 text-primary group-hover:text-white"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
