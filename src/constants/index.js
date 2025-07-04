import { 
  careerGuidence, 
  codingContest, discord, github, groupDiscussions, instagram, linkedin, 
  quizz, webinar, workshop, youtube, socialMediaIcon, bootcamp, designing, 
  Aruna, Umarani, interview, funEvents, openSource, founder1, founder2, founder3,targetEvents, 
  members, youtubeViews, op_pic, workshopPic, coding_contest, SocialEvent, quiz, fun_events, 
  career_Guidence, webinarPic, bootcampPic, interviewprepPic, GD, designContest 
} from "../assets";

export const navLinks =[
    { id:'/',title:'Home'},
    { id:'/about',title:'About Us'},
    { id:'/members',title:'Members'},
    { id:'/events',title:'Events'},
    {id: '/blogs', title: 'Blogs'},
    { id:'/contact',title:'Contact Us'},
    {id: '/join', title: 'Join'}
    // { id:'/login',title:'Log In'},
];

export const API='https://foss-web-server.onrender.com/api';

export const footerLinks = [
  {
    id:1011,
    name: "Home",
    link: "./",
  },
  {
    id:1012,
    name: "About Us",
    link: "about",
  },
  {
    id:1013,
    name: "Members",
    link: "members",
  },
  {
    id:1014,
    name: "Events",
    link: "events",
  },
  {
    id:1015,
    name: "Contact Us",
    link: "contact",
  }

];
export const contributors=    [
       {
          id:1051,
          name: "Tharun Kailash K",
          link: "https://linkedin.com/in/tharun-kailash/",
          role: "Team Lead",
        },
        {
          id:1053,
          name: "Vignaraj D",
          link: "https://linkedin.com/in/vignaraj-d/",
          role: "Frontend Developer",
        },
        {
          id:1052,
          name: "Shriram R",
          link: "https://www.linkedin.com/in/shriram-r-20841421a/",
          role: "Backend Developer",
        },
      ];
  
export const socialMedia = [
    {
      id: "instagram",
      icon: instagram,
      link: "https://instagram.com/fosscit",
    },
    {
      id: "discord",
      icon: discord,
      link: "https://discord.com/invite/zAqY6nqQ8H",
    },
    {
      id: "youtube",
      icon: youtube,
      link: "https://www.youtube.com/channel/UCZh_zcyn3jXz8-kHT-ezLRQ",
    },
    {
      id: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/company/foss-cit/",
    },
    {
      id: "github",
      icon: github,
      link: "https://github.com/fosscit",
    },
  ];

export const founders = [
    {
      id:3001,
      img: founder1,
      name: "Dhileepan Thangamanimaran",
      working: "Technical Lead at D. E. Shaw Group",
      linkedin: "https://www.linkedin.com/in/dhileepan/",
    },
    {
      id:3002,
      img: founder2,
      name: "Sibi Bose",
      working: "Software Engineer-II at KLA Tencor",
      linkedin: "https://www.linkedin.com/in/sibi-bose/",
    },
    {
      id:3003,
      img: founder3,
      name: "Sai Adarsh S",
      working: "Software Engineer-II at Cisco",
      linkedin: "https://www.linkedin.com/in/sai-adarsh/",
    }
  ]

  export const advisors = [
    {
      id:4001,
      img: Aruna,
      name: "Dr. Aruna P",
      working: "Assistant Professor, Department of Computing",
      mail: "paruna@cit.edu.in",
    },
    {
      id:4002,
      img: Umarani,
      name: "Dr. Umarani M",
      working: "Assistant Professor, Department of Computing",
      mail: "umarani@cit.edu.in",
    }
  ]

export const missions=[
  {
    id: 6001,
    img:'https://amfoss.in/illus/mentor.svg',
    tagline:'To mentor and train students to face real-world challenges'
  },
  {
    id: 6002,
    img:'https://amfoss.in/illus/promote.svg',
    tagline:'To enhance Open Source and Computer Science Knowledge'
  },
  {
    id: 6003,
    img:'https://amfoss.in/illus/contribute.svg',
    tagline:'To promote Team Building Activities and Discussion Forums'
  }
]


