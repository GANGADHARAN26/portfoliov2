import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gangadharan",
  lastName: "A",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web developer",
  avatar: "/images/projects/project-01/linkedinProfile.jpg",
  location: "India/Chennai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GANGADHARAN26",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gangadharan07/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Gangadharan_26",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:gangadharana01@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Sofware Developer and Devops</>,
  subline: (
    <>
      I'm Gangadharan, a Software developer at{" "}
      <InlineCode>Nura9 solutions</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nura9 solutions",
        timeframe: "2024/Oct - 2025/Janu",
        role: "Front End Intern",
        achievements: [
          <>Worked in AI LMS Project</>,
          <>Developing user friendly and Responsive UI's</>,
          <>Implementations of API and Latest technologies like STT and TSS Voice Bot</>,
          <>Worked on deployement with AWS Cloud service</>,
          <>Skills - React, TailwindCSS, Javascript, AWS ( S3, CloudFront, Route53, Route53 Hostzone ), GitHub, Postman, Hopstcotch, Redux Toolkit</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Lunara solutions",
        timeframe: "2024/June - 2025/Oct",
        role: "Front End Intern",
        achievements: [
          <>Worked in ERP Project</>,
          <>Developing user friendly and Responsive UI's</>,
          <>Implementations of API with better performance</>,
          <>Coordinatng and combining with team and managing code</>,
          <>Skills - React, TailwindCSS, Javascript, Github</>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jeppiaar engineering college",
        description: <>Studied Bachelors in Informational Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML",
        description: <>Structuring web content with semantic HTML.</>,
        images: [],
      },
      {
        title: "CSS",
        description: <>Styling websites using modern CSS techniques.</>,
        images: [],
      },
      {
        title: "Bootstrap",
        description: <>Using Bootstrap for responsive and fast UI development.</>,
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: <>Building modern UIs efficiently with Tailwind CSS.</>,
        images: [],
      },
      {
        title: "Material UI",
        description: <>Creating sleek and accessible UIs using Material UI.</>,
        images: [],
      },
      {
        title: "JavaScript",
        description: <>Building dynamic and interactive web applications.</>,
        images: [],
      },
      {
        title: "React",
        description: <>Developing fast and scalable frontend applications with React.</>,
        images: [],
      },
      {
        title: "React Native",
        description: <>Creating cross-platform mobile applications using React Native.</>,
        images: [],
      },
      {
        title: "Redux",
        description: <>Managing global state efficiently with Redux.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Building scalable backend services with Node.js.</>,
        images: [],
      },
      {
        title: "Express.js",
        description: <>Developing RESTful APIs with Express.js.</>,
        images: [],
      },
      {
        title: "MongoDB",
        description: <>Storing and managing data with MongoDB.</>,
        images: [],
      },
      {
        title: "SQL",
        description: <>Handling structured data with SQL databases.</>,
        images: [],
      },
      {
        title: "AWS S3",
        description: <>Storing and serving files securely using AWS S3.</>,
        images: [],
      },
      {
        title: "CloudFront",
        description: <>Delivering content with low latency using CloudFront.</>,
        images: [],
      },
      {
        title: "Route53",
        description: <>Managing domain names and DNS records with Route53.</>,
        images: [],
      },
      {
        title: "Route53 HostZone",
        description: <>Configuring domain routing using Route53 HostZone.</>,
        images: [],
      },
      {
        title: "Certificate Manager",
        description: <>Handling SSL/TLS certificates securely with AWS Certificate Manager.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
