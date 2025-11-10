
import React, { useState } from 'react';
import type { ProfileData, Comment } from './types';
import StudentView from './views/StudentView';
import VisitorView from './views/VisitorView';
import Header from './components/icons/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialData: ProfileData = {
  name: 'محمد كمال خليل',
  grade: 'الصف الأول المتوسط',
  personalPhoto: 'https://picsum.photos/seed/student/400/400',
  achievements: [
    { id: 1, text: 'إنشاء لعبة إلكترونية' },
    { id: 2, text: 'متفوق في الإلكترونيات' },
  ],
  skills: [
    { id: 1, text: 'الألعاب الإلكترونية' },
    { id: 2, text: 'كرة القدم' },
    { id: 3, text: 'كرة الطائرة' },
    { id: 4, text: 'السباحة' },
  ],
  favoriteSubjects: [
    { id: 1, text: 'العلوم' },
    { id: 2, text: 'الاجتماعيات' },
  ],
  comments: [
    { id: 1, author: 'أ. عبدالله', text: 'طالب مجتهد ومتميز في مادة العلوم، أتمنى له كل التوفيق.' },
    { id: 2, author: 'أ. فاطمة', text: 'لدى محمد شغف كبير بالتعلم والمشاركة، استمر يا بطل!' },
  ],
};

const App: React.FC = () => {
  const [isStudentView, setIsStudentView] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(initialData);

  const handleToggleView = () => {
      if(!isStudentView){
          const password = prompt("للوصول إلى وضع الطالب، يرجى إدخال كلمة المرور:");
          if (password === "1234") {
              setIsStudentView(true);
              toast.success('تم تسجيل الدخول بنجاح! مرحبًا يا محمد.');
          } else if(password !== null) {
              toast.error('كلمة المرور غير صحيحة.');
          }
      } else {
          setIsStudentView(false);
      }
  };

  const handleUpdateData = (newData: ProfileData) => {
    setProfileData(newData);
    toast.info('تم تحديث البيانات بنجاح!');
  };
  
  // قائمة الكلمات المحظورة لتصفية المحتوى البسيطة
  const blockedWords = ['كلمة_سيئة', 'محتوى_غير_لائق', 'إهانة', 'هجوم'];

  const containsBlockedWords = (text: string) => {
      const lowerCaseText = text.toLowerCase();
      // التحقق مما إذا كان النص يحتوي على أي من الكلمات المحظورة
      return blockedWords.some(word => lowerCaseText.includes(word.toLowerCase()));
  }

  const handleAddComment = (comment: Omit<Comment, 'id'>) => {
    // التحقق من المحتوى قبل إضافة التعليق
    if (containsBlockedWords(comment.author) || containsBlockedWords(comment.text)) {
        toast.error('يحتوي التعليق على كلمات غير مسموح بها ولن يتم نشره.');
        return; // منع إضافة التعليق
    }
    
    setProfileData(prevData => ({
      ...prevData,
      comments: [...prevData.comments, { ...comment, id: Date.now() }]
    }));
    toast.success('شكرًا لتعليقك!');
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      <Header 
        studentName={profileData.name} 
        isStudentView={isStudentView} 
        onToggleView={handleToggleView} 
      />
      <main className="container mx-auto p-4 md:p-8">
        {isStudentView ? (
          <StudentView data={profileData} onUpdate={handleUpdateData} />
        ) : (
          <VisitorView data={profileData} onAddComment={handleAddComment} />
        )}
      </main>
      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>تم تصميم هذا الموقع بكل حب &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;