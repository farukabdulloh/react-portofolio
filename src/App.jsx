import DataImage from "./data";
import { listTools, listProyek } from "./data";
import "./asset/index.css";

function App() {
  return (
    // hero
    <div>
      <div className="hero mx-auto max-w-7xl grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="order-1">
            <p className="mb-2 text-blue-900 font-semibold">Fullstack Web Developer</p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">Hi, I'm Faruk Abdulloh 👋</h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-500">
              I am a Web Developer passionate about building web applications, with a particular interest in backend and
              fullstack development. I am currently expanding my skills in JavaScript, React, Node.js, and other modern
              web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Faruk-Abdulloh-CV.pdf"
                download="Faruk-Abdulloh-CV.pdf"
                className="rounded-xl bg-blue-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(30,64,175,0.45)]"
              >
                Download CV <i className="ri-file-download-line ri-lg"></i>
              </a>
              <a
                href="#project"
                className="rounded-xl border border-blue-900 px-6 py-3 font-medium text-blue-900 transition-all duration-300 hover:bg-blue-900 hover:text-white hover:shadow-[0_0_20px_rgba(30,64,175,0.35)]"
              >
                View Projects <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl"></div>

            {/* Image */}
            <img
              src={DataImage.HeroImage}
              alt="Faruk Abdulloh"
              className="
        relative z-10
        w-64 sm:w-72 md:w-80 lg:w-96
        aspect-square
        object-cover
        rounded-full
        border-4 border-blue-800/50
        shadow-[0_0_40px_rgba(37,99,235,0.35)]
        animate__animated animate__fadeInUp animate__delay-4s
      "
            />
          </div>
        </div>
      </div>

      {/* about */}
      <div id="about" className="mt-32 px-6 ">
        <div
          className="mx-auto w-full max-w-5xl rounded-3xl bg-zinc-800 p-8 md:p-12 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-blue-900 font-semibold">About Me</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Get to know me</h2>

          <p className="mt-6 text-base leading-8 text-gray-300">
            Hello! I'm Faruk, a passionate Web Developer who enjoys building functional and user-friendly web
            applications. I have a strong interest in backend and fullstack development, where I can solve problems
            through clean code and efficient application logic.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300">
            Currently, I'm expanding my skills in JavaScript, React, Node.js, and modern web technologies while
            continuously learning best practices in software development. My goal is to create meaningful digital
            products and grow as a professional Fullstack Developer.
          </p>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-zinc-700 pt-8">
            <div className="flex items-center gap-4">
              <img
                src={DataImage.HeroImage}
                alt="Faruk"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />

              <div>
                <h3 className="font-semibold text-white">Faruk Abdulloh</h3>
                <p className="text-sm text-gray-400">Fullstack Web Developer</p>
              </div>
            </div>

            <div className="flex gap-10">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  2<span className="text-blue-500">+</span>
                </h1>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">2025</h1>
                <p className="text-sm text-gray-400">Fresh Graduate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div id="tools" className="mt-32 px-6">
          <div className="mx-auto max-w-6xl">
            <h1
              className="mb-4 text-4xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-delay="300"
            >
              Tools I've Used
            </h1>

            <p
              className="max-w-2xl text-base leading-7 text-gray-500"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Here are some of the tools, technologies, and programming languages I have used.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {listTools.map(tool => (
                <a
                  key={tool.id}
                  href={tool.link}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-800 hover:shadow-[0_0_20px_rgba(30,64,175,0.2)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-zinc-800 p-2">
                    <img src={tool.gambar} alt={tool.nama} className="h-full w-full object-contain" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white">{tool.nama}</h4>

                    <p className="text-sm text-gray-500">{tool.ket}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* project */}
        <div id="project" className="mt-32 px-6  ">
          <div className="mx-auto max-w-6xl">
            <h1
              className="text-center text-4xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Projects
            </h1>

            <p
              className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-500"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Here are some of the projects I have worked on.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {listProyek.map(project => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={project.dad}
                  className="group overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-800 hover:shadow-[0_0_25px_rgba(30,64,175,0.2)]"
                >
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="p-5">
                    <h2 className="text-2xl font-bold text-white">{project.nama}</h2>

                    <p className="mt-3 text-sm leading-7 text-gray-400">{project.desk}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* contact */}
        <div
          id="contact"
          className="mb-32 px-6 py-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1 className="text-center text-4xl font-bold">Contact</h1>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-500">Let's Work Together</p>

          <form
            action="https://formsubmit.co/farukabdulooh@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="mx-auto mt-12 max-w-2xl "
          >
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="md:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="attachment" className="mb-2 block text-sm font-medium text-gray-300">
                    Attachment <span className="text-gray-500">(optional)</span>
                  </label>

                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="w-full cursor-pointer rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-gray-400 file:mr-4 file:rounded-md file:border-0 file:bg-blue-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-800"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    PDF, Word, or PowerPoint. Maximum file size should be kept reasonable.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(30,64,175,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
