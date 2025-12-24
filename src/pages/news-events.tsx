import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, Newspaper, PartyPopper, Megaphone, Award, Users, TreePine } from 'lucide-react';
import { newsEvents } from '../lib/newsEvents';

const NewsEventsPage = () => {
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
  const categories = [
    { name: 'Events', icon: PartyPopper, count: 10 },
    { name: 'News', icon: Newspaper, count: 8 },
    { name: 'Achievements', icon: Award, count: 5 },
    { name: 'Workshops', icon: Users, count: 7 },
    { name: 'Conferences', icon: Megaphone, count: 4 },
    { name: 'Conservation', icon: TreePine, count: 12 },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Events</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Stay connected with NEF's latest initiatives, upcoming events, and environmental conservation milestones across Sri Lanka.
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
                  placeholder="Search news & events..."
                  className="w-full py-3 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
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
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-120">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-green-600 text-white px-3 py-1 text-xs font-medium inline-block mb-3">
                      {item.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h2>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                    <div className="space-y-1 text-xs text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <Link to={`/news/${item.id}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold text-sm transition-all duration-300">
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
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">1</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-green-100 mb-8">
            Stay updated with the latest news and events on environmental conservation and indigenous knowledge preservation.
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

export default NewsEventsPage;