
import { Code, Users, Brain, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const hardSkills = [
    { name: "Python", level: 90 },
    { name: "Scikit-learn", level: 90 },
    { name: "TensorFlow/Keras", level: 85 },
    { name: "PyTorch", level: 60 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Git", level: 90 },
  ];

  const softSkills = [
    { name: "Team Collaboration", level: 90 },
    { name: "Research & Documentation", level: 90 },
    { name: "Critical Thinking", level: 80 },
    { name: "Problem Solving", level: 80 },
    { name: "Agile & Scrum", level: 85 },
    { name: "Communication", level: 80 }
  ];

  const SkillCard = ({ title, skills, icon: Icon, gradient }: any) => (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg ${gradient}`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill: any, index: number) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="skill-progress">
              <div 
                className="skill-progress-bar animate-progress-fill"
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills</h2>
          <p className="text-gray-600">Technical expertise and soft skills that drive my success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCard
            title="Hard Skills"
            skills={hardSkills}
            icon={Code}
            gradient="bg-bosch-gradient"
          />
          
          <SkillCard
            title="Soft Skills"
            skills={softSkills}
            icon={Users}
            gradient="bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>

        {/* Additional Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center glass-card rounded-xl p-6">
            <Brain className="mx-auto mb-3 text-bosch-green" size={32} />
            <h4 className="font-semibold text-gray-800 mb-2">AI/ML Libraries</h4>
            <p className="text-sm text-gray-600">TensorFlow, PyTorch, Scikit-learn, Pandas</p>
          </div>
          
          <div className="text-center glass-card rounded-xl p-6">
            <Code className="mx-auto mb-3 text-bosch-blue" size={32} />
            <h4 className="font-semibold text-gray-800 mb-2">Programming</h4>
            <p className="text-sm text-gray-600">Python, R, SQL, C/C++, JavaScript, Kotlin</p>
          </div>
          
          <div className="text-center glass-card rounded-xl p-6">
            <Lightbulb className="mx-auto mb-3 text-bosch-teal" size={32} />
            <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
            <p className="text-sm text-gray-600">Docker, FastAPI, Git, Notion, LaTeX, Kafka</p>
          </div>
          
          <div className="text-center glass-card rounded-xl p-6">
            <Users className="mx-auto mb-3 text-purple-500" size={32} />
            <h4 className="font-semibold text-gray-800 mb-2">Methodologies</h4>
            <p className="text-sm text-gray-600">Agile, Scrum, Research, Documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
