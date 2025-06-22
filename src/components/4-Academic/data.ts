export interface academicStructure {
  id: number;
  isActive: boolean;
  org: String;
  logo: String;
  course: { title: String; desc: String }[];
  images: { title: String; imgPath: String }[];
}
let objId: number = 0;
export const data: academicStructure[] = [
  {
    id: ++objId,
    isActive: true,
    org: "University",
    logo: "/images/Damanhour-Logo.png",
    course: [
      {
        title: "Damanhour University - Physics Department",
        desc: "In my 4 years and half, I studied theories of physics, Statics, Dynamics and Electronics.",
      },
      {
        title: "Physics Department Subjects",
        desc: "All of Mathmatics branches. like [Statistics and Probability, Differential Equation, Mathematical Physics, Computational Mathematics, Matrix] ",
      },
      {
        title: "Programms used during University",
        desc: "Matlab - MS office",
      },
      {
        title: "GPA",
        desc: "2.57 - Good degree. ",
      },
    ],
    images: [
      {
        title: "Damanhour University",
        imgPath: "/images/Damanhour-University.jpg",
      },
      {
        title: "Graduation Certificate",
        imgPath: "/images/graduation.jpg",
      },
      {
        title: "Matlab-work",
        imgPath: "/images/university-pro.PNG",
      },
    ],
  },
  {
    id: ++objId,
    isActive: false,
    org: "Self-Study",
    logo: "/images/setf-logo.png",
    course: [
      {
        title: "Fundamentals of Web",
        desc: "On Elzero Web School(YouTube), I've learnt HTML, CSS, SASS and JS. I also made 4 templates of web using HTML and CSS with respect to SEO and Semantic Elements, ",
      },
      {
        title: "Frame work of JavaScript (React.js)",
        desc: "on Code-Zone(YouTube), I've learnt React best practices and its projects.",
      },
      {
        title: "How to use Jira Course",
        desc: "Learnt tracking tasks and time in companies using Jira(Scrum and Kanban) inside a team with Agile methodology.",
      },
      {
        title: "Postman Course",
        desc: "Testing the API response by applying scripts and assertions to the response body, Validation of JSON schema, Headers, Authentication, and the expected response data type. These tests were conducted to be prepared for integration with the CI/CD server.",
      },
      {
        title: "Problem Solving",
        desc: "Solving Questions on Leetcode.com, Critical thinking, Reducing time complixity, increasing code performance.",
      },
    ],
    images: [
      {
        title: "ElZero Web School",
        imgPath: "/images/Elzero-youtube.jpg",
      },
      {
        title: "Code Zone",
        imgPath: "/images/code-zone.jpg",
      },
      {
        title: "Postman",
        imgPath: "/images/postman-interface.jpg",
      },
      {
        title: "API Test Automation",
        imgPath: "/images/API-Test-Automation.jpg",
      },
      {
        title: "Leetcode.com",
        imgPath: "/images/leetcode.jpg",
      },
    ],
  },
  {
    id: ++objId,
    org: "Udemy",
    isActive: false,
    logo: "/images/Udemy-logo.png",
    course: [
      {
        title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
        desc: "I've learned what is server side rendering (SSR) and client side rendering (CSR) and learned integration with backend Also learned Supabase and Strapi integration",
      },
    ],
    images: [
      {
        title: "React - Jonas",
        imgPath: "/images/react-jonas.jpg",
      },
    ],
  },
  {
    id: ++objId,
    isActive: false,
    org: "Ministry",
    logo: "/images/ministry.png",
    course: [
      {
        title: "SoftWare Testing Scholarship",
        desc: "I've learned basics of ISTQB material, applied Manual Testing, API Testing (Postman), Automation (Selenium-Java), White Box and Black Box. ",
      },
      {
        title: "Course Data Base Fundamentals",
        desc: "From  understanding of database and data analysis tried to make queries of data with relationships between each other.",
      },
    ],
    images: [
      {
        title: "Mahara Tech Platform",
        imgPath: "/images/DBMS.jpg",
      },
      {
        title: "Database Certificate",
        imgPath: "/images/Database.jpg",
      },
      {
        title: "TL Certificate",
        imgPath: "/images/Software-Testing.jpg",
      },
    ],
  },
];
