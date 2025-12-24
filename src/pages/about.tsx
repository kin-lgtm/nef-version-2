import React, { useEffect } from 'react';
import {
  Users,
  BookOpen,
  Globe,
  TreePine,
  Lightbulb,
  Shield,
} from 'lucide-react';

// Define interface for objectives
interface Objective {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const objectives: Objective[] = [
    {
      icon: TreePine,
      title: 'Environment Review & Policy',
      description:
        'Review progress in environmental fields and recommend necessary policies for sustainable development.',
    },
    {
      icon: Users,
      title: 'Community-Based Solutions',
      description: 'Follow community-based actions to solve identified environmental problems in Sri Lanka.',
    },
    {
      icon: BookOpen,
      title: 'Indigenous Knowledge Conservation',
      description: 'Protect indigenous knowledge, technology, and cultural heritage of Sri Lanka.',
    },
    {
      icon: Lightbulb,
      title: 'Training & Research',
      description: 'Identify areas for training, research, and technical assistance in environmental conservation.',
    },
    {
      icon: Globe,
      title: 'International Cooperation',
      description: 'Collaborate with regional and international organizations for environmental development.',
    },
    {
      icon: Shield,
      title: 'Youth Education',
      description: 'Focus on younger generation to cultivate environment-friendly habits among public.',
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About NEF</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              National Environmental Forum - Sri Lanka has premier environmental protection assembly, working to
              conserve nature for posterity since 2012.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Story Section */}
      <section className="py-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <img 
                src="/images/about-story.jpg" 
                alt="About NEF Story"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content on the right */}
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The National Environmental Forum (NEF) founded in 1999 as a voluntary non-profit non-governmental organization, on development, promotion and implement of environmental based principles; contriving towards last solution to the environmental problems in Sri Lanka through the community participation upon expert guidance. NEF manned by professionals and other citizens qualified in various environment related disciplines. Among them are senior university academics as well as officers attached to a number of national and private organizations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, NEF stands as Sri Lanka's premier environmental protection assembly, continuing our commitment to safeguarding our 
                  natural heritage for generations to come.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content on the left */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-green-800 mb-4 ">Our Vision</h2>
                <div className="rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Our vision represents our commitment to environmental stewardship, ensuring that Sri Lanka's rich
                    biodiversity and indigenous ecological knowledge are preserved for future generations.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-800 mb-4">Our Mission</h2>
                <div className=" rounded-xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To advise on promotion and development of environmental-based principles, working toward lasting
                    solutions to environmental problems in Sri Lanka through community participation and expert
                    guidance as a non-profit organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Image on the right */}
            <div className="flex-shrink-0">
              <img 
                src="/images/vision-mission.jpg" 
                alt="Vision & Mission"
                className="w-full h-96 rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Key Objectives</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF operates through comprehensive objectives that address environmental conservation, community
              engagement, and indigenous knowledge preservation.
            </h5>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-[#3c3c3c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 align-middle"
                >
                  <div className="p-3  w-fit mb-4 text-center">
                    <IconComponent className="h-8 w-8 text-green-600 " />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{objective.title}</h3>
                  <p className="text-white leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50 fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Join Our Environmental Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            Become part of Sri Lanka's premier environmental forum and contribute to preserving our natural
            heritage and indigenous knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Users className="h-5 w-5" />
              <span>Become a Member</span>
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;