import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Portofolio</h1>
      </div>
    </div>
  );
};

export default Navbar;
