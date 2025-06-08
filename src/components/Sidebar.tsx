import { useState } from 'react';
import { Menu, X, User, Briefcase, Calendar, Trophy, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}
const Sidebar = ({
  activeSection,
  onSectionChange
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [{
    id: 'about',
    label: 'About Me',
    icon: User
  }, {
    id: 'projects',
    label: 'Projects',
    icon: Briefcase
  }, {
    id: 'activities',
    label: 'Activities',
    icon: Calendar
  }, {
    id: 'achievements',
    label: 'Achievements',
    icon: Trophy
  }, {
    id: 'skills',
    label: 'Skills',
    icon: Code
  }, {
    id: 'contact',
    label: 'Contact',
    icon: Mail
  }];
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };
  return <>
      {/* Mobile Hamburger Button */}
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 md:hidden bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-200">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={cn("fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg z-40 transition-transform duration-300", "md:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rainbow-gradient flex items-center justify-center text-white text-2xl font-bold">
              <img src="/avatar.jpg" alt="Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Le Ba Dac</h2>
            <p className="text-sm text-rainbow-primary font-medium">AI Engineer Intern</p>
          </div>

          <nav className="space-y-2">
            {sections.map(section => {
            const Icon = section.icon;
            return <button key={section.id} onClick={() => handleSectionClick(section.id)} className={cn("w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200", activeSection === section.id ? "bg-rainbow-gradient text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:text-gray-800")}>
                  <Icon size={18} />
                  <span className="font-medium">{section.label}</span>
                </button>;
          })}
          </nav>
        </div>
      </aside>
    </>;
};
export default Sidebar;