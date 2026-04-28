type skill = {
  title: string;
  boxSlogan: string;
  tags: string[];
};
const fieldsArr: skill[] = [
  {
    title: "Programming World",
    boxSlogan: "For Tech Solutions",
    tags: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Data Structures",
      "Algorithms",
      "System Design",
      "SOLID Principles",
      "Design Patterns",
    ],
  },
  {
    title: "Web Development",
    boxSlogan: "Building Interactive Websites",
    tags: [
      "HTML",
      "CSS",
      "React.js",
      "Redux Toolkit",
      "NEXT.js",
      "Tailwind",
      "Web & Network Knowledge",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Software Testing",
    boxSlogan: "Quality Assurance",
    tags: [
      "Manual Testing",
      "Automated Testing",
      "Selenium-Java",
      "Jest",
      "TestNG",
      "API Testing Automation",
    ],
  },
  {
    title: "Data Engineering",
    boxSlogan: "Data Management and Analysis",
    tags: [
      "SQL",
      "Numpy",
      "Pandas",
      "ETL",
      "Data Warehousing",
      "Big Data Technologies",
      "Azure",
    ],
  },
  {
    title: "Tools",
    boxSlogan: "Development and Collaboration",
    tags: ["Git", "Jira", "TLdraw", "NPM"],
  },
];

export default fieldsArr;
