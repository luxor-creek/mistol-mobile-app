import { useNavigate } from 'react-router';
import { ArrowLeft, Clock, Send } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useState } from 'react';

export function TextChat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden relative">
      {/* Header */}
      <div className="relative bg-[#f1f6f6] pt-[60px] pb-4 px-3 z-10 shrink-0">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate('/')}
            className="flex gap-2 h-[50px] items-center justify-center p-3 rounded-xl shrink-0 w-[50px]"
          >
            <ArrowLeft className="w-8 h-8 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
            Chat with Mistol
          </div>
          <button className="flex gap-2 h-[34px] items-center justify-center p-3 rounded-xl shrink-0 w-[34px]">
            <Clock className="w-6 h-6 text-[#a8b0b0]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-auto px-3">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="relative w-16 h-16 animate-pulse mx-auto mb-4">
              <svg className="block size-full" fill="none" viewBox="0 0 64 64">
                <circle cx="32" cy="32" fill="#A8B0B0" fillOpacity="0.2" r="32" />
                <path d="M32 14C22.0589 14 14 22.0589 14 32C14 41.9411 22.0589 50 32 50C41.9411 50 50 41.9411 50 32C50 22.0589 41.9411 14 32 14Z" fill="#A8B0B0" fillOpacity="0.4" />
                <path d="M32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20Z" fill="#A8B0B0" />
              </svg>
            </div>
            <p className="text-[#595e5e] text-sm tracking-tight">
              Start a conversation with Mistol
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-3 pb-[90px] shrink-0">
        <div className={`bg-white rounded-[16px] p-3 flex items-end gap-2 transition-all ${
          isFocused ? 'shadow-lg' : ''
        }`}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Type your message..."
            rows={isFocused ? 4 : 1}
            className="flex-1 bg-transparent text-[#1f2121] text-base tracking-tight outline-none placeholder:text-[#a8b0b0] resize-none py-2"
          />
          <button
            disabled={!message.trim()}
            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              message.trim()
                ? 'bg-[#daea69] active:scale-95'
                : 'bg-[#f1f6f6]'
            }`}
          >
            <Send className={`w-6 h-6 ${message.trim() ? 'text-[#1f2121]' : 'text-[#a8b0b0]'}`} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
