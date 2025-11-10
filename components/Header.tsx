
import React from 'react';
import { UserIcon, EyeIcon } from './icons/Icons';

interface HeaderProps {
  studentName: string;
  isStudentView: boolean;
  onToggleView: () => void;
}

const Header: React.FC<HeaderProps> = ({ studentName, isStudentView, onToggleView }) => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-center md:text-right">
          <h1 className="text-xl md:text-2xl font-bold text-cyan-400 font-orbitron tracking-wider">ملف إنجاز الطالب</h1>
          <p className="text-md md:text-lg text-white">{studentName}</p>
        </div>
        <button
          onClick={onToggleView}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-md shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {isStudentView ? <EyeIcon /> : <UserIcon />}
          <span className="hidden md:inline">{isStudentView ? 'عرض كزائر' : 'وضع الطالب'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
