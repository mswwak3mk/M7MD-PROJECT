
import React from 'react';

interface InfoCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  itemIcons?: { [key: string]: React.ReactNode };
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, icon, itemIcons }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 via-purple-900/10 to-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-lg shadow-purple-900/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-cyan-400">{icon}</div>
        <h3 className="text-2xl font-bold font-orbitron text-cyan-400">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-lg transition-colors hover:bg-gray-700/60">
            <span className="text-purple-400">{itemIcons ? itemIcons[item] || '◈' : '◈'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;