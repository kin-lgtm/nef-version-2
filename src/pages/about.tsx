import React from 'react';
import {
  Users,
  Target,
  Award,
  Calendar,
  MapPin,
  Leaf,
  BookOpen,
  Globe,
  Heart,
  TreePine,
  Droplets,
  Mountain,
  Facebook,
  Twitter,
  Instagram,
  Lightbulb,
  Shield,
} from 'lucide-react';
import Footer from '../components/footer'; // Adjust path as needed
import Navbar from '../components/navbar';

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

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-black/90 text-white py-20">
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

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Vision</h2>
              <div className="bg-green-100 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Our vision represents our commitment to environmental stewardship, ensuring that Sri Lanka's rich
                  biodiversity and indigenous ecological knowledge are preserved for future generations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <div className="bg-blue-100 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To advise on promotion and development of environmental-based principles, working toward lasting
                  solutions to environmental problems in Sri Lanka through community participation and expert
                  guidance as a non-profit organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 bg-gray-50">
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
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
            <button
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn More About Our Work</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default AboutPage;