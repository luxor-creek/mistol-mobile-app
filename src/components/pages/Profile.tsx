import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, Star, Edit3, LogOut } from 'lucide-react';
import imgAvatar from 'figma:asset/e1b4bbdd554d91884ce3072de2345fc01373f64b.png';
import { useState } from 'react';

function DecorativePattern() {
  return (
    <div className="absolute left-16 top-[-96px]">
      <div className="absolute left-[71px] w-[218px] h-[218px] top-[23px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-transparent to-white/50 h-[65.223px] rounded-[85.618px] w-[243.061px]" />
        </div>
      </div>
      <div className="absolute left-[213px] w-[187.357px] h-[187.357px] top-[-50px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-white/60 to-transparent h-[59.571px] rounded-[75px] w-[205.391px]" />
        </div>
      </div>
      <div className="absolute left-16 w-[306.494px] h-[306.494px] top-[-96px] flex items-center justify-center">
        <div className="-rotate-45">
          <div className="bg-gradient-to-r from-transparent to-white/40 h-[81.836px] rounded-[85.618px] w-[351.612px]" />
        </div>
      </div>
    </div>
  );
}

export function Profile() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: 'Manage Connections', path: '/connections' },
    { label: 'Language', path: '/language' },
    { label: 'Frequently Asked Questions', path: '/faq' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'About Mistol', path: '/about' },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-[#5e7989] from-[11%] to-[#bec9d6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="relative pt-[60px] pb-4 px-3 z-10 shrink-0">
        <div className="flex gap-1 items-center w-full">
          <button
            onClick={() => navigate('/')}
            className="flex gap-2 h-[35px] items-center justify-center p-3 rounded-xl shrink-0 w-[35px]"
          >
            <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          <div className="flex-1 font-semibold text-white text-xl text-center tracking-tight">
            Profile
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto pb-[50px]">
        {/* Profile Info Card */}
        <div className="mx-3 mb-3 bg-[#daea69] rounded-[22px] p-[18px] relative overflow-hidden">
        <DecorativePattern />

        {/* Avatar and Edit Button */}
        <div className="relative flex items-start justify-between mb-3">
          <img
            src={imgAvatar}
            alt="Profile"
            className="w-[67px] h-[67px] rounded-full object-cover"
          />
          <button className="bg-white w-[46px] h-[46px] rounded-full flex items-center justify-center">
            <Edit3 className="w-6 h-6 text-[#1f2121]" strokeWidth={1.5} />
          </button>
        </div>

        {/* User Info */}
        <div className="relative mb-3">
          <div className="font-semibold text-[#1f2121] text-[22px] tracking-tight mb-0.5">
            Blake Johnson
          </div>
          <div className="text-[#595e5e] text-base tracking-tight">
            blake.johnson@gmail.com
          </div>
        </div>

        {/* Free Plan Badge */}
        <div className="relative bg-[#1f2121] rounded-[16px] p-2.5 px-[18px] flex items-center gap-3.5">
          <Star className="w-7 h-7 text-[#daea69]" strokeWidth={2} />
          <div className="flex-1 font-semibold text-white text-base tracking-tight">
            Free Plan
          </div>
          <button
            onClick={() => navigate('/plan')}
            className="border border-[#797e7e] rounded-[10px] px-4 py-3"
          >
            <span className="font-medium text-white text-base">Details</span>
          </button>
        </div>
      </div>

        {/* Settings Card */}
        <div className="mx-3 mb-3 bg-white rounded-[22px] p-[18px]">
          <div className="font-semibold text-[#1f2121] text-lg tracking-tight mb-4">
            Settings
          </div>

          <div className="flex flex-col gap-3.5">
            {menuItems.map((item, index) => (
              <div key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-3.5 w-full text-left"
                >
                  <div className="flex-1 text-[#1f2121] text-base tracking-tight">
                    {item.label}
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#1f2121]" strokeWidth={2} />
                </button>
                {index < menuItems.length - 1 && (
                  <div className="h-px bg-[#dae1e1] my-3.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mx-3 mb-6">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="bg-white rounded-[12px] w-full px-4 py-3 flex items-center justify-center gap-2"
          >
            <LogOut className="w-6 h-6 text-[#ef4444]" strokeWidth={2} />
            <span className="font-medium text-[#ef4444] text-base">Logout</span>
          </button>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-[#a8b0b0]/80 backdrop-blur-[2px]"
            onClick={() => setShowLogoutModal(false)}
          />

          <div className="relative w-full bg-white rounded-t-[24px] px-4 py-10">
            <div className="flex flex-col items-center gap-5 mb-10">
              <div className="bg-[#f1f6f6] rounded-full w-[98px] h-[98px] flex items-center justify-center">
                <svg className="w-24 h-[116px]" fill="none" viewBox="0 0 94 116">
                  <defs>
                    <linearGradient id="gradient" x1="30" x2="30" y1="-12.9286" y2="116" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5e7989" />
                      <stop offset="1" stopColor="#bec9d6" />
                    </linearGradient>
                  </defs>
                  <path d="M12 18H48C53.5228 18 58 22.4772 58 28V103C58 108.523 53.5228 113 48 113H12C6.47715 113 2 108.523 2 103V28C2 22.4772 6.47715 18 12 18Z" fill="url(#gradient)" />
                  <path d="M46 0C50.4183 0 54 3.58172 54 8V28H6V8C6 3.58172 9.58172 0 14 0H46Z" fill="#ef4444" />
                </svg>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-[#1f2121] text-[22px] tracking-tight mb-1">
                  Are You Sure Want to Logout?
                </h3>
                <p className="text-[#595e5e] text-base tracking-tight">
                  You will need to login again<br />to access this app
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 h-[52px] border border-[#dae1e1] rounded-xl font-medium text-[#1f2121] text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Perform logout logic here
                  navigate('/');
                }}
                className="flex-1 h-[52px] bg-[#ef4444] rounded-xl font-medium text-white text-base"
              >
                Logout
              </button>
            </div>

            <div className="h-[34px] flex items-center justify-center mt-4">
              <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
            </div>
          </div>
        </div>
      )}

      {/* Bottom System Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
