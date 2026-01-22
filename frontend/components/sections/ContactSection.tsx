"use client";

import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-semibold mb-2 tracking-wider text-sm uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <br />
              <span className="text-gray-500">Amazing Together</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Am I a good fit for your team or have a project in mind? I'm
              always open to discussing new projects or opportunities to be part
              of your visions.
            </p>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link
              href="mailto:estebanlozadah@gmail.com"
              className="block h-full"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(100,104,240,0.2)]">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Click to send an email
                </p>
                <p className="text-white font-medium break-all">
                  estebanlozadah@gmail.com
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Socials Card (Combines Github/LinkedIn for balance or just Phone) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,104,240,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Me</h3>
              <p className="text-gray-400 text-sm mb-4">
                Mon-Fri from 8am to 5pm
              </p>
              <p className="text-white font-medium">+507 6309-9430</p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,104,240,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400 text-sm mb-4">Based in</p>
              <p className="text-white font-medium">Panama City, Panama</p>
              <span className="inline-block mt-2 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                Open to Relocation
              </span>
            </div>
          </motion.div>
        </div>

        {/* Social Links Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <Link
            href="https://github.com/juzhah"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all group"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
            <span className="text-gray-400 group-hover:text-white font-medium">
              GitHub
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/juan-lozada/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
            <span className="text-gray-400 group-hover:text-white font-medium">
              LinkedIn
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
