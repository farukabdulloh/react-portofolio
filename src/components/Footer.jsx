const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <h1 className="text-xl font-bold">My Social Media</h1>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/farukabdulloh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-blue-800 hover:bg-blue-900 hover:text-white hover:shadow-[0_0_15px_rgba(30,64,175,0.4)]"
          >
            <i className="ri-github-fill text-2xl"></i>
          </a>

          <a
            href="https://www.instagram.com/farrrrrrrrr_22/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-blue-800 hover:bg-blue-900 hover:text-white hover:shadow-[0_0_15px_rgba(30,64,175,0.4)]"
          >
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">© 2026 Faruk. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
