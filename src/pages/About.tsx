import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function About() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#f1f6f6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="relative bg-[#f1f6f6] pt-[60px] pb-4 px-3 z-10">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-[#1f2121] text-xl text-center tracking-tight">
            About Mistol
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 overflow-auto pb-20">
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Animated Logo */}
          <div className="bg-[#daea69] rounded-full w-[98px] h-[98px] flex items-center justify-center animate-pulse">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
              <circle cx="32" cy="32" fill="#1f2121" fillOpacity="0.2" r="32" />
              <path d="M32 14C22.0589 14 14 22.0589 14 32C14 41.9411 22.0589 50 32 50C41.9411 50 50 41.9411 50 32C50 22.0589 41.9411 14 32 14Z" fill="#1f2121" fillOpacity="0.2" />
              <path d="M32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20Z" fill="#1f2121" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[#595e5e] text-base leading-relaxed">
          <p>
            Mistol was built for people who have a lot on their mind.
          </p>

          <p>
            Too many things to remember. Too many small tasks that pile up. Too many moments where you think "I'll do that later" and forget.
          </p>

          <p>
            We wanted something simple. Something you could just text.
          </p>

          <h3 className="font-semibold text-[#1f2121] text-lg mt-2">
            Why we built it
          </h3>

          <p>
            Most tools expect you to open them, organize everything, and stay consistent.
          </p>

          <p>
            That's not how life actually works.
          </p>

          <p>
            You think of things while walking. Driving. In between conversations. Late at night.
          </p>

          <p>
            Mistol meets you there.
          </p>

          <p>
            You just text what's on your mind, and she helps you keep track of it.
          </p>

          <h3 className="font-semibold text-[#1f2121] text-lg mt-2">
            What makes it different
          </h3>

          <p>
            You don't need to learn anything.
          </p>

          <p>
            You don't need to organize your thoughts.
          </p>

          <p>
            You don't need another app.
          </p>

          <p>
            You just text.
          </p>

          <p>
            Over time, Mistol starts to understand you. What you care about, what you tend to forget, and how you like things done.
          </p>

          <h3 className="font-semibold text-[#1f2121] text-lg mt-2">
            What it helps with
          </h3>

          <p>
            Remembering things. Staying organized. Planning your day. Keeping track of goals.
          </p>

          <p>
            Getting ready for what's coming up.
          </p>

          <p>
            Sometimes you just need a place to think out loud.
          </p>

          <p>
            Mistol listens and helps you move forward.
          </p>
        </div>
      </div>

      {/* Bottom System Bar */}
      <div className="h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
