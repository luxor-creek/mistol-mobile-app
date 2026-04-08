import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function Plan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute h-[174px] left-0 overflow-hidden top-0 w-full">
        <div className="absolute bg-gradient-to-b from-[#5e7989] from-[11%] h-[205px] left-0 to-[#bec9d6] top-0 w-full" />
        <div className="absolute flex items-center justify-center left-[106px] w-[456px] h-[456px] top-[-110px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-white/30 h-[136px] rounded-[86px] w-[509px]" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[-35px] w-[553px] h-[553px] top-[-158px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-white/20 h-[171px] rounded-[75px] w-[610px]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="relative pt-[60px] pb-4 px-3 z-10">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-white text-xl text-center tracking-tight">
            Your Plan
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Plan Card */}
      <div className="mx-3 mt-2 mb-4 bg-white rounded-[22px] p-4">
        {/* Plan Header */}
        <div className="bg-[#1f2121] rounded-xl p-4 flex items-center gap-3.5 mb-5">
          <div className="bg-[#f1f6f6] rounded-full w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradient" x1="12" x2="12" y1="0" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5e7989" />
                  <stop offset="1" stopColor="#bec9d6" />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient)" />
              <path d="M2 17L12 22L22 17" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white text-lg tracking-tight">Free Plan</div>
          </div>
          <div className="text-[#a8b0b0] text-base tracking-tight">$0/Month</div>
        </div>

        {/* Plan Features */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Image Generator</div>
            <div className="text-[#1f2121] text-base tracking-tight">10 Daily Limit</div>
          </div>
          <div className="h-px bg-[#dae1e1]" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Search</div>
            <div className="text-[#1f2121] text-base tracking-tight">15 Daily Limit</div>
          </div>
          <div className="h-px bg-[#dae1e1]" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Chat</div>
            <div className="text-[#1f2121] text-base tracking-tight">Basic Behaviour</div>
          </div>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="fixed bottom-[40px] left-0 right-0 px-4">
        <button
          onClick={() => navigate('/upgrade-plan')}
          className="bg-[#daea69] h-12 w-full rounded-xl font-medium text-[#1f2121] text-base"
        >
          Subscribe Our Plan
        </button>
      </div>

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
