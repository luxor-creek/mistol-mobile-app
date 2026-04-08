import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, CheckCircle2, Circle } from 'lucide-react';
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

export function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Check Calgary weather forecast', completed: false, category: 'personal' },
    { id: '2', title: 'Have breakfast', completed: false, category: 'personal' },
    { id: '3', title: 'Wash the car', completed: true, category: 'personal' },
    { id: '4', title: 'Take Kaci to school', completed: false, category: 'work' },
    { id: '5', title: 'Review project documents', completed: false, category: 'work' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'personal' | 'work'>('all');
  const [newTaskText, setNewTaskText] = useState('');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskText,
        completed: false,
        category: selectedCategory === 'all' ? 'personal' : selectedCategory,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const filteredTasks = selectedCategory === 'all'
    ? tasks
    : tasks.filter(t => t.category === selectedCategory);

  const activeTasks = filteredTasks.filter(t => !t.completed);
  const completedTasks = filteredTasks.filter(t => t.completed);

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Yellow Header */}
      <div className="relative h-[205px] flex-shrink-0">
        <HeaderBackground />
        <div className="relative z-10 flex flex-col h-full pt-[60px] px-3 pb-4">
          {/* Title Bar */}
          <div className="flex gap-1 items-center w-full">
            <button
              onClick={() => navigate('/')}
              className="flex gap-2 h-[44px] items-center justify-center p-3 rounded-xl shrink-0 w-[44px]"
            >
              <ArrowLeft className="w-8 h-8 text-[#1f2121]" strokeWidth={2.5} />
            </button>
            <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
              My Tasks
            </div>
            <div className="opacity-0 w-[44px]" />
          </div>

          {/* Add Task Input */}
          <div className="mt-auto">
            <div className="bg-white rounded-[22px] p-4 shadow-sm">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  placeholder="Add a new task..."
                  className="flex-1 font-normal text-[#1f2121] text-base tracking-tight outline-none placeholder:text-[#a8b0b0]"
                />
                <button
                  onClick={addTask}
                  className="bg-[#daea69] w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <Plus className="w-5 h-5 text-[#1f2121]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter - Compact */}
      <div className="px-3 py-3 flex-shrink-0">
        <div className="flex gap-2">
          {[
            { value: 'all' as const, label: 'All' },
            { value: 'personal' as const, label: 'Personal' },
            { value: 'work' as const, label: 'Work' },
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-[#1f2121] text-white'
                  : 'bg-white text-[#595e5e]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-auto px-3 pb-[120px]">
        {/* Active Tasks */}
        {activeTasks.length > 0 && (
          <div className="mb-4">
            <div className="font-semibold text-[#1f2121] text-base tracking-tight mb-3">
              Active ({activeTasks.length})
            </div>
            <div className="flex flex-col gap-2">
              {activeTasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => navigate(`/tasks/${task.id}`)}
                  className="bg-white rounded-[18px] flex items-center gap-3.5 px-3.5 py-3 w-full active:scale-[0.98] transition-transform"
                >
                  <Circle className="w-6 h-6 text-[#a8b0b0] shrink-0" />
                  <div className="flex-1 text-left font-normal text-[#1f2121] text-base tracking-tight">
                    {task.title}
                  </div>
                  <div className="text-xs font-medium text-[#595e5e] bg-[#f1f6f6] px-2 py-1 rounded-lg">
                    {task.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div>
            <div className="font-semibold text-[#1f2121] text-base tracking-tight mb-3">
              Completed ({completedTasks.length})
            </div>
            <div className="flex flex-col gap-2">
              {completedTasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => navigate(`/tasks/${task.id}`)}
                  className="bg-white/50 rounded-[18px] flex items-center gap-3.5 px-3.5 py-3 w-full active:scale-[0.98] transition-transform"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1f2121] shrink-0" />
                  <div className="flex-1 text-left font-normal text-[#a8b0b0] text-base tracking-tight line-through">
                    {task.title}
                  </div>
                  <div className="text-xs font-medium text-[#a8b0b0] bg-[#f1f6f6] px-2 py-1 rounded-lg">
                    {task.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="font-normal text-[#a8b0b0] text-base">
              No tasks in this category
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
