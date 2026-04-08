import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import imgGmail from 'figma:asset/f5a029c3f20b07b6b8c86982e8a59106c22a6d33.png';
import imgGoogleCalendar from 'figma:asset/ee8010c8306cde3799b09fd8eda7ed04ede39cf0.png';
import imgOutlook from 'figma:asset/147eedfdce3521a8558a79f430b0d003a7bbf455.png';
import imgMicrosoftCalendar from 'figma:asset/29484ae07b9629e8d1d3a7dfce54074e1648ac54.png';

interface Connection {
  id: string;
  name: string;
  type: string;
  iconSrc: string;
  connected: boolean;
}

export function Connections() {
  const navigate = useNavigate();

  const connections: Connection[] = [
    { id: '1', name: 'Google Calendar', type: 'Calendar', iconSrc: imgGoogleCalendar, connected: true },
    { id: '2', name: 'Gmail', type: 'Email', iconSrc: imgGmail, connected: true },
    { id: '3', name: 'Microsoft Outlook', type: 'Email', iconSrc: imgOutlook, connected: false },
    { id: '4', name: 'Microsoft Calendar', type: 'Calendar', iconSrc: imgMicrosoftCalendar, connected: false },
  ];

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
            Connections
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 pb-20">
        <p className="text-[#595e5e] text-sm mb-6 tracking-tight">
          Connect your apps to make Mistol even more powerful
        </p>

        {/* Connected Services */}
        <div className="mb-6">
          <h2 className="font-semibold text-[#1f2121] text-base mb-3 tracking-tight">Connected</h2>
          <div className="flex flex-col gap-3">
            {connections.filter(c => c.connected).map((connection) => (
              <div
                key={connection.id}
                className="flex items-center gap-4 p-4 bg-white rounded-[16px]"
              >
                <div className="w-12 h-12 bg-[#f1f6f6] rounded-[14px] flex items-center justify-center flex-shrink-0">
                  <img src={connection.iconSrc} alt={connection.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#1f2121] text-base tracking-tight">{connection.name}</h3>
                  <p className="text-[#595e5e] text-sm tracking-tight">{connection.type}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                  <span className="text-sm text-[#10b981] font-medium">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Services */}
        <div>
          <h2 className="font-semibold text-[#1f2121] text-base mb-3 tracking-tight">Available</h2>
          <div className="flex flex-col gap-3">
            {connections.filter(c => !c.connected).map((connection) => (
              <button
                key={connection.id}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-[16px] active:scale-[0.98] transition-transform"
              >
                <div className="w-12 h-12 bg-[#f1f6f6] rounded-[14px] flex items-center justify-center flex-shrink-0">
                  <img src={connection.iconSrc} alt={connection.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-[#1f2121] text-base tracking-tight">{connection.name}</h3>
                  <p className="text-[#595e5e] text-sm tracking-tight">{connection.type}</p>
                </div>
                <div className="px-4 py-2 bg-[#daea69] rounded-full text-sm font-medium text-[#1f2121]">
                  Connect
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
