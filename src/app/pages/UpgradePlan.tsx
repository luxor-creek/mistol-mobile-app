import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function UpgradePlan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5e7989] from-[11%] to-[#bec9d6] flex flex-col overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute left-[-269px] top-[-135px] pointer-events-none">
        <div className="absolute flex items-center justify-center left-[-269px] w-[510px] h-[510px] top-[18px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-white h-[125px] rounded-[75px] w-[597px]" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[-204px] w-[694px] h-[694px] top-[-135px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-[28%] from-[rgba(218,225,225,0)] to-[rgba(218,225,225,0.5)] h-[125px] rounded-[75px] w-[857px]" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[175px] w-[393px] h-[393px] top-[200px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-white to-transparent h-[125px] rounded-[75px] w-[431px]" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[94px] w-[520px] h-[520px] top-[278px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-[rgba(218,225,225,0.7)] h-[125px] rounded-[75px] w-[610px]" />
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
          <div className="flex-1 opacity-0" />
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Title and Price */}
      <div className="px-3 mt-8 mb-8 relative z-10">
        <h1 className="font-semibold text-[#1f2121] text-4xl tracking-tight leading-[1.25] mb-4">
          Subscribe to Our<br />Plan and Get More<br />Benefit with Us
        </h1>
        <div className="bg-[#1f2121] rounded-[16px] px-4 py-3 inline-flex items-center gap-1">
          <span className="font-semibold text-white text-[26px] tracking-tight">$10</span>
          <span className="text-[#a8b0b0] text-base tracking-tight">/Month</span>
        </div>
      </div>

      {/* Benefits Card */}
      <div className="mx-3 mb-4 bg-white/40 backdrop-blur-sm rounded-[22px] p-4 relative z-10">
        <h3 className="font-semibold text-[#1f2121] text-lg tracking-tight mb-5">
          What will you get:
        </h3>
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Image Generator</div>
            <div className="text-[#1f2121] text-base tracking-tight">Unlimited</div>
          </div>
          <div className="h-px bg-[#1f2121]/10" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Search</div>
            <div className="text-[#1f2121] text-base tracking-tight">Unlimited</div>
          </div>
          <div className="h-px bg-[#1f2121]/10" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Chat</div>
            <div className="text-[#1f2121] text-base tracking-tight">Advanced Behaviour</div>
          </div>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="fixed bottom-[40px] left-0 right-0 px-4 relative z-10">
        <button
          onClick={() => navigate('/payment')}
          className="bg-[#daea69] h-12 w-full rounded-xl font-medium text-[#1f2121] text-base mb-4"
        >
          Subscribe Now
        </button>
        <p className="text-[#595e5e] text-base text-center tracking-tight">
          No commitment. Cancel anytime.
        </p>
      </div>

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
