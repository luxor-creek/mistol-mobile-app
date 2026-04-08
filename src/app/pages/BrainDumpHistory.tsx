import { useNavigate } from 'react-router';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface BrainDump {
  id: string;
  title: string;
  preview: string;
  date: string;
  time: string;
  wordCount: number;
}

export function BrainDumpHistory() {
  const navigate = useNavigate();

  const [brainDumps] = useState<BrainDump[]>([
    {
      id: '1',
      title: 'Product Ideas for Q2',
      preview: 'Been thinking about the new feature set we discussed. The user onboarding flow needs work, especially the first-time experience...',
      date: 'Today',
      time: '2:34 PM',
      wordCount: 847,
    },
    {
      id: '2',
      title: 'Meeting Notes - Strategy Call',
      preview: 'Key takeaways from the leadership meeting. Need to prioritize the mobile redesign and focus on retention metrics...',
      date: 'Yesterday',
      time: '11:22 AM',
      wordCount: 1243,
    },
    {
      id: '3',
      title: 'Random Thoughts',
      preview: 'Just a collection of ideas that came up during lunch. Worth exploring the AI integration possibilities...',
      date: 'Apr 6',
      time: '1:15 PM',
      wordCount: 432,
    },
    {
      id: '4',
      title: 'Project Retrospective',
      preview: 'Looking back at the last sprint. What went well: team collaboration, faster deployments. What needs improvement...',
      date: 'Apr 5',
      time: '4:50 PM',
      wordCount: 956,
    },
    {
      id: '5',
      title: 'Weekend Planning',
      preview: 'Need to organize the garage, finish reading that book, maybe start the garden project. Also should call mom...',
      date: 'Apr 4',
      time: '9:30 AM',
      wordCount: 215,
    },
  ]);

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white pt-[60px] pb-4 px-3 shrink-0">
        <div className="flex gap-1 items-center w-full mb-4">
          <button
            onClick={() => navigate('/chat')}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl tracking-tight">
            Brain Dump History
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>

        <p className="text-[#595e5e] text-sm tracking-tight">
          All your thoughts and notes in one place
        </p>
      </div>

      {/* Brain Dumps List */}
      <div className="flex-1 overflow-auto px-3 py-4 space-y-3">
        {brainDumps.map((dump) => (
          <button
            key={dump.id}
            onClick={() => {/* TODO: Navigate to specific brain dump */}}
            className="bg-white rounded-[16px] p-4 w-full text-left active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-[#1f2121] text-base tracking-tight flex-1 pr-2">
                {dump.title}
              </h3>
              <ChevronRight className="w-5 h-5 text-[#595e5e] shrink-0" strokeWidth={2} />
            </div>

            <p className="text-[#595e5e] text-sm tracking-tight leading-relaxed mb-3 line-clamp-2">
              {dump.preview}
            </p>

            <div className="flex items-center gap-3 text-[#a8b0b0] text-xs">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{dump.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                <span>{dump.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>{dump.wordCount} words</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom System Bar */}
      <div className="h-[34px] flex items-center justify-center pb-2 shrink-0">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
