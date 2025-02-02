// images
import temp1 from "/public/images/first_project.png";
import temp2 from "/public/images/second_project.png";
import temp3 from "/public/images/third_template.png";
import weather from "/public/images/Weather-app.png";
import task from "/public/images/Task.png";
import calcu from "/public/images/calculator.png";
import port2 from "/public/images/port2.png";
import soon from "/public/images/soon.webp";
import design from "/public/images/designAgency.jpg";
import eCommerce from "/public/images/e-commerce.jpg";
import exam from "/public/images/exam.jpg";

interface project{
    photo:String,
    head: String,
    para: String,
    repo: String,
    demoLink?: String,
    category?: String,
    icon: String,
 }
export const allProjects :project[]= [
    {
      photo: exam,
      head: "Exam-App",
      para: "User dashboard and exam Interface",
      repo: "https://github.com/heshamabdelazim/exam-app",
      demoLink: "https://exam-hesham.netlify.app/",
      category: "Apps",
      icon: "icon-next-dot-js",
    },
    {
      photo: eCommerce,
      head: "Courses E-Commerce",
      para: "Integrated with Clerk + Strapi to sign-up, choose & delete products ",
      repo: "https://github.com/heshamabdelazim/courses-Ecommerce",
      // demoLink: "https://main--courses-ecommerce-hesham.netlify.app/",
      category: "E-commerce",
      icon: "icon-next-dot-js",
    },
    {
      photo: task,
      head: "Task-Timer",
      para: "Tracks and orgaise my daily tasks.",
      repo: "https://github.com/heshamabdelazim/Task-Timer",
      demoLink: "https://task-timer-hesham.netlify.app/",
      category: "Apps",
      icon: "icon-react",
    },
    {
      photo: calcu,
      head: "Calculator",
      para: "Does Addition, Subtraction, Multiplication & Division",
      repo: "https://github.com/heshamabdelazim/Calculator",
      demoLink: "https://calculator-hesham.netlify.app",
      category: "Apps",
      icon: "icon-javascript",
    },
    {
      photo: temp1,
      head: "Template-one",
      para: "First apply on HTML + CSS",
      repo: "https://github.com/heshamabdelazim/template-1",
      demoLink: "https://template-1-hesham.netlify.app/",
      category: "templates",
      icon: "icon-css3",
    },
    {
      photo: temp2,
      head: "Template-Two",
      para: "Second apply on HTML + CSS",
      repo: "https://github.com/heshamabdelazim/template-2",
      demoLink: "https://template2-hesham.netlify.app",
      category: "templates",
      icon: "icon-css3",
    },
    {
      photo: temp3,
      head: "Template-Three",
      para: "Third apply on HTML + CSS",
      repo: "https://github.com/heshamabdelazim/template-3",
      demoLink: "https://template-3-hesham.netlify.app",
      category: "templates",
      icon: "icon-css3",
    },
    {
      photo: weather,
      head: "Weather-App",
      para: "It gives you the weather of a city with good UI and videos",
      repo: "https://github.com/heshamabdelazim/weather-app",
      demoLink: "https://weather-app-hesham.netlify.app",
      category: "Apps",
      icon: "icon-react",
    },
    {
      photo: port2,
      head: "Personal-Slider",
      para: "Contains 4 Slides",
      repo: "https://github.com/heshamabdelazim/portfolio-2",
      demoLink: "https://portfolio-2-hesham.netlify.app",
      category: "templates",
      icon: "icon-react",
    },
    {
      photo: design,
      head: "Desgin-Agency",
      para: "It contains home page, about page & blogs.",
      repo: "https://github.com/heshamabdelazim/Design-Agency",
      demoLink: "https://desgin-agency-hesham.netlify.app",
      category: "Apps",
      icon: "icon-next-dot-js",
    },
    {
      photo: soon,
      head: "Instegram Clone",
      para: "Comming Soon ",
      // repo: "https://github.com/heshamabdelazim/courses-Ecommerce",
      // demoLink: "https://main--courses-ecommerce-hesham.netlify.app/",
      category: "Apps",
      icon: "icon-next-dot-js",
    },
  ];