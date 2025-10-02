import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { newsEvents } from '../lib/newsEvents';

const NewsEventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the item by ID
  const item = newsEvents.find((p) => p.id === parseInt(id || '0'));

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">News/Event Not Found</h2>
          <p className="text-gray-600 mt-2">The news or event you are looking for does not exist.</p>
          <Link to="/news" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to News & Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to News & Events
          </Link>
        </div>
      </section>

      {/* Three-Column Content */}
      <section className="bg-gray-50 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content (Spans first 2 columns) */}
            <div className="col-span-2 space-y-8">
              <h1 className="text-4xl font-bold text-gray-800">{item.title}</h1>
              
              {/* Initial Image */}
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                  }}
                />
              </div>

              {/* First Description */}
              <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>

              {/* Additional Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.additionalImages.slice(0, 5).map((img, idx) => (
                  <div key={idx} className="w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${item.title} - Image ${idx + 1}`}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Second Description */}
              <p className="text-lg text-gray-700 leading-relaxed">{item.secondDescription}</p>
            </div>

            {/* Details Sidebar (Third column) */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Details</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <strong className="block text-sm">Date</strong>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.time && (
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong className="block text-sm">Time</strong>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <strong className="block text-sm">Location</strong>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  )}
                  <div className="pt-2">
                    <p>
                      <strong className="text-sm">Category:</strong> {item.category}
                    </p>
                    <p>
                      <strong className="text-sm">Type:</strong> {item.type}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm px-3 py-1 bg-green-600 text-white rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {item.category === 'Event' && (
                <div className="bg-green-800 p-6 rounded-lg shadow-sm text-white">
                  <h3 className="text-xl font-semibold mb-3">Register Now</h3>
                  <p className="text-sm mb-4">Secure your spot for this event</p>
                  <button className="w-full bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Register
                  </button>
                </div>
              )}
            </div>
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

export default NewsEventDetailPage;