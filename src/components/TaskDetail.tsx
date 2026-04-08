import { ArrowLeft, Share2, X } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: 'personal' | 'work';
  dueDate?: string;
}

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
  onDelete: () => void;
}

export function TaskDetail({ task, onClose, onUpdate, onDelete }: TaskDetailProps) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl shadow-2xl animate-slide-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h2 className="text-base font-semibold text-gray-900">Task Details</h2>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 hover:bg-red-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Title */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Title</label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => onUpdate({ ...task, title: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Description</label>
            <textarea
              value={task.description || ''}
              onChange={(e) => onUpdate({ ...task, description: e.target.value })}
              placeholder="Add a description..."
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Category</label>
            <div className="flex gap-2">
              <button
                onClick={() => onUpdate({ ...task, category: 'personal' })}
                className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all ${
                  task.category === 'personal'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => onUpdate({ ...task, category: 'work' })}
                className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all ${
                  task.category === 'work'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Work
              </button>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Due Date</label>
            <input
              type="date"
              value={task.dueDate || ''}
              onChange={(e) => onUpdate({ ...task, dueDate: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Status Toggle */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Status</label>
            <button
              onClick={() => onUpdate({ ...task, completed: !task.completed })}
              className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                task.completed
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {task.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
