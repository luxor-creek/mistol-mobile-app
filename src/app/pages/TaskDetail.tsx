import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Check, Edit2, Share2, Calendar } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: 'personal' | 'work';
  dueDate?: string;
}

function HeaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute bg-[#daea69] inset-0" />
      <div className="absolute left-[106px] w-[456px] h-[456px] top-[-110px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-transparent to-white/70 h-[136px] rounded-full w-[509px]" />
        </div>
      </div>
      <div className="absolute left-[-35px] w-[553px] h-[553px] top-[-158px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-transparent to-white/70 h-[171px] rounded-full w-[610px]" />
        </div>
      </div>
    </div>
  );
}

export function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock task data - in real app, fetch based on id
  const task: Task = {
    id: id || '1',
    title: 'Check Calgary weather forecast',
    description: 'Check the weekly weather forecast to plan outdoor activities for the weekend.',
    completed: false,
    category: 'personal',
    dueDate: '2026-04-10',
  };

  const handleMarkClosed = () => {
    // Toggle completion status
    console.log('Mark as closed');
    navigate('/tasks');
  };

  const handleEdit = () => {
    console.log('Edit task');
  };

  const handleShare = () => {
    console.log('Share task');
  };

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Yellow Header */}
      <div className="relative h-[140px] flex-shrink-0">
        <HeaderBackground />
        <div className="relative z-10 flex flex-col h-full pt-[60px] px-3 pb-4">
          {/* Title Bar */}
          <div className="flex gap-1 items-center w-full">
            <button
              onClick={() => navigate('/tasks')}
              className="flex gap-2 h-[44px] items-center justify-center p-3 rounded-xl shrink-0 w-[44px]"
            >
              <ArrowLeft className="w-8 h-8 text-[#1f2121]" strokeWidth={2.5} />
            </button>
            <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
              Task Details
            </div>
            <div className="opacity-0 w-[44px]" />
          </div>
        </div>
      </div>

      {/* Task Content */}
      <div className="flex-1 overflow-auto px-3 pb-[120px]">
        {/* Task Title */}
        <div className="bg-white rounded-[22px] p-2.5 mb-3 mt-4">
          <div className="flex items-start gap-1.5">
            <button
              onClick={handleMarkClosed}
              className="flex-shrink-0 mt-0.5"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                task.completed ? 'bg-[#1f2121] border-[#1f2121]' : 'border-[#a8b0b0]'
              }`}>
                {task.completed && <Check className="w-3 h-3 text-white" />}
              </div>
            </button>
            <div className="flex-1">
              <div className="font-semibold text-[#1f2121] text-lg tracking-tight leading-tight mb-1">
                {task.title}
              </div>
              <div className="inline-block text-[10px] font-medium text-[#595e5e] bg-[#f1f6f6] px-2 py-1 rounded-lg">
                {task.category}
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-[22px] p-5 mb-3">
          <div className="font-semibold text-[#1f2121] text-lg tracking-tight mb-3">
            Details
          </div>
          <div className="font-normal text-[#595e5e] text-base leading-relaxed">
            {task.description || 'No details provided'}
          </div>
        </div>

        {/* Due Date Section */}
        <div className="bg-white rounded-[22px] p-5 mb-3">
          <div className="font-semibold text-[#1f2121] text-lg tracking-tight mb-3">
            Due Date
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#daea69] rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#1f2121]" />
            </div>
            <div className="font-normal text-[#1f2121] text-base">
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'No due date set'}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={handleMarkClosed}
            className="bg-[#daea69] rounded-[18px] flex items-center justify-center gap-3 px-5 py-4 w-full active:scale-[0.98] transition-transform"
          >
            <Check className="w-5 h-5 text-[#1f2121]" />
            <span className="font-semibold text-[#1f2121] text-base">
              {task.completed ? 'Mark as Open' : 'Mark as Closed'}
            </span>
          </button>

          <button
            onClick={handleEdit}
            className="bg-white rounded-[18px] flex items-center justify-center gap-3 px-5 py-4 w-full active:scale-[0.98] transition-transform border border-[#e5e5e5]"
          >
            <Edit2 className="w-5 h-5 text-[#1f2121]" />
            <span className="font-semibold text-[#1f2121] text-base">
              Edit Task
            </span>
          </button>

          <button
            onClick={handleShare}
            className="bg-white rounded-[18px] flex items-center justify-center gap-3 px-5 py-4 w-full active:scale-[0.98] transition-transform border border-[#e5e5e5]"
          >
            <Share2 className="w-5 h-5 text-[#1f2121]" />
            <span className="font-semibold text-[#1f2121] text-base">
              Share Task
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
