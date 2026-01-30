import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  proficiency: number; // 0-100
}

const SkillCard = ({ icon, title, skills, proficiency }: SkillCardProps) => {
  return (
    <div className="bg-gradient-to-br from-deep-purple/30 to-purple-navy/60 backdrop-blur-sm p-6 rounded-lg border border-mauve/20 hover:shadow-lg hover:shadow-mauve/5 transition-all duration-300">
      <div className="text-mauve mb-4 flex items-center">
        <div className="w-10 h-10 rounded-lg bg-deep-purple/40 flex items-center justify-center mr-3 border border-mauve/20">
          {icon}
        </div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-mauve mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
      <div className="mt-4 w-full h-1.5 bg-deep-purple/40 rounded-full overflow-hidden">
        <div 
          className="h-full bg-mauve rounded-full transition-all duration-500"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;

