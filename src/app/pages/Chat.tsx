import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeft, Clock, Mic, Type, Image, Send } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

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

export function Chat() {
  const navigate = useNavigate();
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [documentContent, setDocumentContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleStartRecording = () => {
    setShowRecordModal(false);
    setIsRecording(true);
    // TODO: Start actual recording
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // TODO: Process recording and add to document
  };

  const handleSubmitText = () => {
    if (textInput.trim()) {
      // TODO: Process text and add to document
      setDocumentContent(documentContent + (documentContent ? '\n\n' : '') + textInput);
      setTextInput('');
      setShowTextModal(false);
    }
  };

  const handleUploadImage = () => {
    // TODO: Handle image upload
    setShowImageModal(false);
  };

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
            Brain Dump
          </div>
          <button
            onClick={() => navigate('/brain-dump-history')}
            className="flex gap-2 h-[34px] items-center justify-center p-3 rounded-xl shrink-0 w-[34px]"
          >
            <Clock className="w-6 h-6 text-[#a8b0b0]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Document Section - Top Half */}
      <div className="flex-1 overflow-auto px-3">
        <div className="bg-white rounded-[16px] p-4 min-h-full">
          {documentContent ? (
            <div className="text-[#1f2121] text-base tracking-tight leading-relaxed whitespace-pre-wrap">
              {documentContent}
            </div>
          ) : (
            <div className="text-[#a8b0b0] text-base tracking-tight">
              Your thoughts will appear here...
            </div>
          )}
        </div>
      </div>

      {/* Chat Section - Bottom Half */}
      <div className="flex-1 overflow-auto px-3 py-3 border-t border-[#dae1e1]">
        {isRecording ? (
          <div className="bg-[#daea69] rounded-[16px] p-4 flex items-center gap-3">
            <button
              onClick={handleStopRecording}
              className="bg-[#1f2121] w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            >
              <div className="w-3 h-3 bg-white rounded-sm" />
            </button>
            <RecordGraph />
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-center justify-center h-full">
            <div className="relative w-12 h-12 animate-pulse">
              <svg className="block size-full" fill="none" viewBox="0 0 64 64">
                <circle cx="32" cy="32" fill="#A8B0B0" fillOpacity="0.2" r="32" />
                <path d="M32 14C22.0589 14 14 22.0589 14 32C14 41.9411 22.0589 50 32 50C41.9411 50 50 41.9411 50 32C50 22.0589 41.9411 14 32 14Z" fill="#A8B0B0" fillOpacity="0.4" />
                <path d="M32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20Z" fill="#A8B0B0" />
              </svg>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowRecordModal(true)}
                className="bg-[#daea69] w-[70px] h-[70px] rounded-full flex items-center justify-center active:scale-95 transition-transform"
              >
                <Mic className="w-8 h-8 text-[#1f2121]" strokeWidth={2} />
              </button>
              <button
                onClick={() => setShowTextModal(true)}
                className="bg-white w-[70px] h-[70px] rounded-full flex items-center justify-center active:scale-95 transition-transform border border-[#dae1e1]"
              >
                <Type className="w-8 h-8 text-[#1f2121]" strokeWidth={2} />
              </button>
              <button
                onClick={() => setShowImageModal(true)}
                className="bg-white w-[70px] h-[70px] rounded-full flex items-center justify-center active:scale-95 transition-transform border border-[#dae1e1]"
              >
                <Image className="w-8 h-8 text-[#1f2121]" strokeWidth={2} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recording Modal Overlay */}
      {showRecordModal && (
        <>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(168,176,176,0.8)] z-30" />
          <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 bg-white rounded-[22px] px-[18px] py-6 flex flex-col items-center gap-4 w-[351px] z-40">
            <div className="text-[#595e5e] text-sm font-medium text-center leading-snug">
              Hold the button below to record<br />your voice note
            </div>
            <button
              onMouseDown={handleStartRecording}
              onTouchStart={handleStartRecording}
              className="bg-[#daea69] w-[70px] h-[70px] rounded-full flex items-center justify-center active:scale-95 transition-transform"
            >
              <Mic className="w-8 h-8 text-[#1f2121]" strokeWidth={2} />
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

      {/* Text Input Modal */}
      {showTextModal && (
        <>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(168,176,176,0.8)] z-30" onClick={() => setShowTextModal(false)} />
          <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 bg-white rounded-[22px] px-[18px] py-6 flex flex-col gap-4 w-[351px] z-40">
            <div className="text-[#1f2121] text-base font-semibold text-center">
              Type Your Note
            </div>
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Start typing..."
              rows={6}
              autoFocus
              className="bg-[#f1f6f6] rounded-[12px] p-3 text-[#1f2121] text-base tracking-tight outline-none placeholder:text-[#a8b0b0] resize-none"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowTextModal(false)}
                className="flex-1 h-[52px] border border-[#dae1e1] rounded-xl font-medium text-[#1f2121] text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitText}
                disabled={!textInput.trim()}
                className={`flex-1 h-[52px] rounded-xl font-medium text-base ${
                  textInput.trim()
                    ? 'bg-[#daea69] text-[#1f2121]'
                    : 'bg-[#f1f6f6] text-[#a8b0b0]'
                }`}
              >
                Add to Note
              </button>
            </div>
          </div>
        </>
      )}

      {/* Upload Image Modal */}
      {showImageModal && (
        <>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-[rgba(168,176,176,0.8)] z-30" onClick={() => setShowImageModal(false)} />
          <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 bg-white rounded-[22px] px-[18px] py-6 flex flex-col items-center gap-4 w-[351px] z-40">
            <div className="text-[#1f2121] text-base font-semibold text-center">
              Upload Image
            </div>

            <div className="w-full flex flex-col gap-3">
              <button
                onClick={handleUploadImage}
                className="w-full bg-[#daea69] rounded-[12px] px-4 py-4 flex items-center gap-3 active:scale-95 transition-transform"
              >
                <div className="bg-[#1f2121] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Image className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1 font-medium text-[#1f2121] text-base text-left">
                  Choose from Library
                </div>
              </button>

              <button
                onClick={handleUploadImage}
                className="w-full bg-white border border-[#dae1e1] rounded-[12px] px-4 py-4 flex items-center gap-3 active:scale-95 transition-transform"
              >
                <div className="bg-[#f1f6f6] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 font-medium text-[#1f2121] text-base text-left">
                  Take Photo
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowImageModal(false)}
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