export const activities=[
  {
    id:7011,
    title:'Open Source',
    pic:op_pic,
    icon:openSource,
    desc:'Our invlovement in open source helped our participants develop their coding abilities, gain knowledge, and make software more approachable. Moreover, contributing to open source projects can also lead to networking opportunities and exposure to potential employers, as many companies use and contribute to open source software. Ultimately, involvement in open source projects can have a positive impact on both personal and professional development, and can be a rewarding way to give back to the larger software development community.',
  },
  {
    id:7000,
    pic:webinarPic,
    title:'Webinar',
    icon:webinar,
    desc:'Our webinar provides participants with resources and guidance to help them gain the most out of their college experience and prepare for a successful job in technology. Participants will have the opportunity to hear from experienced professionals in the technology industry and gain valuable insights into the skills and knowledge that employers are looking for. The webinar will cover a wide range of topics, including resume building, networking strategies, interview preparation, and career development.',
  },
  {
    id:7001,
    pic:bootcampPic,
    title:'Bootcamps',
    icon:bootcamp,
    desc:'Our Bootcamps provide students with practical instruction and direction from experienced instructors, allowing them to quickly develop their skills and gain experience. Our Bootcamps are designed to provide students with a hands-on, immersive learning experience that allows them to rapidly develop the skills and knowledge they need to succeed in their chosen field.',
  },
  {
    id:7002,
    pic:workshopPic,
    title:'Workshops',
    icon:workshop,
    desc:'Students will engage in hands-on activities and exercises to practice and develop their skills during a workshop that encourages active participation and learning. Through a combination of hands-on activities, group exercises, and individual assignments, students will have the opportunity to practice and develop their skills in a supportive and collaborative environment.',
  },
  {
    id:7003,
    pic:coding_contest,
    title:'Coding Contests',
    icon:codingContest,
    desc:'Our coding contest will provide an opportunity for students to showcase their programming skills and compete against each other, with the solution and learning materials provided at the end. Participants will be presented with a range of coding challenges and problems, each designed to test their knowledge and abilities in different areas of programming.',
  },
  {
    id:7004,
    pic:designContest,
    title:'Designing Contests',
    icon:designing,
    desc:'Our design contest encourages participants to improve their skills, learn new tools, and compete with other students in a friendly and challenging environment. Our design contest is an exciting opportunity for participants to showcase their creativity, hone their design skills, and learn new tools and techniques.',
  },
  {
    id:7007,
    title:'Social Media Events',
    pic:SocialEvent,
    icon:socialMediaIcon,
    desc:'Social media events are conducted in series by inculcating technical questions and FOSS facts to skill up daily through platforms like Instagram and LinkedIn. These events are designed to help individuals gain knowledge in FOSS and practise basic interview questions to prepare for a job interview. These events are designed to help individuals gain knowledge and practise basic interview questions to prepare for a job interview.',
  },
  {
    id:7008,
    pic:quiz,
    title:'Quiz',
    icon:quizz,
    desc:'These events typically involve a series of questions on various topics, ranging from general knowledge to specific areas of expertise, to foster intellectual curiosity and encourage learning and competition in a fun and engaging way. Participants can expect to be challenged and entertained by our carefully crafted questions, which cover a wide range of subjects and difficulty levels.',
  },
  {
    id:7009,
    pic:fun_events,
    title:'Fun Events',
    icon:funEvents,
    desc:'Fun events are conducted by our club to promote engagement, socialization, and overall well-being among students. These events are intended to be fun, interactive, and inclusive, which includes a variety of activities and games. By participating in our events, students can meet new people, build friendships, and develop a sense of belonging on campus.',
  },
  {
    id:7006,
    pic:interviewprepPic,
    title:'Interview Preparations',
    icon:interview,
    desc:'Individuals interview skills are improved through interview coaching sessions, where participants can improve their performance through feedback and guidance provided through the event. In addition to improving their interview skills, participants will also benefit from the opportunity to network with other professionals in their field.',
  },
  {
    id:7010,
    pic:career_Guidence,
    title:'Career Guidence',
    icon:careerGuidence,
    desc:'Our career guidance session helps students to identify their strengths and interests, explore potential career paths, and develop a plan for achieving their goals. Overall, our career guidance sessions are designed to empower students with the tools and knowledge they need to achieve their career goals.',
  },
  {
    id:7005,
    pic:GD,
    title:'Meet-ups',
    icon:groupDiscussions,
    desc:'FOSS Meetups are organized for individuals passionate about technology and open-source innovation. These meetups serve as a platform for developers, students, and enthusiasts to come together, share knowledge, and collaborate on community-driven tech. The event features speaker sessions, lightning talks, and networking opportunities, all centered around Free and Open Source Software (FOSS). Participants gain exposure to real-world applications of open-source tools, explore ongoing community projects, and learn from experienced contributors. The meetups encourage active participation, foster peer learning, and promote a culture of collaboration in the open-source ecosystem.',
  },
]


export const achievements =[
  {
    id:8001,
    title:'500+',
    desc:'Active Members',
    img:members
  },
  {
    id:8002,
    title:0,
    desc:'Total Events',
    img:targetEvents
  },
  {
    id:8003,
    title:0,
    desc:'Views',
    img:youtubeViews
  },
]

export const eventDemo={
  category:"Interactive session",
  content:"Launch of the official FOSS-CIT website; prizes awarded to the winners of the Code Quest and Trivia Time events.",
  createdAt: "2023-04-18T14:18:14.107Z",
  eventDate:"2023-04-25T14:10:11.000Z",
  eventYear:"2022 - 23",
  link: "",
  materials: "",
  pic: "http://res.cloudinary.com/piyushproj/image/upload/v1681827296/xt9cqsxg3ncus5zpkpwu.jpg",
  speaker: "THARUN KAILASH K, PADHMASINI A",
  time: "4:45 pm",
  title: "THE FOSS SUMMIT",
  updatedAt: "2023-04-18T14:18:14.107Z",
  user: "6418950926d64d5aa4fb07c5",
  venue: "CM 102",
  __v: 0,
  _id: "643ea6a6ed50f5004050e491",
}