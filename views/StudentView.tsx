
import React, { useState, useRef } from 'react';
import type { ProfileData, ListItem } from '../types';
import { PlusIcon, TrashIcon, UploadIcon } from '../components/icons/Icons';

interface StudentViewProps {
  data: ProfileData;
  onUpdate: (newData: ProfileData) => void;
}

const StudentView: React.FC<StudentViewProps> = ({ data, onUpdate }) => {
  const [editableData, setEditableData] = useState<ProfileData>(data);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newData = { ...editableData, personalPhoto: event.target?.result as string };
        setEditableData(newData);
        onUpdate(newData);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddItem = (category: keyof ProfileData) => {
    const text = prompt(`أضف عنصرًا جديدًا في قسم "${getCategoryName(category)}":`);
    if (text) {
      const currentItems = editableData[category] as ListItem[];
      const newItem: ListItem = { id: Date.now(), text };
      const newData = { ...editableData, [category]: [...currentItems, newItem] };
      setEditableData(newData);
      onUpdate(newData);
    }
  };
  
  const handleRemoveItem = (category: keyof ProfileData, id: number) => {
    if (window.confirm('هل أنت متأكد من أنك تريد حذف هذا العنصر؟')) {
      const currentItems = editableData[category] as ListItem[];
      const updatedItems = currentItems.filter(item => item.id !== id);
      const newData = { ...editableData, [category]: updatedItems };
      setEditableData(newData);
      onUpdate(newData);
    }
  };
  
  const getCategoryName = (category: keyof ProfileData) => {
      switch (category) {
          case 'achievements': return 'الإنجازات';
          case 'skills': return 'المهارات';
          case 'favoriteSubjects': return 'المواد المفضلة';
          default: return '';
      }
  }

  const renderEditableList = (category: 'achievements' | 'skills' | 'favoriteSubjects') => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-lg shadow-purple-900/20">
      <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-4">{getCategoryName(category)}</h3>
      <ul className="space-y-3 mb-4">
        {(editableData[category] as ListItem[]).map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
            <span>{item.text}</span>
            <button onClick={() => handleRemoveItem(category, item.id)} className="text-red-500 hover:text-red-400">
                <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem(category)} className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors">
        <PlusIcon /> إضافة
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-white font-orbitron">لوحة التحكم</h2>
      
      {/* Photo Editor */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg shadow-purple-900/20">
        <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-4">الصورة الشخصية</h3>
        <img
          src={editableData.personalPhoto}
          alt={editableData.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 mx-auto mb-4"
        />
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePhotoChange} className="hidden" />
        <button onClick={() => fileInputRef.current?.click()} className="flex justify-center items-center gap-2 mx-auto px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors">
            <UploadIcon /> تغيير الصورة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderEditableList('achievements')}
        {renderEditableList('skills')}
        {renderEditableList('favoriteSubjects')}
      </div>
    </div>
  );
};

export default StudentView;