import { Award, Trophy, Medal } from 'lucide-react';
const AchievementsSection = () => {
  const achievements = [{
    title: "Bosch Activator Scholarship – Third Prize, Talent Track",
    year: "2024",
    icon: Award,
    description: "Recognized for outstanding academic performance and potential in technology",
    color: "bg-yellow-500"
  }, {
    title: "Sinh viên 5 tốt – 3 consecutive years",
    year: "2022–2024",
    icon: Trophy,
    description: "Awarded for excellence in academics, social activities, and community service",
    color: "bg-blue-500"
  }, {
    title: "Bowling Tournament – Third Prize",
    year: "2024",
    icon: Medal,
    description: "Achieved third place in university-wide bowling championship",
    color: "bg-amber-600"
  }];
  return <section id="achievements" className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Achievements</h2>
          <p className="text-gray-600">Recognition and awards for academic and extracurricular excellence</p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return <div key={index} className="glass-card rounded-xl p-6 animate-fade-in hover:shadow-xl transition-all duration-300" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-start gap-6">
                  <div className={`${achievement.color} p-4 rounded-full text-white shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                      <span className="bg-bosch-gradient px-4 py-2 rounded-full text-sm font-medium text-rainbow-blue">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    
                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="skill-progress">
                        <div className="skill-progress-bar animate-progress-fill" style={{
                      width: '100%',
                      animationDelay: `${index * 0.3}s`
                    }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center glass-card rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center glass-card rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">8.98</div>
            <p className="text-gray-600">Current GPA</p>
          </div>
          <div className="text-center glass-card rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">4</div>
            <p className="text-gray-600">Scholarship</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AchievementsSection;