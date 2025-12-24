import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Calendar,
  TreePine,
  Droplets,
  Mountain,
  Bird,
  ArrowRight,
} from 'lucide-react';
import { collection, getDocs, query} from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

interface Objective {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Program {
  title: string;
  description: string;
  participants: string;
  link: string;
}

interface BlogPost {
  id: string;
  title: string;
  firstDescription: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readingTime: string;
}

const Homepage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  const heroSlides: HeroSlide[] = [
    {
      title: 'Conserving Nature for Future Generations',
      subtitle: 'Protecting Sri Lanka\'s Indigenous Environmental Heritage',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop',
    },
    {
      title: 'Community-Based Environmental Solutions',
      subtitle: 'Working with Local Communities for Sustainable Development',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&h=900&fit=crop',
    },
    {
      title: 'Indigenous Knowledge & Traditional Practices',
      subtitle: 'Preserving Ancient Wisdom for Modern Conservation',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&h=900&fit=crop',
    },
  ];

  const objectives: Objective[] = [
    {
      icon: TreePine,
      title: 'Forest Conservation',
      description: 'Protecting Sri Lanka\'s diverse forest ecosystems and endemic species through community engagement.',
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      description: 'Sustainable management of water resources using traditional and modern conservation techniques.',
    },
    {
      icon: Mountain,
      title: 'Biodiversity Protection',
      description: 'Conserving unique flora and fauna while supporting indigenous communities.',
    },
    {
      icon: Bird,
      title: 'Wildlife Conservation',
      description: 'Protecting endangered species through habitat restoration and community education.',
    },
  ];

  const programs: Program[] = [
    {
      title: 'Youth Environmental Education',
      description: 'Engaging younger generations in environmental conservation and indigenous knowledge preservation.',
      participants: '500+ Youth',
      link: 'https://www.sustainabilitydegrees.com/',
    },
    {
      title: 'Community Cooperatives',
      description: 'Supporting environmental cooperatives across Sri Lanka\'s 9 provinces.',
      participants: '50+ Communities',
      link: '#',
    },
    {
      title: 'Traditional Knowledge Documentation',
      description: 'Recording and preserving indigenous environmental practices and wisdom.',
      participants: '200+ Elders',
      link: '#',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const q = query(collection(db, 'blogs')); // Remove orderBy to test
        const querySnapshot = await getDocs(q);
        const posts: BlogPost[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.status === 'active' && !data.isDeleted) {
            // Handle different date formats
            let formattedDate: string;
            if (data.blog_date instanceof Timestamp) {
              formattedDate = data.blog_date.toDate().toLocaleDateString();
            } else if (data.blog_date instanceof Date) {
              formattedDate = data.blog_date.toLocaleDateString();
            } else if (typeof data.blog_date === 'string') {
              formattedDate = new Date(data.blog_date).toLocaleDateString();
            } else {
              formattedDate = 'Unknown Date';
            }

            posts.push({
              id: doc.id,
              title: data.blog_title,
              firstDescription: data.first_description,
              date: formattedDate,
              author: data.blog_author,
              category: data.blog_category,
              image: data.mainImage || 'https://via.placeholder.com/600x400?text=Image+Not+Found',
              readingTime: data.reading_time,
            });
          }
        });
        setBlogPosts(posts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-globe {
          animation: bounce 3s ease-in-out infinite;
          mix-blend-mode: color-dodge;
          
          filter: drop-shadow(0 0 30px rgba(24, 231, 103, 5));
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #49f574ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-text-enter {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-600 via-green-900 to-green-600">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-600/20 to-transparent"></div>
        </div>

        {/* Static Globe and Hand Graphic */}
        <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute right-[5%] bottom-[10%] w-[50%] max-w-[700px]">
            {/* Hand and Globe Container */}
            <div className="relative w-full aspect-square">
              {/* Hand Image - Static */}
              <img
                src="/images/hand.png"
                alt="Hand"
                className="absolute w-full h-full object-contain mt-50 ml-25"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Globe Image - Animated with bounce and color-dodge */}
              <img
                src="./images/globe.png"
                alt="Globe"
                className="hero-globe absolute right-[10%] top-[20%] w-[60%] h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen">
          <div className="w-full max-w-2xl py-20">
            <div key={currentSlide} className="hero-text-enter">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                {currentSlideData.title.split(' ').map((word, i) => {
                  const highlightWords = ['Nature', 'Environmental', 'Indigenous', 'Community-Based', 'Knowledge'];
                  return highlightWords.some(hw => word.includes(hw.split('-')[0])) ? (
                    <span key={i} className="text-gradient">{word} </span>
                  ) : (
                    <span key={i}>{word} </span>
                  );
                })}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="bg-gradient-to-br from-blue-600/50 to-green-600/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 ">
                <span>Learn More</span>
              
              </Link>
              
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        
      </div>

      {/* Vision Section */}
      {/* <section className="py-16 bg-gradient-to-br from-green-600/10 to-green-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Vision</h2>
            <h5 className="text-xl text-green-900">Lets conserve the nature for the posterity</h5>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Protection</h3>
              <p className="text-gray-600">
                Promoting sustainable environmental practices across Sri Lanka's diverse ecosystems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Working with local communities to implement environment-friendly solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Indigenous Knowledge</h3>
              <p className="text-gray-600">
                Preserving traditional ecological knowledge and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Key Objectives */}
      <section className="py-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Key Objectives</h2>
            <h5 className="text-xl text-green-900 max-w-3xl mx-auto">
              Our comprehensive approach to environmental conservation focuses on protecting Sri Lanka's natural heritage
              while empowering local communities.
            </h5>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-full w-fit mb-4 group-hover:bg-green-200 transition-colors">
                  <objective.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{objective.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 text-white bg-[#3c3c3c] fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <h5 className="text-xl text-green-100 max-w-3xl mx-auto">
              Implementing practical solutions through community-driven environmental initiatives.
            </h5>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 text-green-300" />
                  <span className="bg-green-600 px-3 py-2 text-sm font-medium">{program.participants}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-green-100 mb-4">{program.description}</p>
                <a 
                    href={program.link}
                    target={program.link.startsWith('http') ? '_blank' : '_self'}
                    rel={program.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-green-300 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                  >
                    <span>Learn More</span>
                    
                  </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Latest from Our Blog</h2>
            <h5 className="text-xl text-green-900 max-w-3xl mx-auto">
              Stay updated with insights on environmental conservation and indigenous knowledge preservation.
            </h5>
          </div>

          {loadingBlogs ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative h-96">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="bg-green-600 text-white px-3 py-1 text-xs font-medium inline-block mb-3">
                          {post.category}
                        </div>
                        <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                        <p className="text-gray-200 text-sm mb-4 line-clamp-2">{post.firstDescription}</p>
                        <div className="flex items-center justify-between text-xs text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readingTime}</span>
                        </div>
                        <div className="flex justify-center mt-10">
                          <Link to={`/blog/${post.id}`}>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 font-semibold text-sm transition-all duration-300">
                              KNOW MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Blogs Button */}
              <div className="text-center mt-12">
                <Link to="/blog" className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                  <span>View All Blog Posts</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      

      {/* Footer */}
   
    </div>
  );
};

export default Homepage;