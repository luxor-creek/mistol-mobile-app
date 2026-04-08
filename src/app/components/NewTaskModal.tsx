import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

interface NewTaskModalProps {
  onClose: () => void;
  onSave: (task: {
    title: string;
    description: string;
    category: 'personal' | 'work';
    dueDate: string;
  }) => void;
}

export function NewTaskModal({ onClose, onSave }: NewTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'personal' | 'work'>('personal');
  const [dueDate, setDueDate] = useState('');

  const handleSave = () => {
    if (title.trim()) {
      onSave({ title, description, category, dueDate });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-end">
      <div className="w-full bg-white rounded-t-3xl shadow-2xl animate-slide-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <h2 className="text-base font-semibold text-gray-900">New Task</h2>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
          >
            Save
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Title */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900"
              autoFocus
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details..."
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-gray-500 block mb-2">Category</label>
            <div className="flex gap-2">
              <button
                onClick={() => setCategory('personal')}
                className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all ${
                  category === 'personal'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setCategory('work')}
                className={`flex-1 py-3 rounded-xl font-medium text-sm transition-all ${
                  category === 'work'
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
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
