import { useEffect } from 'react';
import { Calendar, MapPin, Globe, Heart } from 'lucide-react';

const StoryPage = () => {
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

  const founderMembers = [
    {
      name: "Mr. Sumedha Manjula Weerawardhana",
      position: "President & Founder",
      department: "Department of Philosophy & Psychology, Faculty of Arts, University of Peradeniya",
      role: "The President",
      image: "/images/team-5.png",
    },
    {
      name: "Mr. Amitha Bandara",
      position: "Secretary & Founder",
      location: "Kehelwala, Kiribathkumbura",
      role: "Secretary",
      image: "/images/team-2.jpeg",
    },
    {
      name: "Herath Mudiyanselage Punchi Banda Herath",
      position: "Treasurer & Founder",
      location: "Hantana Place, Kandy",
      role: "Treasurer",
      image: "/images/team-3.jpg",
    }
  ];

  const journeyMilestones = [
    { 
      year: 2012, 
      title: "The Beginning", 
      description: "Founded on November 1st by passionate environmental advocates at University of Peradeniya", 
      icon: Calendar 
    },
    { 
      year: 2014, 
      title: "Expansion", 
      description: "Established presence across all 9 provinces with dedicated coordinators", 
      icon: MapPin 
    },
    { 
      year: 2017, 
      title: "Community Partnership", 
      description: "Partnered with Hantana Conservation Society for local environmental initiatives", 
      icon: Heart 
    },
    { 
      year: 2024, 
      title: "National Impact", 
      description: "1000+ active members driving change with 50+ projects completed nationwide", 
      icon: Globe 
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Story NEF</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              National Environmental Forum - Sri Lanka has premier environmental protection assembly, working to conserve nature for posterity since 2012.
            </p>
          </div>
        </div>
      </div>

      {/* Journey & Achievements Section */}
      <div className="bg-gradient-to-br from-slate-50 to-green-50 fade-in-section">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            

            {/* Grid Timeline with Image */}
            <div className="flex gap-12 items-center">
              {/* Image on the left */}
              <div className="flex-shrink-0 w-1/3">
                <img 
                  src="/logo.JPG" 
                  alt="NEF Journey"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Timeline cards on the right */}
              <div className="flex-1 grid grid-cols-2 gap-6">
                {journeyMilestones.map((milestone) => {
                  
                  return (
                    <div 
                      key={milestone.year} 
                      className="bg-[#3c3c3c] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0">
                        
                          <span className="text-lg font-semibold text-green-600 uppercase tracking-wide">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Founding Members */}
      <section className="mt-2 mb-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Founding Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lankas natural heritage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {founderMembers.map((founder, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                <div className="text-center">
                  {founder.image && (
                    <div className="mb-4">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-48 h-64 mx-auto object-cover shadow-md"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{founder.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{founder.position}</p>
                  {founder.department && (
                    <p className="text-sm text-gray-600 mb-2">{founder.department}</p>
                  )}
                  {founder.location && (
                    <p className="text-sm text-gray-600 mb-2">{founder.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;