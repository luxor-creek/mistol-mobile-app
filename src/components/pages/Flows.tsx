import { useNavigate } from 'react-router';
import { ArrowLeft, Zap, Coffee, Moon, Sun, Globe, Calendar, BarChart3, AlertCircle, Coffee as Cup, Sparkles, ChevronRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function Flows() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'gallery' | 'active'>('gallery');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Weekly Rituals', 'Meeting Prep', 'Reporting', 'Operations', 'Wellness & Life'];

  const flows = [
    {
      id: '1',
      title: 'Monday Morning Briefing',
      description: 'Start your week with a clear picture of what needs attention.',
      icon: Coffee,
      iconBg: 'bg-[#daea69]/20',
      iconColor: 'text-[#1f2121]',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['weekly', 'planning'],
    },
    {
      id: '2',
      title: 'Friday Weekly Recap',
      description: 'End your week with a summary of everything accomplished.',
      icon: Moon,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['weekly', 'review'],
    },
    {
      id: '3',
      title: 'Daily Standup Summary',
      description: "A quick morning snapshot of what's on your plate today.",
      icon: Sun,
      iconBg: 'bg-[#daea69]/20',
      iconColor: 'text-[#1f2121]',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['daily', 'planning'],
    },
    {
      id: '4',
      title: 'Meeting Prep Brief',
      description: 'Pull context from notes, projects, and tasks before any meeting.',
      icon: Globe,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Run once',
      badgeType: 'manual',
      tags: ['meeting', 'prep'],
    },
    {
      id: '5',
      title: 'Daily Meeting Prep (Auto)',
      description: 'Automatic prep briefs delivered before your calendar meetings.',
      icon: Calendar,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['meeting', 'calendar'],
    },
    {
      id: '6',
      title: 'Project Status Report',
      description: 'Generate a status report across all active projects.',
      icon: BarChart3,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      badge: 'Run once',
      badgeType: 'manual',
      tags: ['report', 'projects'],
    },
    {
      id: '7',
      title: 'Weekly Metrics Digest',
      description: "A data-driven summary of your week's productivity.",
      icon: BarChart3,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['metrics', 'weekly'],
    },
    {
      id: '8',
      title: 'Overdue Task Sweep',
      description: 'Find and flag all overdue tasks across every project.',
      icon: AlertCircle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      badge: 'Run once',
      badgeType: 'manual',
      tags: ['tasks', 'overdue'],
    },
    {
      id: '9',
      title: 'Hydration Reminders',
      description: 'Get a friendly text reminder to drink water throughout the day.',
      icon: Cup,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['wellness', 'health'],
    },
    {
      id: '10',
      title: 'Daily Horoscope',
      description: 'Your daily horoscope delivered as a text each morning.',
      icon: Sparkles,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['wellness', 'daily'],
    },
    {
      id: '11',
      title: 'Daily Bible Reading',
      description: 'A verse and brief reflection delivered to you each morning.',
      icon: Sun,
      iconBg: 'bg-[#daea69]/20',
      iconColor: 'text-[#1f2121]',
      badge: 'Set & forget',
      badgeType: 'recurring',
      tags: ['wellness', 'daily'],
    },
  ];

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white pt-[60px] pb-4 px-3 shrink-0">
        <div className="flex gap-1 items-center w-full mb-4">
          <button
            onClick={() => navigate('/')}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl tracking-tight flex items-center gap-2 ml-2">
            <Zap className="w-6 h-6 text-[#1f2121]" strokeWidth={2} fill="#daea69" />
            Flows
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>

        <p className="text-[#595e5e] text-sm tracking-tight mb-4">
          Pre-built automations you can activate in one click. Recurring or on-demand.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-4">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`font-medium text-base tracking-tight pb-2 relative ${
              activeTab === 'gallery' ? 'text-[#1f2121]' : 'text-[#595e5e]'
            }`}
          >
            Flow Gallery
            {activeTab === 'gallery' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#daea69] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`font-medium text-base tracking-tight pb-2 relative ${
              activeTab === 'active' ? 'text-[#1f2121]' : 'text-[#595e5e]'
            }`}
          >
            Active Flows
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-tight whitespace-nowrap shrink-0 transition-colors ${
                selectedFilter === filter
                  ? 'bg-[#daea69] text-[#1f2121]'
                  : 'bg-white border border-[#dae1e1] text-[#1f2121]'
              }`}
            >
              {filter === 'Weekly Rituals' && <Clock className="w-4 h-4 inline mr-1.5" strokeWidth={2} />}
              {filter === 'Meeting Prep' && <Calendar className="w-4 h-4 inline mr-1.5" strokeWidth={2} />}
              {filter === 'Reporting' && <BarChart3 className="w-4 h-4 inline mr-1.5" strokeWidth={2} />}
              {filter === 'Operations' && <Zap className="w-4 h-4 inline mr-1.5" strokeWidth={2} />}
              {filter === 'Wellness & Life' && <Sparkles className="w-4 h-4 inline mr-1.5" strokeWidth={2} />}
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-3 py-4 pb-[90px] space-y-3">
        {flows.map((flow) => (
          <button
            key={flow.id}
            className="bg-white rounded-[16px] p-4 w-full text-left flex items-start gap-4 active:scale-[0.98] transition-transform"
          >
            {/* Icon */}
            <div className={`${flow.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
              <flow.icon className={`w-6 h-6 ${flow.iconColor}`} strokeWidth={2} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[#1f2121] text-base tracking-tight mb-1">
                {flow.title}
              </h3>
              <p className="text-[#595e5e] text-sm tracking-tight mb-2">
                {flow.description}
              </p>

              {/* Badge and Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${
                    flow.badgeType === 'recurring'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {flow.badgeType === 'recurring' ? (
                    <Clock className="w-3 h-3" strokeWidth={2} />
                  ) : (
                    <Zap className="w-3 h-3" strokeWidth={2} />
                  )}
                  {flow.badge}
                </span>
                {flow.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs text-[#595e5e] bg-[#f1f6f6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-[#595e5e] shrink-0 mt-1" strokeWidth={2} />
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
