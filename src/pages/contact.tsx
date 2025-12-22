import React, { useEffect } from 'react';
// Adjust path if using aliases (e.g., '@/components/Footer')
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Send 
} from 'lucide-react';

const ContactPage: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
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
    
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with the National Environmental Forum to collaborate, volunteer, or learn more about our initiatives.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Our Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-700">Address</h3>
                      <p className="text-gray-600">NEF National Center, Peradeniya, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-700">Email</h3>
                      <p className="text-gray-600">info@nef-srilanka.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-700">Phone</h3>
                      <p className="text-gray-600">+94 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Twitter className="h-6 w-6 text-white" />
                    </a>
                    <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Find Us on the Map</h2>
            <div className="aspect-video bg-gray-300 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d80.5954!3d7.2571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662e2c1a6739%3A0x3b80a2d6f7f5e1!2sUniversity%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk&markers=color:red%7Clabel:NEF%7C7.2571,80.5954"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Peradeniya Location"
              />
            </div>
          </div>
        </section>
      </main>
    
    </div>
  );
};

export default ContactPage;
