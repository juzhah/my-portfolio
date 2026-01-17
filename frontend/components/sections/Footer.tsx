import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center mr-3 shadow-lg shadow-primary/20">
                <span className="text-xl font-bold text-white">F.</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Fahim Montasir</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Technical Product Manager
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Building scalable digital products and data-driven strategies for
              global markets. Based in Dhaka, working with the world.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
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
                className="lucide lucide-shield-check w-3.5 h-3.5 text-accent-teal"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                SSL Secure &amp; Encrypted
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Sitemap
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
                  href="/#about"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#/career"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Experience
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
              <li>
                <Link
                  href="#/services"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#match"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Profile Match
                </Link>
              </li>
              <li>
                <Link
                  href="#/contact"
                  className="text-gray-500 hover:text-primary transition-colors text-sm flex items-center group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/FahimMIST"
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
                      stroke-width="2"
                      stroke-linecap="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
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
                  href="https://www.linkedin.com/in/fahim-sium/"
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
                      stroke-width="2"
                      stroke-linecap="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
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
                  href="https://www.facebook.com/fahim.montasir.181694"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-facebook h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="ml-3">Facebook</span>
                  </div>
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
                    className="lucide lucide-arrow-up-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:notetofahim@gmail.com"
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
                      stroke-width="2"
                      stroke-linecap="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
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
                  href="https://www.datacamp.com/portfolio/FahimMontasir"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-bar-chart h-5 w-5"
                    >
                      <line x1="12" x2="12" y1="20" y2="10"></line>
                      <line x1="18" x2="18" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="16"></line>
                    </svg>
                    <span className="ml-3">DataCamp</span>
                  </div>
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
                    className="lucide lucide-arrow-up-right w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7363309081899520001"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-newspaper h-5 w-5"
                    >
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M15 18h-5"></path>
                      <path d="M10 6h8v4h-8V6Z"></path>
                    </svg>
                    <span className="ml-3">Newsletter</span>
                  </div>
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
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Fahim Montasir. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
