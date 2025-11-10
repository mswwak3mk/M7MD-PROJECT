import React from 'react';
import type { ProfileData, Comment } from '../types';
import InfoCard from '../components/InfoCard';
import CommentSection from '../components/CommentSection';
import { GamepadIcon, LightbulbIcon, MedalIcon, ScienceIcon, UsersIcon } from '../components/icons/Icons';

interface VisitorViewProps {
  data: ProfileData;
  onAddComment: (comment: Omit<Comment, 'id'>) => void;
}

const skillIcons: { [key: string]: React.ReactNode } = {
    'الألعاب الإلكترونية': <GamepadIcon />,
    'كرة القدم': <MedalIcon />,
    'كرة الطائرة': <MedalIcon />,
    'السباحة': <MedalIcon />,
};

const subjectIcons: { [key: string]: React.ReactNode } = {
    'العلوم': <ScienceIcon />,
    'الاجتماعيات': <UsersIcon />,
};

const VisitorView: React.FC<VisitorViewProps> = ({ data, onAddComment }) => {
  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section id="about" className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-purple-900/20">
        <div className="relative group">
          <img
            src={data.personalPhoto}
            alt={data.name}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 transition-transform duration-500 group-hover:rotate-6"
          />
           <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="text-center md:text-right flex-1">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-2">{data.name}</h2>
          <p className="text-xl md:text-2xl text-cyan-400">{data.grade}</p>
          <p className="mt-4 text-gray-300 max-w-lg">طالب طموح وشغوف بالتكنولوجيا والرياضة. أسعى دائمًا لتعلم مهارات جديدة وتطوير نفسي في مختلف المجالات.</p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me-text" className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-900/20">
        <h2 className="text-3xl font-bold font-orbitron text-cyan-400 mb-4 text-center">عني</h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          أنا محمد كمال خليل، طالب في الصف الأول المتوسط. أحب استكشاف عالم التكنولوجيا والألعاب الإلكترونية، كما أنني لاعب نشيط في كرة القدم والسباحة. أسعى دائمًا للتفوق في دراستي واكتساب مهارات جديدة تساعدني على تحقيق أحلامي وطموحاتي المستقبلية.
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard title="إنجازاتي" items={data.achievements.map(a => a.text)} icon={<LightbulbIcon />} />
        <InfoCard title="مهاراتي" items={data.skills.map(s => s.text)} icon={<GamepadIcon />} itemIcons={skillIcons} />
        <InfoCard title="المواد المفضلة" items={data.favoriteSubjects.map(s => s.text)} icon={<ScienceIcon />} itemIcons={subjectIcons}/>
      </div>

      {/* Teacher Comments Section */}
      <CommentSection comments={data.comments} onAddComment={onAddComment} />
    </div>
  );
};

export default VisitorView;