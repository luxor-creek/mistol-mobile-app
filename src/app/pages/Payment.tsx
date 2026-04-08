import { useNavigate } from 'react-router';
import { ArrowLeft, Info } from 'lucide-react';

export function Payment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute h-[205px] left-0 overflow-hidden top-0 w-full">
        <div className="absolute bg-[#daea69] h-[205px] left-0 top-0 w-full" />
        <div className="absolute flex items-center justify-center left-[106px] w-[456px] h-[456px] top-[-110px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-white/70 h-[136px] rounded-[86px] w-[509px]" />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[-35px] w-[553px] h-[553px] top-[-158px]">
          <div className="-rotate-45">
            <div className="bg-gradient-to-r from-transparent to-white/70 h-[171px] rounded-[75px] w-[610px]" />
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
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
            Payment
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Plan Card */}
      <div className="mx-3 mt-2 mb-4 bg-white rounded-[22px] p-4 relative z-10">
        {/* Plan Header */}
        <div className="bg-[#1f2121] rounded-xl p-4 flex items-center gap-3.5 mb-5">
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

        {/* Payment Details */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Amount (Billed Monthly)</div>
            <div className="text-[#1f2121] text-base tracking-tight">$10</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Tax</div>
            <div className="text-[#1f2121] text-base tracking-tight">$0</div>
          </div>
          <div className="h-px bg-[#1f2121]/10" />
          <div className="flex items-center justify-between">
            <div className="text-[#595e5e] text-base tracking-tight">Total</div>
            <div className="font-semibold text-[#1f2121] text-lg tracking-tight">$10</div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mx-3 mb-4 bg-[#e0f2fe] border border-[#0ea5e9] rounded-[16px] p-3 flex gap-3 items-center relative z-10">
        <Info className="w-5 h-5 text-[#0ea5e9] shrink-0" strokeWidth={2} />
        <p className="text-[#1f2121] text-sm leading-relaxed">
          This plan is recurring, and your credit card balance will be automatically deducted.
        </p>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-[40px] left-0 right-0 px-4">
        <button
          onClick={() => navigate('/subscription-success')}
          className="bg-[#daea69] h-12 w-full rounded-xl font-medium text-[#1f2121] text-base"
        >
          Continue to Payment
        </button>
      </div>

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
