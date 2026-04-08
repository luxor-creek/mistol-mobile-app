import { useNavigate } from 'react-router';
import { CheckSquare, FileText, MessageCircle, Zap, Cloud, Brain } from 'lucide-react';
import logoIcon from 'figma:asset/19f3c111f9527fd4278daa31bec9652ead69ce04.png';

function AnimatedBackground({ isEvening }: { isEvening: boolean }) {
  if (isEvening) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs for evening */}
        <div className="absolute w-[400px] h-[400px] -top-20 -right-20 bg-gradient-radial from-[#daea69]/10 to-transparent rounded-full animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] top-1/3 -left-20 bg-gradient-radial from-[#daea69]/8 to-transparent rounded-full animate-float-slower" />
        <div className="absolute w-[350px] h-[350px] bottom-20 right-10 bg-gradient-radial from-[#daea69]/6 to-transparent rounded-full animate-float-medium" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated shapes for daytime */}
      <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-gradient-radial from-white/20 to-transparent rounded-full animate-float-slow" />
      <div className="absolute w-[400px] h-[400px] top-1/4 -right-32 bg-gradient-radial from-white/15 to-transparent rounded-full animate-float-medium" />
      <div className="absolute w-[450px] h-[450px] bottom-10 left-10 bg-gradient-radial from-white/18 to-transparent rounded-full animate-float-slower" />
    </div>
  );
}

function DecorativePattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute left-[-71px] w-[218px] h-[218px] top-[18px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-transparent to-white/50 h-[65px] rounded-full w-[243px]" />
        </div>
      </div>
      <div className="absolute left-[83px] w-[187px] h-[187px] top-[-75px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-white/60 to-transparent h-[60px] rounded-full w-[205px]" />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <img src={logoIcon} alt="Logo" className="w-10 h-10" />
  );
}

export function Home() {
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  // Determine greeting and theme based on time of day
  const hour = currentDate.getHours();
  const isEvening = hour >= 17 || hour < 6; // 5pm to 6am is evening

  let greeting = 'Good Morning';
  if (isEvening) {
    greeting = 'Good Evening';
  }

  // Mock weather data - TODO: Replace with actual weather API
  const weather = {
    temperature: 72,
    condition: 'Partly Cloudy'
  };

  const features = [
    {
      icon: CheckSquare,
      label: 'Tasks',
      path: '/tasks',
      bgColor: 'bg-[#daea69]',
      iconBg: 'bg-[#1f2121]',
      iconColor: 'text-white',
      textColor: 'text-[#1f2121]',
      hasPattern: true
    },
    {
      icon: Brain,
      label: 'Brain Dump',
      path: '/chat',
      bgColor: 'bg-white/40',
      iconBg: 'bg-white',
      iconColor: 'text-[#1f2121]',
      textColor: 'text-[#1f2121]',
      hasPattern: false
    },
    {
      icon: MessageCircle,
      label: 'Chat with Mistol',
      path: '/text-chat',
      bgColor: 'bg-[#daea69]',
      iconBg: 'bg-[#1f2121]',
      iconColor: 'text-white',
      textColor: 'text-[#1f2121]',
      hasPattern: true
    },
    {
      icon: FileText,
      label: 'Files',
      path: '/files',
      bgColor: 'bg-white/40',
      iconBg: 'bg-white',
      iconColor: 'text-[#1f2121]',
      textColor: 'text-[#1f2121]',
      hasPattern: false
    },
    {
      icon: Zap,
      label: 'Flows',
      path: '/flows',
      bgColor: 'bg-white/40',
      iconBg: 'bg-white',
      iconColor: 'text-[#1f2121]',
      textColor: 'text-[#1f2121]',
      hasPattern: false
    },
  ];

  return (
    <div className={`h-screen ${
      isEvening
        ? 'bg-gradient-to-b from-[#1a1d1e] to-[#2d3436]'
        : 'bg-gradient-to-b from-[#daea69] to-[#f1f6f6]'
    } flex flex-col overflow-hidden relative`}>
      {/* Animated Background Elements */}
      <AnimatedBackground isEvening={isEvening} />

      {/* Decorative Background */}
      {!isEvening && (
        <div className="absolute h-[812px] left-0 top-0 w-full">
          <div className="absolute inset-[-15%_-64%_0_-12%]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 658.496 937.249">
              <rect fill="url(#paint0)" height="259.533" rx="129.767" transform="rotate(-45 -53.751 528.729)" width="823.751" x="-53.751" y="528.729" />
              <rect fill="url(#paint1)" height="187.939" rx="93.9694" transform="rotate(-45 60.249 372.784)" width="580.584" x="60.249" y="372.784" />
              <defs>
                <linearGradient id="paint0" x1="33.2852" x2="770" y1="658.496" y2="658.496">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="paint1" x1="153.246" x2="640.833" y1="466.754" y2="466.754">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Bar */}
        <div className="flex gap-2.5 items-center px-3 pt-[60px] pb-4">
          <Logo />
          <div className="flex-1 flex justify-center">
            <div className={`font-medium text-base tracking-tight ${
              isEvening ? 'text-white' : 'text-[#1f2121]'
            }`}>
              {formattedDate}
            </div>
          </div>
          {/* TODO: Replace with user's Google OAuth profile photo */}
          <button
            onClick={() => navigate('/profile')}
            className={`w-10 h-10 rounded-full active:scale-95 transition-transform ${
              isEvening ? 'bg-white/30' : 'bg-[#1f2121]/20'
            }`}
          />
        </div>

        {/* Main Heading */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className={`font-semibold text-[32px] text-center tracking-tight leading-tight mb-4 ${
            isEvening ? 'text-white' : 'text-[#1f2121]'
          }`}>
            {greeting}, Paul.
          </h1>
          <div className={`flex items-center gap-2 ${
            isEvening ? 'text-white/90' : 'text-[#1f2121]/80'
          }`}>
            <Cloud className="w-5 h-5" />
            <span className="font-normal text-lg">
              {weather.temperature}° • {weather.condition}
            </span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="px-3 pb-6 flex flex-col gap-3">
          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-2 gap-3">
            {features.slice(0, 2).map((feature) => (
              <button
                key={feature.label}
                onClick={() => navigate(feature.path)}
                className={`${feature.bgColor} h-[172px] rounded-[22px] overflow-hidden relative active:scale-95 transition-transform`}
              >
                {feature.hasPattern && <DecorativePattern />}
                <div className="relative flex flex-col items-start justify-between p-[18px] h-full">
                  <div className={`${feature.iconBg} w-10 h-10 rounded-[30px] flex items-center justify-center`}>
                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <div className={`font-semibold text-[16px] tracking-tight leading-tight text-left ${feature.textColor}`}>
                    {feature.label}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-3 gap-3">
            {features.slice(2).map((feature) => (
              <button
                key={feature.label}
                onClick={() => navigate(feature.path)}
                className={`${feature.bgColor} h-[172px] rounded-[22px] overflow-hidden relative active:scale-95 transition-transform`}
              >
                {feature.hasPattern && <DecorativePattern />}
                <div className="relative flex flex-col items-start justify-between p-[18px] h-full">
                  <div className={`${feature.iconBg} w-10 h-10 rounded-[30px] flex items-center justify-center`}>
                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <div className={`font-semibold text-[16px] tracking-tight leading-tight text-left ${feature.textColor}`}>
                    {feature.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom System Bar */}
        <div className="h-[34px] flex items-center justify-center pb-2">
          <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
