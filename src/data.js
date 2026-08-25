import HeroImage from "/assets/hero-img.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/mysql.jpg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/Php.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.jpg";
import Tools10 from "/assets/tools/filament.jpg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    link: 'https://code.visualstudio.com/',
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    link: 'https://react.dev/',
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "MySql",
    ket: "Database",
    link: 'https://www.mysql.com/',
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    link: 'https://tailwindcss.com/',
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    link: 'https://getbootstrap.com/',
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    link: 'https://www.javascript.com/',
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "PHP",
    ket: "Language",
    link: 'https://www.php.net/',
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    link: 'https://github.com/',
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    link: 'https://laravel.com/',
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Filament",
    ket: "UI Framework",
    link: 'https://filamentphp.com/',
    dad: "900",
  },
];

import Proyek1 from "/assets/proyek/News-Portal.png";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "News-Portal",
    desk: "A web- based news management application built with Laravel, Filament, and MySQL.It features authentication, article management, categories, and author roles through an intuitive admin dashboard.",
    tools: ["PHP", "Laravel", "MySql", "Filamennt", "Tailwind CSS"],
    dad: "200",
  },
  // {
  //   id: 2,
  //   gambar: Proyek2,
  //   nama: "Company Profile",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
  //   dad: "300",
  // },
  // {
  //   id: 3,
  //   gambar: Proyek3,
  //   nama: "Web Pernikahan 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
  //   dad: "400",
  // },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
