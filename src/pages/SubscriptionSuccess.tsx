import { useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function SubscriptionSuccess() {
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
            onClick={() => navigate('/profile')}
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
      <div className="mx-3 mt-2 mb-4 bg-white rounded-[22px] p-4 relative z-10">
        {/* Plan Header */}
        <div className="bg-[#1f2121] rounded-xl p-4 flex items-center gap-3.5 mb-6">
          <div className="bg-[#daea69] rounded-full w-10 h-10 flex items-center justify-center relative overflow-hidden">
            <svg className="w-7 h-5 relative z-10" fill="none" viewBox="0 0 27 20">
              <path d="M25.03 10C25.03 14.97 21.01 19 16.03 19H11.03C6.06 19 2.03 14.97 2.03 10C2.03 5.03 6.06 1 11.03 1H16.03C21.01 1 25.03 5.03 25.03 10Z" fill="#1f2121" />
            </svg>
            <div className="absolute -rotate-45 left-[-50%] top-[-50%] w-[150px] h-[63px] bg-white/40" />
            <div className="absolute -rotate-45 left-[-67%] top-[10%] w-[150px] h-[63px] bg-white/15" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white text-lg tracking-tight">Premium Plan</div>
          </div>
          <div className="text-[#a8b0b0] text-base tracking-tight">$10/Month</div>
        </div>

        {/* Plan Features */}
        <div className="flex flex-col gap-3.5 mb-6">
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Image Generator</div>
            <div className="text-[#1f2121] text-base tracking-tight">Unlimited</div>
          </div>
          <div className="h-px bg-[#dae1e1]" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Search</div>
            <div className="text-[#1f2121] text-base tracking-tight">Unlimited</div>
          </div>
          <div className="h-px bg-[#dae1e1]" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Smart Chat</div>
            <div className="text-[#1f2121] text-base tracking-tight">Advanced Behaviour</div>
          </div>
          <div className="h-px bg-[#dae1e1]" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Expiration Date</div>
            <div className="text-[#1f2121] text-base tracking-tight">11 April 2025</div>
          </div>
        </div>

        {/* Cancel Subscription Button */}
        <button className="w-full border border-[#dae1e1] rounded-xl px-4 py-3 font-medium text-[#ef4444] text-base">
          Cancel Subscription
        </button>
      </div>

      {/* Success Banner */}
      <div className="mx-3 mb-4 bg-[#ecfdf5] border border-[#10b981] rounded-xl p-4 flex gap-3 items-center relative z-10">
        <CheckCircle className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={2} />
        <p className="text-[#1f2121] text-sm leading-relaxed">
          Successfully subscribed to Premium Plan
        </p>
      </div>

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
