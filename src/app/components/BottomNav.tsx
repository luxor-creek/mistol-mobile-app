import { useNavigate, useLocation } from 'react-router';
import { CheckSquare, FileText, MessageCircle, Brain } from 'lucide-react';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/tasks', label: 'Tasks', icon: CheckSquare },
    { path: '/files', label: 'Files', icon: FileText },
    { path: '/chat', label: 'Brain Dump', icon: Brain },
    { path: '/text-chat', label: 'Chat', icon: MessageCircle },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e5e5e5]">
      <div className="flex items-center justify-around px-4 pt-2 pb-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <item.icon
                className={`w-6 h-6 ${isActive ? 'text-[#1f2121]' : 'text-[#a8b0b0]'}`}
              />
              <span className={`text-xs font-medium ${isActive ? 'text-[#1f2121]' : 'text-[#a8b0b0]'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* System Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
