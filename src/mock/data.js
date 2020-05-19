import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Shreesha Sagar | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Shreesha Sagar',
  subtitle: '<Developer/>. Lifelong Learner',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'I am a 6th semester undergraduate majoring in Information Science & Engineering at RV College of Engineering. Actively working on projects. Main domains include Full Stack Web Development, Native App Development, CI/CD.',
  paragraphTwo:
    'Motivated fast and effecient learner. Always trying to help out people with tech, be it my grandmother having issue with her smartphone or building a website for the government.',
  paragraphThree: 'Got a great idea ? Let me help you achieve it.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Tggr | Tag based file sharing',
    info:
      "Tired of digging mails for that drive link to upload files. Worry no more. Upload files under a common tag name and collaborate like never before. Suppose a professor wants her students to submit their assignments digitally. All she has to do is create a tag like say '6th-sem-assignment' and share it with her students. The students can upload the files under that tag.",
    info2:
      "Built using React and Firebase. I had to go with Firebase because of it's one stop shop for database and storage bucket. There is nothing to say about React",
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
