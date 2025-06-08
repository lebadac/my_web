import { useState } from 'react';
import { Code, Brain, Eye, MessageSquare } from 'lucide-react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    all: [
      {
        id: 1,
        title: "Temporal to Spatial Knowledge Distillation for Real-time Fire Segmentation: An Approach involving Kolmogorov-Arnold Networks",
        categories: ["Computer Vision"],
        description: "Research 2-class fire detection (Fire/Not Fire) with focus on accuracy and real-time ",
        fullDescription: "Early and accurate fire detection is important, making fire detection systems essential for reducing damage and ensuring timely response. This work focuses on the use of semantic segmentation for accurate fire detection while meeting the real-time performance requirement. We employ a teacher-student framework, where the teacher model involves MobileNetV2 as a lightweight pretrained encoder, Kolmogorov-Arnold Networks (KANs) for adaptive representation learning, and a Long Short-Term Memory (LSTM) module for temporal awareness, all within a U-Net framework; and the same model, excluding the LSTM module, serves as the student to enable efficient deployment. We also create a new dataset from 57 fire videos including 2084 images and 605 non-fire images from multiple sources in different scenes. Assessed on the Chino et al. \cite{chino2015bowfire} dataset, the proposed architecture proves its leading performance compared to previous methods, reaching 81.63 in Mean IoU. Additionally, real-time detection also comes into play where it operates at 147.02 frame-per-second (FPS). Hence, this study contributes significantly to the accuracy and real-time processing issues for the real-time fire detection problem.",
        tech: ["Python", "TensorFlow", "KAN", "U-Net", "LSTM", "MobileNetV2", "Teacher-Student"],
        github: "https://github.com/lebadac/1301_Fire-Semantic-Segmentation",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Aspect-based Sentiment Analysis on Smartphone's Vietnamese Reviews",
        categories: ["NLP"],
        description: "Address aspect-based sentiment analysis to evaluate aspects and sentiment polarity of streaming phone reviews using Apache Kafka platform.",
        fullDescription: "There are tons of reviews generated daily on many e-commerce platforms. The analysis of that data brings huge benefits for both businesses and customers. This paper addresses the issue of aspect-based sentiment analysis to evaluate the aspects and sentiment polarity of smartphones's reviews streaming from the Apache Kafka platform. The streaming review will be the benchmark for the experiment, using the pre-trained language PhoBERT model to develop a detection and classification model. The model aims to extract aspects from reviews and classify the sentiment associated with each aspect. The experimental outcomes indicate that the PhoBERT-base model achieves a F1-score at 0.7, 0.82, 0.63 for Polarity, Category, Polarity\&Category detection tasks respectively.",
        tech: ["Python", "TensorFlow", "Keras", "Pandas", "PySpark", "Kafka", "PhoBERT"],
        github: "https://github.com/lebadac/ABSA_Mobilephone",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Dataset for Web Defacement Detection",
        categories: ["Machine Learning"],
        description: "Create a large dataset and use machine learning models for web defacement detection",
        fullDescription: "Website defacement, a cyber attack that involves unauthorized modification of the content or appearance of a website, poses significant risks to the security and reputation of its owners. In the era of technological development, traditional detection methods based on manual content comparison are gradually falling out of demand. In this study, we introduce machine learning-based models using content-based change detection to identify defacement attacks, achieving an accuracy of 94% with a Random Forest Classifier on 6,000 samples. Additionally, we provide a dataset of more than 700,000 safe and defaced URLs for future research.",
        tech: ["Python", "Selenium", "BeautifulSoup", "Flask", "Scikit-learn", "Text Processing (regex, URL parsing)", "pyngrok", "joblib", "pandas", "csv"],
        github: "https://github.com/lebadac/Dataset-for-Web-Defacement-Detection",
        image: "/placeholder.svg"
      },
      {
        id: 4,
        title: "CustomerBot",
        categories: ["Machine Learning", "NLP"],
        description: "Build a chatbot using rule-based logic, naive_bayes and recommendation techniques.",
        fullDescription: "Developed an intelligent chatbot system that combines rule-based logic, Naive Bayes classification, and recommendation techniques. The system can understand user intents, provide relevant responses, and make personalized recommendations based on user interactions and preferences.",
        tech: ["Python", "scikit-learn","TfidfVectorizer", "cosine_similarity", "naive_bayes", "difflib", "fuzzywuzzy", "html"],
        github: "https://github.com/lebadac/customerbot",
        image: "/placeholder.svg"
      },
      {
        id: 5,
        title: "Face Recognition Application using Raspberry Pi",
        categories: ["Computer Vision"],
        description: "Coming soon ...",
        fullDescription: "Coming soon ...",
        tech: ["Python"],
        github: "https://github.com/lebadac/chatbot-framework",
        image: "/placeholder.svg"
      },
      {
        id: 6,
        title: "Deploying diabetes detection on Android using machine learning",
        categories: ["Machine Learning"],
        description: "Build and deploy a machine learning model to detect diabetes risk on an Android app",
        fullDescription: "Coming soon ...",
        tech: ["scikit-learn", "lazypredict", "ydata profiling", "matplotlib", "seaborn", "fastapi", "uvicorn", "docker", "render", "kotlin"],
        appGithub: "https://github.com/lebadac/Diabetes_App",
        modelGithub: "https://github.com/lebadac/Diabetes_Model_ML",
        image: "/placeholder.svg"
      },
      {
        id: 7,
        title: "Smart insights into car sales across the U.S.: a business intelligence approach",
        categories: ["Machine Learning"],
        description: "Coming soon ...",
        fullDescription: "Coming soon ...",
        tech: ["python", "Power BI", "Excel", "MDX", "scikit-learn", "matplotlib", "clustering"],
        github: "https://github.com/lebadac/comningsoon",
        image: "/placeholder.svg"
      },
    ]
  };

  // Filter projects based on active category
  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return projects.all;
    }
    return projects.all.filter(project => 
      project.categories.some(category => 
        category.toLowerCase().replace(' ', '-') === activeCategory
      )
    );
  };

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'computer-vision', label: 'Computer Vision', icon: Eye },
    { id: 'machine-learning', label: 'Machine Learning', icon: Brain },
    { id: 'nlp', label: 'NLP', icon: MessageSquare },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Computer Vision':
        return 'bg-blue-100 text-blue-800';
      case 'Machine Learning':
        return 'bg-green-100 text-green-800';
      case 'NLP':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-gray-600">A showcase of my machine learning and AI projects</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-rainbow-gradient text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((category, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-justify">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2 text-justify">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-rainbow-primary/10 text-rainbow-primary text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show message when no projects in category */}
        {getFilteredProjects().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-justify">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
