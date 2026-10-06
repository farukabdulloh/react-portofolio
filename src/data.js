import HeroImage from "/assets/hero-img.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/mysql.jpg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/express.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/Php.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.jpg";
import Tools10 from "/assets/tools/mongo.png";
import Tools11 from "/assets/tools/nodejs.png";

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
    ket: "Liblary",
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
    nama: "Express",
    ket: "Framework",
    link: 'https://expressjs.com/',
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
    nama: "MongoDb",
    ket: "Database",
    link: 'https://www.mongodb.com/',
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "nodeJs",
    ket: "Runtime",
    link: 'https://nodejs.org/en',
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/News-Portal.png";
import Proyek2 from "/assets/proyek/EMS-MERN.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "News-Portal",
    desk: "A web- based news management application built with Laravel, Filament, and MySQL.It features authentication, article management, categories, and author roles through an intuitive admin dashboard.",
    tools: ["PHP", "Laravel", "MySql", "Filamennt", "Tailwind CSS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Employe Management System",
    desk: "Full-stack Employee Management System built with the MERN Stack. Features include authentication, role-based access, employee CRUD, profile management, attendance, leave management, payslip management, and image upload, with a REST API powered by Node.js, Express.js, and MongoDB.",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API"
    ],
    dad: "300",
  }
];
