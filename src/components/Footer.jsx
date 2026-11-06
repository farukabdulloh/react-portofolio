const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#0a0a0c] px-6 py-12 transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-neutral-200">
            Faruk Abdulloh
          </h2>
          <p className="mt-0.5 text-xs text-neutral-500">
            Fullstack Web Developer · Building modern, thoughtful web solutions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mr-1">
            Connect
          </span>
          <a
            href="https://github.com/farukabdulloh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-850 hover:text-white"
          >
            <i className="ri-github-fill text-lg transition-transform duration-200 group-hover:scale-110"></i>
          </a>

          <a
            href="https://www.instagram.com/farrrrrrrrr_22/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-850 hover:text-white"
          >
            <i className="ri-instagram-fill text-lg transition-transform duration-200 group-hover:scale-110"></i>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-850 hover:text-white cursor-pointer"
            title="Back to top"
          >
            <i className="ri-arrow-up-line text-lg"></i>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between border-t border-neutral-900 pt-6 text-xs text-neutral-500 sm:flex-row">
        <p>© 2026 Faruk. All rights reserved.</p>
        <p className="mt-2 font-mono text-[11px] text-neutral-600 sm:mt-0">
          Designed with an editorial minimalist aesthetic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
