import { useEffect, useState } from "react";
import AOS from "aos";
import "./Preloader.css";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      // Beritahu AOS bahwa layout halaman sudah siap
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader">
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
    </div>
  );
};

export default Preloader;
