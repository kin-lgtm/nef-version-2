import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../lib/blogPosts';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the post by ID
  const post = blogPosts.find((p) => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Blog Post Not Found</h2>
          <p className="text-gray-600 mt-2">The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Back Button and Title */}
      <section className="py-8 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
          </Link>
        </div>
      </section>

      {/* Three-Column Content */}
      <section className="bg-gray-50 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content (Spans first 2 columns) */}
            <div className="col-span-2 space-y-8">
              <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
              {/* Initial Image */}
              <div className="w-full h-96 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                  }}
                />
              </div>

              {/* First Description */}
              <p className="text-lg text-gray-700 leading-relaxed">{post.description}</p>

              {/* Additional Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.additionalImages.slice(0, 5).map((img, idx) => (
                  <div key={idx} className="w-full h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={`${post.title} - Image ${idx + 1}`}
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
              <p className="text-lg text-gray-700 leading-relaxed">{post.secondDescription}</p>
            </div>

            {/* Post Details (Third column) */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Details</h3>
                <div className="text-gray-600 space-y-2">
                  <p>
                    <strong>Date:</strong> {post.date}
                  </p>
                  <p>
                    <strong>Author:</strong> {post.author}
                  </p>
                  <p>
                    <strong>Reading Time:</strong> {post.readingTime}
                  </p>
                  <p>
                    <strong>Category:</strong> {post.category}
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm px-2 py-1 bg-green-600 text-white rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

export default BlogDetailPage;