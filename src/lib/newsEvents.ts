export interface NewsEvent {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  additionalImages: string[];
  secondDescription: string;
  date: string;
  time?: string;
  image: string;
  location?: string;
  category: string;
  type: string;
  tags: string[];
}

export const newsEvents: NewsEvent[] = [
  {
    id: 1,
    title: "Annual Environmental Summit 2025: Protecting Sri Lanka's Biodiversity",
    excerpt: "Join us for our flagship event bringing together environmental leaders, researchers, and community activists to discuss conservation strategies.",
    description: "Join us for our flagship event bringing together environmental leaders, researchers, and community activists to discuss conservation strategies. The summit will feature keynote speeches, panel discussions, and workshops focusing on biodiversity protection, climate adaptation, and sustainable development practices across Sri Lanka.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "This year's summit brings together over 200 participants including environmental scientists, policy makers, indigenous community leaders, and youth activists. The event will showcase successful conservation projects, facilitate networking opportunities, and develop actionable strategies for protecting Sri Lanka's unique ecosystems.",
    date: "October 15, 2025",
    time: "9:00 AM - 5:00 PM",
    image: "/images/news-1.jpg",
    category: "Event",
    type: "Conference",
    tags: ["biodiversity", "conservation", "summit", "networking", "policy", "climate action"],
  },
  {
    id: 2,
    title: "NEF Receives National Award for Indigenous Knowledge Preservation",
    excerpt: "Recognition for our groundbreaking work in documenting and reviving traditional ecological practices across rural Sri Lanka.",
    description: "The National Environmental Forum has been honored with the prestigious National Heritage Award for our groundbreaking work in documenting and reviving traditional ecological practices across rural Sri Lanka. This recognition highlights our commitment to bridging indigenous wisdom with modern conservation approaches.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "Over the past three years, NEF has worked with over 50 rural communities to document traditional farming techniques, water management systems, and sustainable harvesting practices. This award validates our approach of empowering local communities as guardians of both ecological and cultural heritage.",
    date: "September 20, 2025",
    image: "/images/news-1.jpg",
    category: "News",
    type: "Achievement",
    tags: ["award", "indigenous knowledge", "heritage", "recognition"],
  },
  {
    id: 3,
    title: "Community Workshop: Traditional Water Management Systems",
    excerpt: "Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies.",
    description: "Hands-on workshop exploring ancient tank cascade systems and their relevance to modern climate adaptation strategies. Participants will visit historical irrigation sites and learn from community elders about sustainable water management practices that have sustained agriculture for centuries.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "The workshop includes field visits to functioning cascade tank systems, interactive sessions with traditional water engineers, and discussions on integrating these time-tested methods with contemporary water conservation technologies. Limited spaces available for this immersive learning experience.",
    date: "November 5, 2025",
    time: "2:00 PM - 6:00 PM",
    image: "/images/news-1.jpg",
    location: "Anuradhapura District",
    category: "Event",
    type: "Workshop",
    tags: ["water management", "traditional knowledge", "workshop", "climate adaptation"],
  },
  {
    id: 4,
    title: "New Partnership with Universities for Environmental Research",
    excerpt: "NEF collaborates with leading academic institutions to establish research programs focused on indigenous ecological knowledge.",
    description: "NEF collaborates with leading academic institutions to establish research programs focused on indigenous ecological knowledge. This partnership will facilitate student internships, joint research projects, and knowledge exchange between traditional practitioners and academic researchers.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "The partnership includes three major universities and will focus on documenting traditional ecological knowledge, developing sustainable agricultural practices, and training the next generation of environmental leaders who understand both scientific and indigenous approaches to conservation.",
    date: "September 10, 2025",
    image: "/images/news-1.jpg",
    category: "News",
    type: "Partnership",
    tags: ["education", "research", "partnership", "universities", "youth"],
  },
  {
    id: 5,
    title: "Youth Climate Action Camp 2025",
    excerpt: "Week-long immersive program for young environmental leaders featuring field visits, workshops, and community projects.",
    description: "Join our week-long immersive program designed for young environmental leaders. The camp includes field visits to conservation sites, hands-on workshops, and community-driven projects aimed at fostering sustainable practices and leadership skills among Sri Lanka's youth.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "Participants will engage in activities such as tree planting, wildlife monitoring, and learning traditional ecological practices from local communities. The camp aims to empower the next generation to take action against climate change while respecting indigenous knowledge.",
    date: "December 1-7, 2025",
    time: "All Day",
    location: "Sinharaja Forest Reserve",
    image: "/images/news-1.jpg",
    category: "Event",
    type: "Youth Program",
    tags: ["youth", "climate action", "workshops", "conservation"],
  },
  {
    id: 6,
    title: "Success Story: Village Transforms with Solar Energy Project",
    excerpt: "How NEF's renewable energy initiative brought sustainable power to 150 households in rural Monaragala district.",
    description: "NEF's renewable energy initiative has transformed a rural village in Monaragala by providing sustainable solar power to 150 households, reducing reliance on fossil fuels and enhancing community resilience.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "This project involved collaboration with local communities to install solar panels, train technicians, and establish maintenance systems. The initiative not only provides clean energy but also creates economic opportunities and promotes sustainable development.",
    date: "August 28, 2025",
    category: "News",
    image: "/images/news-1.jpg",
    type: "Success Story",
    tags: ["renewable energy", "solar power", "community development", "sustainability"],
  },
  {
    id: 7,
    title: "Sacred Groves Conservation Symposium",
    excerpt: "International conference on the role of traditional sacred forests in biodiversity conservation and cultural heritage.",
    description: "Join our international conference exploring the critical role of sacred forest groves in biodiversity conservation and cultural heritage preservation. The symposium will feature global experts, community leaders, and policymakers.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "The event includes presentations on successful conservation models, panel discussions on integrating traditional knowledge with modern science, and networking sessions to foster global collaboration in protecting sacred groves.",
    date: "November 20, 2025",
    time: "10:00 AM - 4:00 PM",
    image: "/images/news-1.jpg",
    location: "Kandy",
    category: "Event",
    type: "Conference",
    tags: ["biodiversity", "sacred groves", "cultural heritage", "conference"],
  },
  {
    id: 8,
    title: "NEF Launches Mobile App for Indigenous Plant Identification",
    excerpt: "Innovative technology meets traditional knowledge in new app helping communities identify and preserve native plant species.",
    description: "NEF's new mobile app combines innovative technology with traditional knowledge to help communities identify and preserve native plant species, promoting biodiversity and sustainable land use.",
    additionalImages: [
      "/images/news-1.jpg",
      "/images/news-1.jpg",
      "/images/news-1.jpg",
    ],
    secondDescription: "Developed in collaboration with botanists and local communities, the app features a user-friendly interface, detailed plant profiles, and conservation tips. It aims to empower users to protect Sri Lanka's rich flora while honoring indigenous practices.",
    date: "September 5, 2025",
    category: "News",
    image: "/images/news-1.jpg",
    type: "Innovation",
    tags: ["technology", "biodiversity", "indigenous knowledge", "mobile app"],
  },
];