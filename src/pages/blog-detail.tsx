import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface BlogPost {
  id: string; // Changed from number to string
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

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError('Invalid blog ID');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
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

          setPost({
             id: docSnap.id,  // Use string ID directly
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
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Blog Post Not Found</h2>
          <p className="text-gray-600 mt-2">{error || 'The blog post you are looking for does not exist.'}</p>
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
              <p className="text-lg text-gray-700 leading-relaxed">{post.firstDescription}</p>

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