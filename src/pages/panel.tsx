import React, { useEffect } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
// Adjust path if using aliases (e.g., '@/components/Footer')

interface PanelMember {
  name: string;
  role: string;
  expertise: string;
  department: string;
  image: string;
  facebook: string;
  linkedin: string;
  x: string;
  isChairperson?: boolean;
}

const NEFPanelPage: React.FC = () => {
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
  const panelMembers: PanelMember[] = [
    // Top Row: Chairperson
    {
      name: "Mr. Indika Karunarathne",
      role: "Chairperson",
      expertise: "Leadership & Environmental Governance",
      department: "Environmental Policy & Administration",
      image: "/images/team-1.jfif", // Placeholder; replace with actual image
      facebook: "#",
      linkedin: "#",
      x: "#",
      isChairperson: true, // Flag for layout
    },
    // Bottom Row: Core Members (only 4 as specified; others can be added)
    {
      name: "Dr. Ruchira Somaweera",
      role: "Core Member",
      expertise: "Strategic Conservation & Ecology",
      department: "Zoology / Botany",
      image: "/images/team-2.jpeg",
      facebook: "https://facebook.com/ruchira.somaweera",
      linkedin: "https://linkedin.com/in/ruchira-somaweera",
      x: "https://x.com/ruchirasomaweera",
    },
    {
      name: "Prof. Gamini Pushpakumara",
      role: "Core Member",
      expertise: "Forest Ecology & Habitat Restoration",
      department: "Crop Science / Botany",
      image: "/images/team-3.jpg",
      facebook: "#",
      linkedin: "https://linkedin.com/in/gamini-pushpakumara",
      x: "#",
    },
    {
      name: "Prof. Induka Werellagama",
      role: "Core Member",
      expertise: "Environmental Engineering & Waste Management",
      department: "Civil Engineering / Water Engineering",
      image: "/images/team-4.jpg",
      facebook: "#",
      linkedin: "https://linkedin.com/in/induka-werellagama",
      x: "#",
    },
    {
      name: "Dr. Sumedha Weerawardena",
      role: "Core Member",
      expertise: "Community Engagement & Sociology",
      department: "Sociology / Environmental Studies",
      image: "/images/team-5.png",
      facebook: "#",
      linkedin: "#",
      x: "#",
    },
    // Bottom Row: Core Members (only 4 as specified; others can be added)
    
    
    
    
    // Add more core members if needed (e.g., for Biodiversity & Wildlife Management)
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">NEF Panel</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Meet the dedicated panel members leading the National Environmental Forum.
            </p>
          </div>
        </div>
      </div>

      {/* Panel Composition */}
      <section className="py-16 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Panel Composition NEF</h2>
            <h5 className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEF was established on November 1st, 2012, by visionary environmental advocates committed to preserving Sri Lanka's natural heritage.
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* Single column for chairperson */}
            {/* First Row: Chairperson (centered) */}
            {panelMembers.filter(member => member.role === "Chairperson").map((member, index) => (
              <div key={index} className="mx-auto max-w-xs"> {/* Centered with max width */}
                <div className="">
                  <div className="text-center">
                    <div className="w-full h-100 overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={`${member.name}'s profile`}
                        width={300}
                        height={600} // 1:2 aspect ratio for consistency with core members
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.jpg';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-gray-500 font-medium mb-2">{member.role} - {member.expertise}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Facebook className="h-6 w-6 text-white" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Twitter className="h-6 w-6 text-white" />
                      </a>
                      <a href={member.x} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                        <Instagram className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second and Third Rows: 8 Core Members (2 rows of 4) */}
          <div className="mt-10 grid md:grid-cols-4 gap-12">
            {panelMembers.filter(member => member.role === "Core Member").slice(0, 8).map((member, index) => (
              <div key={index} className="">
                <div className="text-center">
                  <div className="w-full h-100 overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={`${member.name}'s profile`}
                      width={300}
                      height={600} // 1:2 aspect ratio
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-2">{member.expertise}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Twitter className="h-6 w-6 text-white" />
                    </a>
                    <a href={member.x} target="_blank" rel="noopener noreferrer" className="bg-blue-900 p-2 rounded-full hover:bg-green-600 transition-colors">
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NEFPanelPage;