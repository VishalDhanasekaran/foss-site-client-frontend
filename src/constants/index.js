import { careerGuidence, codingContest, discord, github, groupDiscussions, instagram, linkedin, quizz, webinar, workshop, youtube, socialMediaIcon, bootcamp, designing, Aruna, Umarani, interview, funEvents, openSource } from "../assets";

export const navLinks =[
    { id:'/',title:'Home'},
    { id:'/about',title:'About Us'},
    { id:'/members',title:'Members'},
    { id:'/events',title:'Events'},
    { id:'/contact',title:'Contact Us'},
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
      img: "https://media.licdn.com/dms/image/C5603AQGVctuHByJqMg/profile-displayphoto-shrink_800_800/0/1590764796771?e=1686787200&v=beta&t=pQImnPY1kPzFOnxTzzIWHnASQlK5m9lfDZOjPaS3rNM",
      name: "Dhileepan Thangamanimaran",
      working: "Senior Member Technical at D. E. Shaw Group",
      linkedin: "https://www.linkedin.com/in/dhileepan/",
    },
    {
      id:3002,
      img: "https://media.licdn.com/dms/image/C5603AQGj-HGaA_i29A/profile-displayphoto-shrink_200_200/0/1584255198813?e=1686787200&v=beta&t=EUy3k0bqOtbaz5EubirvU8dDdhx8Qy935JSDNVKp4sE",
      name: "Sibi Bose",
      working: "Software Engineer at KLA Tencor",
      linkedin: "https://www.linkedin.com/in/sibi-bose/",
    },
    {
      id:3003,
      img: "https://media.licdn.com/dms/image/D5603AQEr1cFWs1eD4A/profile-displayphoto-shrink_200_200/0/1672553593610?e=1686787200&v=beta&t=F9hYdsWqyCelM-0YDmbvf-sQb6LYdrbL7fOfPq5vZpo",
      name: "Sai Adarsh S",
      working: "Software Engineer at Cisco",
      linkedin: "https://www.linkedin.com/in/sai-adarsh/",
    }
  ]

  export const advisors = [
    {
      id:4001,
      img: Aruna,
      name: "Dr. Aruna P",
      working: "Assistant Professor, Department of Computing, CIT",
      mail: "paruna@cit.edu.in",
    },
    {
      id:4002,
      img: Umarani,
      name: "Dr. Umarani M",
      working: "Assistant Professor, Department of Computing, CIT",
      mail: "umarani@cit.edu.in",
    }
  ]

export const missions=[
  {
    id: 6001,
    img:'https://amfoss.in/illus/mentor.svg',
    tagline:'Mentor & train students to face real-world challenges'
  },
  {
    id: 6002,
    img:'https://amfoss.in/illus/promote.svg',
    tagline:'Promote Open Source and Computer Science'
  },
  {
    id: 6003,
    img:'https://amfoss.in/illus/contribute.svg',
    tagline:'Team Building Activities and Discussion Forums'
  }
]


export const activities=[
  {
    id:7000,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Webinar',
    icon:webinar,
    desc:'Our webinar provides participants with resources and guidance to help them gain the most out of their college experience and prepare for a successful job in technology. Participants will have the opportunity to hear from experienced professionals in the technology industry and gain valuable insights into the skills and knowledge that employers are looking for. The webinar will cover a wide range of topics, including resume building, networking strategies, interview preparation, and career development.',
  },
  {
    id:7001,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Bootcamps',
    icon:bootcamp,
    desc:'Our Bootcamps provide students with practical instruction and direction from experienced instructors, allowing them to quickly develop their skills and gain experience. Our Bootcamps are designed to provide students with a hands-on, immersive learning experience that allows them to rapidly develop the skills and knowledge they need to succeed in their chosen field.',
  },
  {
    id:7002,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Workshops',
    icon:workshop,
    desc:'Students will engage in hands-on activities and exercises to practice and develop their skills during a workshop that encourages active participation and learning. Through a combination of hands-on activities, group exercises, and individual assignments, students will have the opportunity to practice and develop their skills in a supportive and collaborative environment.',
  },
  {
    id:7003,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Coding Contests',
    icon:codingContest,
    desc:'Our coding contest will provide an opportunity for students to showcase their programming skills and compete against each other, with the solution and learning materials provided at the end. Participants will be presented with a range of coding challenges and problems, each designed to test their knowledge and abilities in different areas of programming.',
  },
  {
    id:7004,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Designing Contests',
    icon:designing,
    desc:'Our design contest encourages participants to improve their skills, learn new tools, and compete with other students in a friendly and challenging environment. Our design contest is an exciting opportunity for participants to showcase their creativity, hone their design skills, and learn new tools and techniques.',
  },
  {
    id:7005,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Group Discussions',
    icon:groupDiscussions,
    desc:'Event on Group discussion are conducted for individuals who are preparing for job interviews or seeking to improve their communication skills in a group setting.The event will be facilitated by a moderator who guides the discussion and provides feedback to help participants improve their performance. Participants will have the opportunity to practice their communication skills and receive feedback from an experienced moderator.',
  },
  {
    id:7006,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Interview Preparations',
    icon:interview,
    desc:'Individuals interview skills are improved through interview coaching sessions, where participants can improve their performance through feedback and guidance provided through the event. In addition to improving their interview skills, participants will also benefit from the opportunity to network with other professionals in their field.',
  },
  {
    id:7007,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'SocialMedia Events',
    icon:socialMediaIcon,
    desc:'Social media events are conducted in series by inculcating technical questions and facts to skill up daily through platforms like Instagram and LinkedIn. These events are designed to help individuals gain knowledge and practise basic interview questions to prepare for a job interview. These events are designed to help individuals gain knowledge and practise basic interview questions to prepare for a job interview.',
  },
  {
    id:7008,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Quiz',
    icon:quizz,
    desc:'These events typically involve a series of questions on various topics, ranging from general knowledge to specific areas of expertise, to foster intellectual curiosity and encourage learning and competition in a fun and engaging way. Participants can expect to be challenged and entertained by our carefully crafted questions, which cover a wide range of subjects and difficulty levels.',
  },
  {
    id:7009,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Fun Events',
    icon:funEvents,
    desc:'Fun events are conducted by our club to promote engagement, socialization, and overall well-being among students. These events are intended to be fun, interactive, and inclusive, which includes a variety of activities and games. By participating in our events, students can meet new people, build friendships, and develop a sense of belonging on campus.',
  },
  {
    id:7010,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Career Guidence',
    icon:careerGuidence,
    desc:'Our career guidance session helps students to identify their strengths and interests, explore potential career paths, and develop a plan for achieving their goals. Overall, our career guidance sessions are designed to empower students with the tools and knowledge they need to achieve their career goals.',
  },
  {
    id:7011,
    pic:'https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk=',
    title:'Open Source',
    icon:openSource,
    desc:'Our invlovement in open source helped our participants develope their coding abilities, gain knowledge, and make software more approachable. Moreover, contributing to open source projects can also lead to networking opportunities and exposure to potential employers, as many companies use and contribute to open source software. Ultimately, involvement in open source projects can have a positive impact on both personal and professional development, and can be a rewarding way to give back to the larger software development community.',
  },
]
import { UilUser } from '@iconscout/react-unicons'
import { UilPresentation } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'

export const achievements =[
  {
    id:8001,
    title:'500+',
    desc:'Active Members',
    img:UilUser
  },
  {
    id:8002,
    title:0,
    desc:'Events',
    img:UilPresentation
  },
  {
    id:8003,
    title:0,
    desc:'Youtube Views',
    img:UilYoutube
  },
]
