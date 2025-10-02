export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  secondDescription: string;
  additionalImages: string[];
  category: string;
  image: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Preserving Sri Lanka's Ancient Tank Systems: Indigenous Water Management Wisdom",
    description:
      "Explore how traditional cascade tank systems have sustained Sri Lankan agriculture for over 2,000 years and NEF's efforts to revive this indigenous knowledge in the face of climate change.",
    date: "September 15, 2025",
    author: "Dr. Sumedha Manjula",
    secondDescription:
      "The success of these initiatives is attributed to the collaboration with local communities and experts. We've also implemented monitoring systems to track the growth and health of the newly planted trees, ensuring long-term sustainability.",
    additionalImages: [
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
    ],
    category: "Indigenous Knowledge",
    image: "/images/blog-1.jpg",
    readingTime: "8 min read",
    tags: ["Water Conservation", "Traditional Practices", "Climate Resilience"],
  },
  {
    id: 2,
    title: "The Role of Sacred Groves in Biodiversity Conservation",
    description:
      "Discover how Sri Lanka's sacred forest groves (Devale) protect endangered species and maintain ecological balance, with insights from NEF's community-based preservation projects.",
    date: "August 28, 2025",
    author: "Amitha Bandara Andagala",
    secondDescription:
      "The success of these initiatives is attributed to the collaboration with local communities and experts. We've also implemented monitoring systems to track the growth and health of the newly planted trees, ensuring long-term sustainability.",
    additionalImages: [
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
    ],
    category: "Biodiversity",
    image: "/images/blog-1.jpg",
    readingTime: "6 min read",
    tags: ["Forest Protection", "Cultural Heritage", "Community Action"],
  },
  {
    id: 3,
    title: "Youth Engagement in Environmental Conservation: NEF's Educational Initiatives",
    description:
      "Learn about NEF's programs aimed at cultivating environmental awareness among Sri Lanka's youth, including school workshops and field studies on indigenous ecological practices.",
    date: "July 10, 2025",
    author: "Herath Mudiyanselage Punchi Banda Herath",
    secondDescription:
      "The success of these initiatives is attributed to the collaboration with local communities and experts. We've also implemented monitoring systems to track the growth and health of the newly planted trees, ensuring long-term sustainability.",
    additionalImages: [
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
    ],
    category: "Education",
    image: "/images/blog-1.jpg",
    readingTime: "7 min read",
    tags: ["Youth Education", "Environmental Habits", "Future Generations"],
  },
  {
    id: 4,
    title: "Alternative Energy Solutions: Promoting Solar and Wind in Rural Sri Lanka",
    description:
      "NEF's collaborative projects with communities to implement sustainable energy alternatives, reducing reliance on fossil fuels while preserving traditional knowledge.",
    date: "June 5, 2025",
    author: "NEF Research Team",
    secondDescription:
      "The success of these initiatives is attributed to the collaboration with local communities and experts. We've also implemented monitoring systems to track the growth and health of the newly planted trees, ensuring long-term sustainability.",
    additionalImages: [
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-1.jpg",
    ],
    category: "Sustainable Energy",
    image: "/images/blog-1.jpg",
    readingTime: "9 min read",
    tags: ["Renewable Energy", "Community Development", "Climate Action"],
  },
];