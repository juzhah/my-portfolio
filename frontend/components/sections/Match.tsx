function Match() {
  return (
    <section
      id="match"
      className="py-24 border-t border-white/5 relative overflow-hidden bg-[#0c0c0c]"
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-teal/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
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
              className="lucide lucide-sparkles w-3 h-3"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
            AI Powered Recruitment
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Am I a fit for your role?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Paste your job description below. My AI agent will analyze my
            portfolio against your requirements and provide an honest
            compatibility score.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-dark-card border border-white/10 rounded-2xl p-1 shadow-2xl relative group h-full flex flex-col transition-all hover:border-white/20">
              <div className="bg-[#111] rounded-t-xl px-4 py-3 border-b border-white/5 flex items-center gap-2">
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
                  className="lucide lucide-briefcase w-4 h-4 text-gray-500"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Job Description
                </span>
              </div>
              <textarea
                placeholder="Paste the full Job Description here..."
                className="w-full flex-grow min-h-[300px] bg-[#111] text-gray-300 p-6 focus:bg-[#151515] outline-none resize-none transition-all placeholder:text-gray-700 font-mono text-sm leading-relaxed"
              ></textarea>
              <div className="p-3 flex justify-between items-center bg-[#111] rounded-b-xl border-t border-white/5">
                <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider flex items-center gap-1 transition-all px-3 py-2 rounded hover:bg-white/5 opacity-0 invisible">
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
                    className="lucide lucide-rotate-ccw w-3 h-3"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                  </svg>
                  Reset
                </button>
                <button
                  /* disabled="" */
                  className="bg-primary text-white hover:bg-white hover:text-dark-bg disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/20"
                >
                  Analyze Match
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
                    className="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-full min-h-[350px]">
            <div className="h-full flex flex-col items-center justify-center text-center py-20 lg:py-0 opacity-40 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
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
                className="lucide lucide-scan-search w-16 h-16 text-gray-500 mb-6"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="m16 16-1.9-1.9"></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                Ready to Analyze
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto text-sm">
                Waiting for JD input...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Match;
