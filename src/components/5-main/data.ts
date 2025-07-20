interface project {
  id: number;
  photo: String;
  head: String;
  para: String;
  repo?: String;
  demoLink?: String;
  category?: String;
  icon: String;
  video?: String;
}
let projectId = 0;
export const allProjects: project[] = [
  {
    id: ++projectId,
    photo: "/images/exam.jpg",
    head: "Exam-App",
    para: "User dashboard and exam Interface",
    repo: "https://github.com/heshamabdelazim/exam-app",
    demoLink: "https://exam-hesham.netlify.app/",
    category: "Apps",
    icon: "icon-next-dot-js",
    video: "images/Exam.mp4",
  },
  {
    id: ++projectId,
    photo: "/images/e-commerce.jpg",
    head: "Courses E-Commerce",
    para: "Integrated with Clerk + Strapi to sign-up, choose & delete products ",
    repo: "https://github.com/heshamabdelazim/courses-Ecommerce",
    // demoLink: "https://main--courses-ecommerce-hesham.netlify.app/",
    category: "Ecommerce",
    icon: "icon-next-dot-js",
    // video: "/images/e",
  },
  {
    id: ++projectId,
    photo: "/images/Task.png",
    head: "Task-Timer",
    para: "Tracks and orgaise my daily tasks.",
    repo: "https://github.com/heshamabdelazim/Task-Timer",
    demoLink: "https://task-timer-hesham.netlify.app/",
    category: "Apps",
    icon: "icon-react",
    video: "/images/Task-Timer.mp4",
  },
  // {
  //   id: ++projectId,
  //   photo: "/images/calculator.png",
  //   head: "Calculator",
  //   para: "Does Addition, Subtraction, Multiplication & Division",
  //   repo: "https://github.com/heshamabdelazim/Calculator",
  //   demoLink: "https://calculator-hesham.netlify.app",
  //   category: "Apps",
  //   icon: "icon-javascript",
  // },
  {
    id: ++projectId,
    photo: "/images/Weather-app.png",
    head: "Weather-App",
    para: "It gives you the weather of a city with good UI and videos",
    repo: "https://github.com/heshamabdelazim/weather-app",
    demoLink: "https://weather-app-hesham.netlify.app",
    category: "Apps",
    icon: "icon-react",
    video: "/images/Weather.mp4",
  },
  {
    id: ++projectId,
    photo: "/images/designAgency.jpg",
    head: "Desgin-Agency",
    para: "It contains home page, about page & blogs.",
    repo: "https://github.com/heshamabdelazim/Design-Agency",
    demoLink: "https://desgin-agency-hesham.netlify.app",
    category: "templates",
    icon: "icon-next-dot-js",
    video: "/images/Designagency.mp4",
  },
  {
    id: ++projectId,
    photo: "/images/second_project.png",
    head: "Template-Two",
    para: "Second apply on HTML + CSS",
    repo: "https://github.com/heshamabdelazim/template-2",
    demoLink: "https://template2-hesham.netlify.app",
    category: "templates",
    icon: "icon-css3",
    video: "/images/Kasper.mp4",
  },
  {
    id: ++projectId,
    photo: "/images/third_template.png",
    head: "Template-Three",
    para: "Third apply on HTML + CSS",
    repo: "https://github.com/heshamabdelazim/template-3",
    demoLink: "https://template-3-hesham.netlify.app",
    category: "templates",
    icon: "icon-css3",
    video: "/images/Three.mp4",
  },
  {
    id: ++projectId,
    photo: "/images/first_project.png",
    head: "Template-one",
    para: "First apply on HTML + CSS",
    repo: "https://github.com/heshamabdelazim/template-1",
    demoLink: "https://template-1-hesham.netlify.app/",
    category: "templates",
    video: "/images/One.mp4",
    icon: "icon-css3",
  },
  // {
  //   id: ++projectId,
  //   photo: "/images/port2.png",
  //   head: "Personal-Slider",
  //   para: "Contains 4 Slides",
  //   repo: "https://github.com/heshamabdelazim/portfolio-2",
  //   demoLink: "https://portfolio-2-hesham.netlify.app",
  //   category: "templates",
  //   icon: "icon-react",
  // },

  {
    id: ++projectId,
    photo: "/images/instagram1.jpg",
    head: "Instagram Clone",
    para: "Comming Soon ",
    // repo: "https://github.com/heshamabdelazim/courses-Ecommerce",
    // demoLink: "https://main--courses-ecommerce-hesham.netlify.app/",
    category: "Apps",
    icon: "icon-next-dot-js",
  },
];
