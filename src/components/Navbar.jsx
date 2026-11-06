import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 200) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-800/80 bg-[#0c0d0f]/85 backdrop-blur-md py-4"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/90 font-mono text-xs font-semibold text-neutral-200 transition-colors group-hover:border-neutral-600">
            FA
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-neutral-100 group-hover:text-white">
              Faruk Abdulloh
            </span>
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
              Fullstack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-neutral-800/80 bg-neutral-900/60 p-1 backdrop-blur-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 transition-all duration-200 hover:text-white hover:bg-neutral-800/80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Status */}
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] tracking-wide text-neutral-300">Available</span>
          </div>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-700 bg-neutral-200 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 transition-all duration-200 hover:bg-white hover:border-neutral-500"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300 md:hidden hover:border-neutral-700 cursor-pointer"
        >
          <i className={open ? "ri-close-line text-lg" : "ri-menu-line text-lg"}></i>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="border-b border-neutral-800 bg-[#0c0d0f]/95 px-6 py-4 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">Status: Available</span>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-900"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
