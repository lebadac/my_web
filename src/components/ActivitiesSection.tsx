import { useState } from 'react';
import { Heart, GraduationCap, Trophy as TrophyIcon } from 'lucide-react';
const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState('volunteering');
  const activities = {
    volunteering: [{
      title: "Research Intern - FTISU Research",
      year: "2022–now",
      icon: "🧪",
      description: "Ongoing research training in fire detection systems using computer vision"
    },
    {
      title: "Member – UIT Book and Action Club",
      year: "2022–Now",
      icon: "📚",
      description: "Active member participating in reading campaigns and community outreach programs"
    }, {
      title: "UIT Summer Volunteer Campaign",
      year: "2022",
      icon: "☀️",
      description: "Participated in summer volunteer activities helping underprivileged communities"
    }],
    training: [ 
    {
      title: "30 days of code: The complete python bootcamp (Vietnamese) - Udemy",
      year: "12/2024",
      icon: "🐍",
      // description: "Completed advanced coursework in artificial intelligence and machine learning"
    },
    {
      title: "Software development with Scrum",
      year: "11/2024",
      icon: "🌀",
      // description: "Completed advanced coursework in artificial intelligence and machine learning"
    },
    {
      title: "Coursera: crash course on python",
      year: "08/2024",
      icon: "📘",
      // description: "Achieved third place in university bowling championship"
    },
    {
      title: "Coursera: Google ai essentials",
      year: "08/2024",
      icon: "🤖",
      // description: "Achieved third place in university bowling championship"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      year: "08/2023",
      icon: "☁️",
      // description: "Achieved third place in university bowling championship"
    },
    {
      title: "Coursera: Computational Thinking for Problem Solving",
      year: "10/2022",
      icon: "🧠",
      // description: "Achieved third place in university bowling championship"
    }],
    sports: [{
      title: "Bowling Tournament – Third Prize",
      year: "2024",
      icon: "🎳",
      description: "Achieved third place in university bowling championship"
    }, {
      title: "Sprint Tale Running Event",
      year: "2025",
      icon: "🏃",
      description: "Participated in annual running event promoting health and fitness"
    }]
  };
  const tabs = [{
    id: 'volunteering',
    label: 'Volunteering',
    icon: Heart
  }, {
    id: 'training',
    label: 'Training Courses',
    icon: GraduationCap
  }, {
    id: 'sports',
    label: 'Sports',
    icon: TrophyIcon
  }];
  return <section id="activities" className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Activities</h2>
          <p className="text-gray-600">My involvement in various activities and learning experiences</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map(tab => {
          const Icon = tab.icon;
          return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id ? 'bg-bosch-gradient text-white shadow-lg' : 'bg-white/80 text-gray-600 hover:bg-gray-100'}`}>
                <Icon size={18} />
                {tab.label}
              </button>;
        })}
        </div>

        {/* Timeline Content */}
        <div className="glass-card rounded-2xl p-8">
          <div className="space-y-6">
            {activities[activeTab as keyof typeof activities].map((activity, index) => <div key={index} className="timeline-item animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                      <span className="bg-bosch-gradient px-3 py-1 rounded-full text-sm font-medium text-rainbow-blue">
                        {activity.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ActivitiesSection;