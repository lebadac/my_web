import { MapPin, Briefcase, Home, Download } from 'lucide-react';

const AboutSection = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add your CV file to the public folder
    link.download = 'Le_Ba_Dac_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 animate-fade-in">
          <span className="gradient-text">Le Ba Dac</span>
        </h1>
        <p className="text-xl text-center text-bosch-green font-semibold mb-8 animate-fade-in">
          AI Engineer Intern
        </p>

        {/* Download CV Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleDownloadCV}
            className="bg-rainbow-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a fourth-year student from the Advanced Program in Information Systems at the University of Information Technology, seeking a job related to Machine Learning and Deep Learning. With hands-on experience in various models, I am eager to apply my AI skills to real-world problems and continuously expand my knowledge alongside Bosch Global Software Technologies Vietnam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-rainbow-gradient p-4 rounded-lg text-white text-center">
              <Home className="mx-auto mb-2" size={20} />
              <p className="font-semibold">Residence</p>
              <p className="text-sm">Vietnam</p>
            </div>
            <div className="bg-rainbow-gradient p-4 rounded-lg text-white text-center">
              <Briefcase className="mx-auto mb-2" size={20} />
              <p className="font-semibold">Status</p>
              <p className="text-sm">Available to work</p>
            </div>
            <div className="bg-rainbow-gradient p-4 rounded-lg text-white text-center">
              <MapPin className="mx-auto mb-2" size={20} />
              <p className="font-semibold">Address</p>
              <p className="text-sm">HCM City</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
          <div className="relative">
            <div className="timeline-item">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    BSc in Information Systems
                  </h3>
                  <p className="text-bosch-green font-medium">
                    University of Information Technology, VNU-HCM
                  </p>
                  <p className="text-sm text-gray-600">2021 – 2026</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-bosch-gradient px-4 py-2 rounded-full text-sm font-semibold text-rainbow-blue">
                    GPA: 8.98/10
                  </span>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar animate-progress-fill" style={{
                    width: '75%'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
