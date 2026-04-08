import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Clock, Mic, Plus, Send } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text?: string;
  isRecording?: boolean;
}

function RecordGraph() {
  return (
    <div className="h-[44px] w-[174px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 44">
        <path d="M6 15.5L6 28.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M12 4.5L12 39.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M18 11L18 33" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M24 13.5L24 30.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M30 6.5L30 37.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M36 2L36 42" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M42 13L42 31" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M48 6.5L48 37.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M54 6.5L54 37.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M60 14.5L60 29.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M66 10.5L66 33.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M72 15.5L72 28.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M78 10L78 34" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M84 15.5L84 28.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M90 9L90 35" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M96 6L96 38" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M102 10L102 34" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M108 6L108 38" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M114 10L114 34" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M120 12L120 32" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M126 7.5L126 36.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M132 2L132 42" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M138 10.5L138 33.5" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M144 12L144 32" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M150 7L150 37" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M156 12L156 32" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M162 8L162 36" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
        <path d="M168 15L168 29" stroke="#595E5E" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function Voice() {
  const navigate = useNavigate();
  const [showRecordModal, setShowRecordModal] = useState(true); // Start with modal open
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'user', text: 'What is VanguardCX?' },
    { id: '2', sender: 'assistant', text: 'VanguardCX is a customer experience (CX) solutions company that provides outsourced services to businesses looking to improve their customer support and engagement.' },
    { id: '3', sender: 'user', text: 'Who is the founder?' },
    { id: '4', sender: 'assistant', text: 'VanguardCX was founded by Richard Fang' },
  ]);

  const handleStartRecording = () => {
    setShowRecordModal(false);
    // Add recording message
    setMessages([...messages, { id: Date.now().toString(), sender: 'user', isRecording: true }]);
  };

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden relative">
      {/* Header */}
      <div className="relative bg-[#f1f6f6] pt-[60px] pb-4 px-3 z-10">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate('/')}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
            New Chat
          </div>
          <button className="flex gap-2 h-[34px] items-center justify-center p-3 rounded-xl shrink-0 w-[34px]">
            <Clock className="w-6 h-6 text-[#a8b0b0]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto px-3 pb-[160px]">
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start w-full ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'assistant' && (
                <div className="flex-1 bg-[#f1f6f6]" />
              )}
              <div
                className={`rounded-[16px] px-4 py-3 max-w-[306px] ${
                  message.sender === 'user'
                    ? 'bg-[#daea69]'
                    : 'bg-white'
                }`}
              >
                <div className="text-[#595e5e] text-xs mb-1">
                  {message.sender === 'user' ? 'You' : 'Chappy'}
                </div>
                {message.isRecording ? (
                  <div className="flex items-center gap-2">
                    <button className="bg-[#1f2121] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                    </button>
                    <RecordGraph />
                  </div>
                ) : (
                  <div className="text-[#1f2121] text-base tracking-tight leading-relaxed">
                    {message.text}
                  </div>
                )}
              </div>
              {message.sender === 'user' && (
                <div className="flex-1 bg-[#f1f6f6]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 bg-white rounded-[32px] p-1.5 flex items-center gap-3 w-[351px] z-20">
        <button className="bg-[#e7eded] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          <Plus className="w-5 h-5 text-[#1f2121]" strokeWidth={1.5} />
        </button>
        <input
          type="text"
          placeholder="Type a Question"
          className="flex-1 text-[#a8b0b0] text-base tracking-tight outline-none bg-transparent"
        />
        <button
          onClick={() => setShowRecordModal(true)}
          className="shrink-0"
        >
          <Mic className="w-5 h-5 text-[#a8b0b0]" strokeWidth={1.5} />
        </button>
        <button className="bg-[#e7eded] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          <Send className="w-5 h-5 text-[#a8b0b0]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Recording Modal Overlay */}
      {showRecordModal && (
        <>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(168,176,176,0.8)] z-30" />
          <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 bg-white rounded-[22px] px-[18px] py-6 flex flex-col items-center gap-4 w-[351px] z-40">
            <div className="text-[#595e5e] text-sm font-medium text-center leading-snug">
              Hold a button below to record<br />your voice chat
            </div>
            <button
              onMouseDown={handleStartRecording}
              onTouchStart={handleStartRecording}
              className="bg-[#daea69] w-[50px] h-[50px] rounded-full flex items-center justify-center active:scale-95 transition-transform"
            >
              <Mic className="w-6 h-6 text-[#1f2121]" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setShowRecordModal(false)}
              className="text-[#ef4444] text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
