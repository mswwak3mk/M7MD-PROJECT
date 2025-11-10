
import React, { useState } from 'react';
import type { Comment } from '../types';
import { ChatAltIcon } from './icons/Icons';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (comment: Omit<Comment, 'id'>) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      setError('يرجى ملء جميع الحقول.');
      return;
    }
    onAddComment({ author, text });
    setAuthor('');
    setText('');
    setError('');
  };

  return (
    <section id="comments" className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-900/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-cyan-400"><ChatAltIcon /></div>
        <h2 className="text-3xl font-bold font-orbitron text-cyan-400">آراء المعلمين</h2>
      </div>

      <div className="space-y-6 mb-8">
        {comments.length > 0 ? comments.map(comment => (
          <div key={comment.id} className="bg-gray-700/40 p-4 rounded-lg border-l-4 border-cyan-400">
            <p className="text-gray-200 mb-2">"{comment.text}"</p>
            <p className="text-right text-sm font-bold text-purple-400">- {comment.author}</p>
          </div>
        )) : <p className="text-gray-400">لا توجد تعليقات بعد. كن أول من يترك تعليقًا!</p>}
      </div>

      <div className="border-t border-purple-500/30 pt-6">
        <h3 className="text-xl font-bold mb-4 text-white">أضف تعليقًا</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">الاسم</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-gray-900/70 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="اسم المعلم"
            />
          </div>
          <div>
            <label htmlFor="commentText" className="block text-sm font-medium text-gray-300 mb-1">التعليق</label>
            <textarea
              id="commentText"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              className="w-full bg-gray-900/70 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="اكتب ملاحظاتك هنا..."
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-md shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            إرسال التعليق
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentSection;
