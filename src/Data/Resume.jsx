import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiVite,
  SiWebpack,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiMongoose,
  SiFigma,
  SiGithubpages,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaReact, FaAws } from "react-icons/fa6";

export const DATA = {
  skills: {
    languages: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    ],
    frameworks: [
      {
        name: "React.js",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-700",
      },
    ],
    runtime: [{ name: "Node.js", icon: SiNodedotjs, color: "text-green-400" }],
    styling: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
      { name: "Material UI", icon: SiMui, color: "text-blue-500" },
    ],
    stateManagement: [
      { name: "Flux", icon: undefined },
      { name: "Redux", icon: SiRedux, color: "text-purple-700" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-700" },
      { name: "zustand", icon: undefined },
    ],
    buildTools: [
      { name: "Vite", icon: SiVite, color: "text-[#8E5CD9]" },
      { name: "Webpack", icon: SiWebpack, color: "text-[#8ED5FA]" },
    ],
    database: [
      { name: "MySQL", icon: SiMysql, color: "text-[#00758F]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
    authentication: [{ name: "JWT", icon: SiJsonwebtokens, color: "text-yellow-600" }],
    hosting: [
      { name: "Vercel", icon: SiVercel, color: "text-gray-800" },
      { name: "Netlify", icon: SiNetlify, color: "text-green-600" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
      { name: "GitHub Pages", icon: SiGithubpages, color: "text-gray-800" },
    ],
    toolsUtilities: [
      { name: "Git", icon: SiGit, color: "text-red-600" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Mongoose", icon: SiMongoose, color: "text-green-600" },
      { name: "Figma", icon: SiFigma, color: "text-purple-600" },
    ],
  },
};
