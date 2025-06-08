import { X, Github } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  categories: string[];
  description: string;
  fullDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  modelGithub?: string;
  appGithub?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryColor = (category: string) => {
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
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold gradient-text text-justify">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.categories.map((category, idx) => (
              <span 
                key={idx}
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
              >
                {category}
              </span>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            {project.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.appGithub ? (
              <a
                href={project.appGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                App Code
              </a>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.modelGithub && (
              <a
                href={project.modelGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                Model Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
