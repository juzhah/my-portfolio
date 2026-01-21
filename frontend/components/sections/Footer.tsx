import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative border w-12 h-12 rounded-lg bg-primary/30 text-2xl font-bold text-white tracking-tighter p-2 flex justify-center align-middle mr-3 shadow-lg shadow-primary/20">
                E
                <Image
                  src={Logo}
                  alt="Esteban Lozada's portfolio"
                  width={24}
                  height={24}
                  className="absolute -right-2 -bottom-2"
                ></Image>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  J. Esteban Lozada
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              I transform concepts into digital products. Known for building
              scalable and maintainable SaaS solutions with modern tools.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <div className="rounded-full h-2 w-2 animate-pulse bg-green-600"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Open to Work
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#/skills"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#/works"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Contact Me
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/juzhah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-github h-5 w-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span className="ml-3">GitHub</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/juan-lozada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-linkedin h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="ml-3">LinkedIn</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:estebanlozadah@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-mail h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="ml-3">Email</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 J. Esteban Lozada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
