import { facebook, instagram, linkedin, twitter  } from "../assets";

export const navLinks =[
    { id:'home',title:'Home'},
    { id:'about',title:'About Us'},
    { id:'members',title:'Members'},
    { id:'announcement',title:'Annoucements'},
    { id:'events',title:'Events'},
    { id:'contact',title:'Contact Us'},
];


export const footerLinks = [
    {
      title: "Home",
      links: [
        {
          name: "Who are we",
          link: "./home#whoarewe",
        },
        {
          name: "What we do",
          link: "./home#whatwedo",
        },
        {
          name: "What we have achieved",
          link: "./home#achievements",
        },
        {
          name: "Our Alumni are at",
          link: "./home#alumni",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          name: "History of FOSS CIT",
          link: "./about#history",
        },
        {
          name: "Details",
          link: "./about#detials",
        },
        {
          name: "Present Board",
          link: "./about#board",
        },
        {
          name: "Previous Board",
          link: "./about#prevboard",
        },
      ],
    },
    {
      title: "Events",
      links: [
        {
          name: "Join Our Community",
          link: "./events#community",
        },
        {
          name: "Events Gallery",
          link: "./events#gallery",
        },
      ],
    },
];
  
export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];