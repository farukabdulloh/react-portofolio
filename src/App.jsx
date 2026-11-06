import DataImage from "./data";
import { listTools, listProyek } from "./data";
import "./asset/index.css";
import cv from "./asset/Faruk-Abdulloh-CV.pdf";
import { useState } from "react";

function App() {
  const [categoryActive, setCategoryActive] = useState("All");

  const proyekFiltered = listProyek.filter(project => {
    if (categoryActive === "All") return true;
    return project.category === categoryActive;
  });

  return (
    <div className="relative overflow-hidden">
      {/* Background Subtle Editorial Grid & Accent */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-60"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            {/* Editorial Kicker */}
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="inline-flex items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1 text-xs text-neutral-300 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              <span className="font-mono uppercase tracking-widest text-[11px] text-neutral-400">
                Fullstack Web Developer
              </span>
            </div>

            {/* Main Title */}
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="mt-6 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl md:text-6xl lg:leading-[1.15]"
            >
              Hi, I'm <span className="font-serif italic font-normal text-white">Faruk Abdulloh</span>
            </h1>

            {/* Bio Paragraph */}
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg"
            >
              I am a Web Developer passionate about building web applications, with a particular interest in backend and
              fullstack development. I am currently expanding my skills in JavaScript, React, Node.js, and other modern
              web technologies.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={cv}
                download="Faruk-Abdulloh-CV.pdf"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] cursor-pointer"
              >
                <span>Download CV</span>
                <i className="ri-file-download-line text-base transition-transform duration-200 group-hover:translate-y-0.5"></i>
              </a>

              <a
                href="#project"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-3 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800/80 hover:text-white cursor-pointer"
              >
                <span>View Projects</span>
                <i className="ri-arrow-down-line text-base transition-transform duration-200 group-hover:translate-y-0.5"></i>
              </a>
            </div>

            {/* Quick Metadata Dossier */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              className="mt-12 flex flex-wrap items-center gap-8 border-t border-neutral-800/70 pt-6 text-xs text-neutral-500"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Focus</span>
                <p className="mt-1 font-medium text-neutral-300">Backend & Fullstack Architecture</p>
              </div>
              <div className="h-6 w-px bg-neutral-800"></div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Education</span>
                <p className="mt-1 font-medium text-neutral-300">Fresh Graduate · 2025</p>
              </div>
            </div>
          </div>

          {/* Hero Portrait Right Side */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative">
              {/* Subtle ambient card backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-neutral-800/30 blur-xl"></div>

              {/* Editorial Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-neutral-800/90 bg-neutral-900/40 p-2.5 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl bg-neutral-950">
                  <img
                    src={DataImage.HeroImage}
                    alt="Faruk Abdulloh"
                    className="h-80 w-80 object-cover grayscale-25 contrast-105 transition-all duration-700 hover:grayscale-0 sm:h-96 sm:w-96"
                  />
                  {/* Subtle Gradient vignette on image */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Framing Badge / Caption */}
                <div className="mt-3 flex items-center justify-between px-2 pb-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-neutral-400"></span>
                    <span className="font-mono text-[11px] tracking-wide text-neutral-400">Faruk Abdulloh</span>
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500">PORTFOLIO '26</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="rounded-3xl border border-neutral-800/90 bg-neutral-900/40 p-8 sm:p-12 md:p-16 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-400">
                ( 01 ) About Me
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
                Get to know me
              </h2>
              <p className="mt-4 text-sm text-neutral-400">
                Building functional, reliable, and user-centric web applications through clean code.
              </p>

              {/* Profile Card Mini */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
                <img
                  src={DataImage.HeroImage}
                  alt="Faruk"
                  className="h-14 w-14 rounded-xl object-cover border border-neutral-700/60"
                />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-200">Faruk Abdulloh</h3>
                  <p className="text-xs text-neutral-400">Fullstack Web Developer</p>
                </div>
              </div>

              {/* Statistics Showcase */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
                  <div className="text-3xl font-bold tracking-tight text-neutral-100">
                    2<span className="text-neutral-400">+</span>
                  </div>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-500">Projects Completed</p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
                  <div className="text-3xl font-bold tracking-tight text-neutral-100">2025</div>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-500">Fresh Graduate</p>
                </div>
              </div>
            </div>

            {/* Right Story & Details */}
            <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
                Hello! I'm Faruk, a passionate Web Developer who enjoys building functional and user-friendly web
                applications. I have a strong interest in backend and fullstack development, where I can solve problems
                through clean code and efficient application logic.
              </p>

              <p className="text-base leading-relaxed text-neutral-400">
                Currently, I'm expanding my skills in JavaScript, React, Node.js, and modern web technologies while
                continuously learning best practices in software development. My goal is to create meaningful digital
                products and grow as a professional Fullstack Developer.
              </p>

              <div className="border-t border-neutral-800/80 pt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400">Engineering Philosophy</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-4">
                    <p className="text-xs font-semibold text-neutral-200">Clean Architecture</p>
                    <p className="mt-1 text-xs text-neutral-400 leading-normal">
                      Writing maintainable, modular, and readable application logic.
                    </p>
                  </div>
                  <div className="rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-4">
                    <p className="text-xs font-semibold text-neutral-200">Modern Tooling</p>
                    <p className="mt-1 text-xs text-neutral-400 leading-normal">
                      Leveraging the modern JavaScript & PHP ecosystem to deliver solid digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS & TECH SECTION ================= */}
      <section id="tools" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span
            data-aos="fade-up"
            data-aos-duration="700"
            className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-400"
          >
            ( 02 ) Stack & Technologies
          </span>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl"
          >
            Tools I've Used
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base"
          >
            Here are some of the tools, technologies, and programming languages I have used.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listTools.map(tool => (
            <a
              key={tool.id}
              href={tool.link}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={tool.dad}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-850 cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 p-2.5 transition-colors group-hover:border-neutral-700">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="h-full w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold tracking-tight text-neutral-200 group-hover:text-white">
                    {tool.nama}
                  </h4>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">{tool.ket}</p>
                </div>
              </div>

              <i className="ri-arrow-right-up-line text-sm text-neutral-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-neutral-200"></i>
            </a>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="project" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span
              data-aos="fade-up"
              data-aos-duration="700"
              className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-400"
            >
              ( 03 ) Selected Works
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl"
            >
              Projects
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base"
            >
              Here are some of the projects I have worked on.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            className="flex flex-wrap items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 p-1.5 backdrop-blur-sm"
          >
            {["All", "Web", "Mobile"].map(category => {
              const label =
                category === "All" ? "All Projects" : category === "Web" ? "Web Development" : "Mobile Applications";
              const isActive = categoryActive === category;

              return (
                <button
                  key={category}
                  onClick={() => setCategoryActive(category)}
                  type="button"
                  className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border border-neutral-700 bg-neutral-200 text-neutral-900 shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyekFiltered.map(project => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={project.dad}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl"
            >
              <div>
                {/* Project Image Container with Consistent Aspect Ratio */}
                <div
                  className={`relative w-full overflow-hidden border-b border-neutral-800 bg-neutral-950 ${
                    project.category === "Mobile" ? "aspect-9/16 max-w-70 mx-auto" : "aspect-16/10"
                  }`}
                >
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className={`h-full w-full transition-transform duration-500 ease-out ${
                      project.category === "Mobile" ? "object-contain" : "object-cover group-hover:scale-105"
                    }`}
                  />
                  {/* Subtle Category Badge Overlay */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-neutral-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-100 group-hover:text-white">
                    {project.nama}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-400 line-clamp-4">{project.desk}</p>

                  {/* Tool Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="rounded-md border border-neutral-800 bg-neutral-950/70 px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <div className="flex flex-col gap-2.5 border-t border-neutral-800/80 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-2.5 text-xs font-semibold text-neutral-950 transition-all duration-200 hover:bg-white cursor-pointer"
                    >
                      <span>Live Preview</span>
                      <i className="ri-arrow-right-up-line text-sm transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"></i>
                    </a>
                  )}

                  {project.credentialFile && (
                    <button
                      type="button"
                      onClick={async () => {
                        const fileUrl = `${import.meta.env.BASE_URL}${project.credentialFile}`;
                        const response = await fetch(fileUrl);
                        const blob = await response.blob();

                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement("a");

                        link.href = url;
                        link.download = project.credentialFile.split("/").pop();

                        document.body.appendChild(link);
                        link.click();

                        link.remove();
                        window.URL.revokeObjectURL(url);
                      }}
                      className="group/cred flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-2.5 text-xs font-medium text-neutral-300 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-850 hover:text-white cursor-pointer"
                    >
                      <i className="ri-key-2-line text-xs text-neutral-400 group-hover/cred:text-neutral-200"></i>
                      <span>Download Credentials</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        data-aos="fade-up"
        data-aos-duration="800"
        className="relative mx-auto max-w-6xl px-6 py-20 md:py-28"
      >
        <div className="rounded-3xl border border-neutral-800/90 bg-neutral-900/40 p-8 sm:p-12 md:p-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Contact Left Column */}
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-400">
                ( 04 ) Contact
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
                Let's Work Together
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Whether you have an upcoming project, are looking to build a fullstack application, or want to discuss
                professional opportunities, I'd love to hear from you.
              </p>

              {/* Direct Details */}
              <div className="mt-8 space-y-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Direct Email</span>
                  <a
                    href="mailto:farukabdulooh@gmail.com"
                    className="mt-1 block text-sm font-medium text-neutral-200 transition-colors hover:text-white"
                  >
                    farukabdulooh@gmail.com
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Location & Availability
                  </span>
                  <p className="mt-1 text-sm text-neutral-300">Indonesia · Available for Remote & Hybrid Roles</p>
                </div>
              </div>
            </div>

            {/* Contact Form Right Column */}
            <div className="lg:col-span-7">
              <form
                action="https://formsubmit.co/farukabdulooh@gmail.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 transition-all duration-200 focus:border-neutral-500 focus:bg-neutral-950 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 transition-all duration-200 focus:border-neutral-500 focus:bg-neutral-950 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 transition-all duration-200 focus:border-neutral-500 focus:bg-neutral-950 focus:outline-none"
                  ></textarea>
                </div>

                {/* Attachment */}
                <div>
                  <label
                    htmlFor="attachment"
                    className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-neutral-400"
                  >
                    <span>Attachment</span>
                    <span className="text-[11px] lowercase text-neutral-400">(optional)</span>
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="w-full cursor-pointer rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 text-xs text-neutral-400 transition-colors file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-neutral-800 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-neutral-200 hover:file:bg-neutral-700"
                  />
                  <p className="mt-1.5 font-mono text-[11px] text-neutral-400">
                    PDF, Word, or PowerPoint formats accepted.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <i className="ri-send-plane-fill text-sm transition-transform duration-200 group-hover:translate-x-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
