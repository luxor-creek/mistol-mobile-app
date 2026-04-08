import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Folder, File, ChevronRight, Search, Brain } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file' | 'brain';
  size?: string;
  date?: string;
}

export function Files() {
  const navigate = useNavigate();
  const [files] = useState<FileItem[]>([
    { id: '1', name: 'Brain Dump', type: 'brain', size: '24 items', date: 'Apr 8' },
    { id: '2', name: 'Articles', type: 'folder', size: '12 items', date: 'Apr 5' },
    { id: '3', name: 'Images', type: 'folder', size: '8 items', date: 'Apr 3' },
    { id: '4', name: 'Getting Started', type: 'file', size: '2.4 KB', date: 'Apr 1' },
  ]);

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="relative bg-[#f1f6f6] pt-[60px] pb-4 px-3 z-10 shrink-0">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate('/')}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
            Files
          </div>
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center w-[35px] h-[35px]">
              <Search className="w-5 h-5 text-[#595e5e]" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-auto px-4 pb-[90px]">
        <div className="flex flex-col gap-3">
          {files.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-4 p-4 bg-white rounded-[16px] active:scale-[0.98] transition-transform"
            >
              {item.type === 'brain' ? (
                <div className="w-12 h-12 bg-[#daea69]/20 rounded-[14px] flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
                </div>
              ) : item.type === 'folder' ? (
                <div className="w-12 h-12 bg-[#daea69]/20 rounded-[14px] flex items-center justify-center flex-shrink-0">
                  <Folder className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
                </div>
              ) : (
                <div className="w-12 h-12 bg-[#f1f6f6] rounded-[14px] flex items-center justify-center flex-shrink-0">
                  <File className="w-6 h-6 text-[#595e5e]" strokeWidth={2} />
                </div>
              )}
              <div className="flex-1 text-left">
                <h3 className="font-medium text-[#1f2121] text-base tracking-tight">{item.name}</h3>
                <p className="text-[#595e5e] text-sm tracking-tight">{item.size} • {item.date}</p>
              </div>
              {item.type === 'folder' && (
                <ChevronRight className="w-5 h-5 text-[#595e5e] flex-shrink-0" strokeWidth={2} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
