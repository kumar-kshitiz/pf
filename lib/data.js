export const PROFILE = {
  name: 'Kshitiz Kumar',
  firstName: 'Kshitiz',
  lastName: 'Kumar',
  title: 'Software Development Engineer',
  tagline: 'Building AI-driven, scalable full-stack systems.',
  location: 'Gautam Buddha Nagar, U.P., India',
  email: 'kshitizk788@gmail.com',
  phone: '+91 8920898838',
  github: 'https://github.com/kumar-kshitiz',
  githubHandle: 'kumar-kshitiz',
  linkedin: 'https://www.linkedin.com/in/kshitiz-kumar-7b194b291/',
  linkedinHandle: 'kshitiz-kumar',
}

export const ABOUT = `Software Development Engineer aspirant with hands-on experience building AI-driven applications — Retrieval-Augmented Generation (RAG) systems, LLM integrations, and intelligent automation pipelines. Proficient in scalable full-stack systems using React.js, Node.js, Express.js, and SQL/NoSQL databases, with a strong foundation in DSA, OOP, RESTful APIs, and data-driven system design.`

export const SKILLS = [
  { label: 'Languages',        items: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python'] },
  { label: 'Frontend',         items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
  { label: 'Backend & APIs',   items: ['Node.js', 'FastAPI', 'Express.js', 'RESTful APIs'] },
  { label: 'Databases',        items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { label: 'Deployment',       items: ['Vercel', 'Railway', 'Render'] },
  { label: 'Tools & Platforms',items: ['Git', 'GitHub', 'VS Code', 'Neon', 'Postman'] },
]

export const PROJECTS = [
  {
    id: 'legal',
    name: 'Legal Query Platform',
    subtitle: 'MNLU Collaboration',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    bullets: [
      'Created a 10+ page full-stack platform letting users submit legal queries and receive responses from law students.',
      'Developed an admin panel handling user management, query tracking, content updates, and resolution workflow.',
      'Coordinated development within a 6-member cross-college team — requirement analysis & task distribution.',
    ],
  },
  {
    id: 'internshala',
    name: 'Internshala Auto Apply',
    subtitle: 'Automation & Testing Tool',
    stack: ['Node.js', 'Playwright', 'Gemini API', 'JavaScript'],
    image: 'https://static.prod-images.emergentagent.com/jobs/58f2c368-7dba-418b-961d-6c9b43f7d0ad/images/a37a201b5a4619384aa479eff71cc5cdca08926de89b2cbd5aba7377e7c81c0e.png',
    bullets: [
      'Engineered a scalable browser automation system using Playwright to apply to 50+ internships per session with 95%+ reliability.',
      'Integrated Gemini API to dynamically answer 10+ application questions per listing, reducing manual effort by 80%+.',
      'Built an automated outreach pipeline parsing JDs and resumes to send personalised HR emails in 5–15 seconds per application.',
      'Implemented keyword extraction & resume optimisation aligning resumes with 20+ JD-specific keywords for ATS compatibility.',
    ],
  },
  {
    id: 'edupilot',
    name: 'EduPilot',
    subtitle: 'AI Course Assistant',
    stack: ['Python', 'Streamlit', 'Playwright', 'FAISS', 'Hugging Face', 'Groq', 'Llama3'],
    image: 'https://static.prod-images.emergentagent.com/jobs/58f2c368-7dba-418b-961d-6c9b43f7d0ad/images/b553ce2b14b9429da61d21197552a8de3b8493e831d64bbd5203d711a0216e71.png',
    bullets: [
      'Architected an AI-powered RAG system that answers queries from any educational program URL.',
      'Automated multi-page web crawling with Playwright to aggregate curriculum, fees and admissions data.',
      'Designed a semantic retrieval system using all-MiniLM-L6-v2 + FAISS, retrieving top-8 chunks for grounded context.',
      'Integrated Llama3 via Groq API for zero-hallucination responses with source attribution and confidence scoring.',
    ],
  },
  {
    id: 'placement',
    name: 'Student Placement Prediction',
    subtitle: 'ML Classification System',
    stack: ['Python', 'Random Forest', 'Pandas', 'React.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    bullets: [
      'Trained a Random Forest classifier on 3000+ student records achieving 88.55% prediction accuracy.',
      'Engineered 7+ academic and skill-based features to improve model performance.',
      'Deployed the system using a React frontend and Node.js backend for real-time predictions.',
    ],
  },
]

export const EDUCATION = [
  {
    period: 'Aug 2023 — Aug 2027',
    institution: 'Indian Institute of Information Technology, Nagpur',
    degree: 'B.Tech in Computer Science and Engineering',
    score: 'CGPA: 7.73 / 10',
  },
  {
    period: 'Jul 2020 — Jul 2022',
    institution: 'Gautam Public Sr. Sec. School (CBSE)',
    degree: 'Senior Secondary — Class XII',
    score: 'Score: 89.6%',
  },
]

export const ACHIEVEMENTS = [
  { title: '2nd Runner-up — IIT Mandi FrontHack', detail: 'Hackathon finalist with a 3-member team.' },
  { title: '450+ DSA problems on LeetCode',        detail: 'Max contest rating 1615.' },
  { title: 'CodeChef peak rating 1515',            detail: 'Active competitive programmer.' },
]

export const HERO_BACKGROUND =
  'https://static.prod-images.emergentagent.com/jobs/58f2c368-7dba-418b-961d-6c9b43f7d0ad/images/5b452eb253d3d0256796ecd1a63f44a3f7021368f591dbae54bff6fb59a4bdb2.png'
