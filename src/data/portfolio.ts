import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Dimple Malik",
    "title": "Mechanical Engineering Student",
    "email": "malikdimple14@gmail.com",
    "phone": "+91-9350112203",
    "linkedin": "",
    "github": "",
    "location": "",
    "summary": "Mechanical Engineering student at NIT Kurukshetra with hands-on experience in machine learning, CAD, and software development. Passionate about robotics and real-time applications of AI. Recognized for strong teamwork and leadership skills in various club activities and competitions."
  },
  "experience": [
    {
      "title": "Core Team Member",
      "company": "Embedded Systems and Robotics Club (EMR), NIT Kurukshetra",
      "dates": "Dec 2023 - Present",
      "description": "Organized and participated in workshops and tech fests, enhancing technical expertise and organizational skills.",
      "highlights": [
        "Collaborated with the team to organize workshops on Embedded Systems.",
        "Attended workshops on IIoT, DIP, and AutoCAD.",
        "Contributed to the organization of Techspardha, featuring events like Robo Soccer and Bit Coding."
      ]
    },
    {
      "title": "Core Team Member",
      "company": "Athletics and Yoga Team, NIT Kurukshetra",
      "dates": "Nov 2023 - Present",
      "description": "Active participation in athletic events and team activities for physical and mental well-being.",
      "highlights": [
        "Represented NIT Kurukshetra in Inter-NIT competitions.",
        "Secured multiple medals and honors.",
        "Promoted awareness and inspired others to adopt a healthy lifestyle through regular yoga practice."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology (B.Tech.) in Mechanical Engineering",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Aug 2023 - May 2027",
      "gpa": "8.92"
    },
    {
      "degree": "Secondary High in Non-Medical (PCM)",
      "institution": "S.D. Public School",
      "years": "2022",
      "gpa": "92%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "AirHockey Pro",
      "description": "Developed a gesture-controlled virtual air hockey game using Python and OpenCV for real-time hand tracking.",
      "technologies": [
        "Python",
        "OpenCV",
        "Numpy",
        "OOP",
        "Algorithms"
      ],
      "link": "",
      "github": "Github Repo"
    },
    {
      "name": "GenAge Nexus",
      "description": "Developed a deep learning model for real-time age and gender detection, leveraging CNNs and transfer learning.",
      "technologies": [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "FastAPI",
        "Flask",
        "Docker"
      ],
      "link": "",
      "github": "Github Repo"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
