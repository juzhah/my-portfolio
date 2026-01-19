"use server";

import { Mail, ShieldCheck, Send, Info } from "lucide-react";
import Link from "next/link";

async function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#0f0f0f] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let&apos;s work <br />
              together.
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed mb-12">
              I&apos;m currently available for product roles and consulting. If
              you need a Product Manager who understands both the code and the
              customer, get in touch.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Email</h4>
                  <Link
                    href="mailto:juanlozadahe@gmail.com"
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    notetofahim@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">
                    Response Time
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-card p-10 border border-white/5 relative min-h-[400px] flex flex-col justify-center overflow-hidden shadow-2xl">
            <form className="space-y-6 transition-all duration-300 opacity-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                    Full Name
                  </label>
                  <input
                    /* required="" */
                    name="name"
                    type="text"
                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-4 text-white focus:border-primary focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                    Work Email
                  </label>
                  <input
                    /* required="" */
                    name="email"
                    type="email"
                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-4 text-white focus:border-primary focus:outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                  Project Inquiry
                </label>
                <textarea
                  /* required="" */
                  name="message"
                  /* rows="4" */
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-4 text-white focus:border-primary focus:outline-none transition-all resize-none"
                  placeholder="I'm looking for a PM to lead our next sprint..."
                ></textarea>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="group relative bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-dark-bg hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all duration-300 mt-4 overflow-hidden disabled:bg-gray-800 disabled:text-gray-500 rounded-lg"
                >
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    Initialize Contact
                    <Send className="lucide lucide-send w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Info />
                    Secure Transmission
                  </div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck />
                    End-to-end Encrypted
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
