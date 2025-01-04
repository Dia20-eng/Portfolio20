import { Stack } from "@mantine/core"
import Experience from './Components/Experience';
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Info={
    name:"Dia Jain",
    Stack:["Software Engineer","Full Stack Web Developer","Java Developer"],
    bio:"I am a passionate Java software engineer with a strong foundation in both frontend and backend development. My frontend expertise includes HTML, CSS, JavaScript, and React, while I also have experience using Tailwind CSS for designing responsive and modern interfaces. On the backend, I excel at building robust systems and have a deep understanding of Java. I am skilled in data structures and algorithms, enabling me to craft efficient and scalable solutions. Additionally, I have a growing interest in machine learning and enjoy exploring its applications. My goal is to continuously learn and innovate to build impactful software solutions."
}
const sociallinks=[
   {link: "https://github.com/Dia20-eng",
    icon: IconBrandGithub },

  {link: "https://leetcode.com/u/DiaJain/",
   icon: IconBrandLeetcode} ,
  {link: "https://www.instagram.com/dia.jain20/",
   icon: IconBrandInstagram} , 
  { link: "https://www.linkedin.com/in/dia-jain", 
   icon: IconBrandLinkedin },
  
  ];
 const ProjectInfo=[
    {
       title:"Smart Contact Manager",
       desc:"The Smart Contact Manager is a full-stack web application designed to streamline the management of personal and professional contacts. Built with a Java Spring Boot backend, it ensures secure, efficient, and scalable data handling, while the frontend, styled with Tailwind CSS, offers a responsive and user-friendly interface. The application enables users to perform CRUD operations, search and filter contacts, and manage data with role-based authentication for enhanced security. With a focus on clean architecture and RESTful API integration, the system ensures seamless communication between the frontend and backend. The project is tailored to deliver a modern, intuitive, and reliable solution for organizing and accessing contact information effortlessly.",
       image:"scm.jpeg",
        live:false,
    //    image:"",
        technologies:["SpringBoot","TailwindCSS","Thymeleaf","FlowByte"],
        link:"",
        github:"https://github.com/Code-Mars/Ekart-Backend",
         
 },{
    title:"Job Portal",
    desc:"The Job Portal is a modern platform connecting job seekers and employers, built using React with Mantine for a responsive and intuitive interface and Spring Boot with Thymeleaf for a secure and efficient backend. Job seekers can create profiles, upload resumes, search for jobs with filters, and track applications, while employers can post job openings, manage applications, and view candidate profiles. The platform features robust RESTful APIs, role-based authentication, and seamless data management. With its user-friendly design, advanced functionality, and scalable architecture, this job portal streamlines recruitment processes. Future enhancements include machine learning-powered job recommendations and third-party integrations.",
    live:true,
    image:"jobhook.jpeg",
    technologies:["SpringBoot","Mantine","Thymeleaf","React"],
    link:"",
    github:"",


 },
 {
    title:"Job Portal",
    desc:"The Job Portal is a modern platform connecting job seekers and employers, built using React with Mantine for a responsive and intuitive interface and Spring Boot with Thymeleaf for a secure and efficient backend. Job seekers can create profiles, upload resumes, search for jobs with filters, and track applications, while employers can post job openings, manage applications, and view candidate profiles. The platform features robust RESTful APIs, role-based authentication, and seamless data management. With its user-friendly design, advanced functionality, and scalable architecture, this job portal streamlines recruitment processes. Future enhancements include machine learning-powered job recommendations and third-party integrations.",
    live:true,
    technologies:["SpringBoot","Mantine","Thymeleaf","React"],
    link:"",
    image:"jobhook2.png",
    github:"",
 }
]
const SkillInfo = [
   {
     category: "Frontend",
     skills: [
       { name: "HTML", icon: "/Icons/HTML.png" },
       { name: "CSS", icon: "/Icons/CSS.png" },
       { name: "JavaScript", icon: "/Icons/JavaScript.png" },
       { name: "React JS", icon: "/Icons/ReactJS.png" },
       { name: "TailwindCSS", icon: "/Icons/TailwindCSS.png" },
       { name: "BootStrap", icon: "/Icons/Bootstrap.png" },
       
     ],
   },
   {
     category: "Backend",
     skills: [
       { name: "Spring Boot", icon: "/Icons/Springboot.png" },
       { name: "MongoDB", icon: "/Icons/MongoDB.png" },
       { name: "PostgresSQL", icon: "/Icons/PostgresSQL.png" },
       { name: "MySQL", icon: "/Icons/MySQL.png" },
     ],
   },
   {
     category: "Languages",
     skills: [
       { name: "Java", icon: "/Icons/Java.png" },
       { name: "JavaScript", icon: "/Icons/JavaScript.png" },
       { name: "C", icon: "/Icons/C.png" },
       
     ],
   },
   {
     category: "Tools",
     skills: [
       { name: "Git", icon: "/Icons/Git.png" },
       { name: "Github", icon: "/Icons/Github.png" },
       { name: "VScode", icon: "/Icons/VScode.png" },
       { name: "Postman", icon: "/Icons/Postman.png" },

     ],
   },
 ];
 
 const ExperienceInfo=[
  {
    role:"xyz",
    desc:"lorem ipsum" 
  },
  {
    role:"xyz",
    desc:"lorem ipsum" 
  },
  
 ];
 const Slugs=[
  "docker",
  "c",
  "python",
  "typescript",
  "javascript",
  "springboot",
  "tailwindcss",
  "thymeleaf",
  "nodejs",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "postgresql",
  "firebase",
  "MongoDB",
  "git",
  "postman",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];
 

export { Info, ProjectInfo,SkillInfo,ExperienceInfo,Slugs ,sociallinks}