import { Link } from 'react-router-dom';
import { Leaf, Calendar, Search, Globe, TreePine, BookOpen, Heart, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface BlogPost {
  id: string;
  title: string;
  firstDescription: string;
  date: string;
  author: string;
  secondDescription: string;
  additionalImages: string[];
  category: string;
  image: string;
  readingTime: string;
  tags: string[];
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically generate categories with counts
  const categories = [
    { name: 'Indigenous Knowledge', icon: BookOpen, count: posts.filter(p => p.category === 'Indigenous Knowledge').length },
    { name: 'Biodiversity Conservation', icon: TreePine, count: posts.filter(p => p.category === 'Biodiversity').length },
    { name: 'Climate Change', icon: Globe, count: posts.filter(p => p.category === 'Climate Change').length },
    { name: 'Youth Education', icon: Users, count: posts.filter(p => p.category === 'Education').length },
    { name: 'Sustainable Development', icon: Leaf, count: posts.filter(p => p.category === 'Sustainable Energy').length },
    { name: 'Community Action', icon: Heart, count: posts.filter(p => p.category === 'Community Action').length },
  ];

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

  // Replace the fetchPosts useEffect in your BlogPage with this:

useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // IMPORTANT: Match exactly what works in Homepage
      const q = query(collection(db, 'blogs'));
      
      const querySnapshot = await getDocs(q);
      const blogPosts: BlogPost[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // Only include active posts
        if (data.status === 'active' && !data.isDeleted) {
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

          blogPosts.push({
            id: doc.id,
            title: data.blog_title,
            firstDescription: data.first_description,
            date: formattedDate,
            author: data.blog_author,
            secondDescription: data.second_description,
            additionalImages: data.additionalImages || [],
            category: data.blog_category,
            image: data.mainImage || 'https://via.placeholder.com/600x400?text=Image+Not+Found',
            readingTime: data.reading_time,
            tags: data.tags || [],
          });
        }
      });
      
      console.log('BlogPage fetched posts:', blogPosts.length); // Debug
      setPosts(blogPosts);
      
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.firstDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Error</h2>
          <p className="text-gray-600 mt-2">{error}</p>
          <Link to="/" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">NEF Blog</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Insights, stories, and expert analysis on environmental conservation, indigenous knowledge, and sustainable development in Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full py-3 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors whitespace-nowrap"
                >
                  <cat.icon className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{cat.name} ({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
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

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">1</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Blog</h2>
          <p className="text-xl text-green-100 mb-8">
            Stay updated with the latest insights on environmental conservation and indigenous knowledge preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-4 px-6 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white placeholder:text-green-100"
            />
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;