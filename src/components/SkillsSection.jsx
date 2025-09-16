import { Code, CodeIcon, CodeXml } from 'lucide-react';
import { useState } from 'react';

const skills = [
  //Frontend
  { name: 'HTML/CSS', icon: '/icons/html5.svg', category: 'frontend' },
  {
    name: 'JavaScript',
    icon: '/icons/javascript.svg',
    category: 'frontend',
  },
  { name: 'React', icon: '/icons/react.svg', category: 'frontend' },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    category: 'frontend',
  },
  {
    name: 'TailwindCSS',
    icon: '/icons/tailwindcss.svg',
    category: 'frontend',
  },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'frontend' },

  //Backend
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'backend' },
  {
    name: 'Express',
    icon: '/icons/expressjs.svg',
    category: 'backend',
  },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'backend' },

  //Tools
  { name: 'Git/Github', icon: '/icons/github.svg', category: 'tools' },
  { name: 'VS Code', icon: '/icons/vscode.svg', category: 'tools' },
  { name: 'figma', icon: '/icons/figma.svg', category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setactiveCategory] = useState('all');

  const filteredskills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setactiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bd-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredskills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className=" mb-4 text-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="flex justify-center ">
                <img src={skill.icon} alt="" className=" w-20 h-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
