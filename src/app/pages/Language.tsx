import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { name: 'English', flag: '🇬🇧' },
  { name: 'Spanish', flag: '🇪🇸' },
  { name: 'German', flag: '🇩🇪' },
  { name: 'French', flag: '🇫🇷' },
  { name: 'Italian', flag: '🇮🇹' },
  { name: 'Portuguese', flag: '🇵🇹' },
];

export function Language() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

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
            Choose Language
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 py-6 overflow-auto pb-32">
        <div className="flex flex-col gap-3">
          {languages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang.name)}
              className="bg-white rounded-[14px] p-[18px] flex items-center gap-[14px] w-full"
            >
              <div className="text-2xl">{lang.flag}</div>
              <div className="flex-1 text-left text-[#1f2121] text-base tracking-tight">
                {lang.name}
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-[#1f2121] flex items-center justify-center">
                {selectedLanguage === lang.name && (
                  <div className="w-3 h-3 rounded-full bg-[#1f2121]" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-[34px] left-0 right-0 px-4 py-4 bg-white">
        <button className="bg-[#daea69] h-12 w-full rounded-xl font-medium text-[#1f2121] text-base">
          Save Changes
        </button>
      </div>

      {/* Bottom System Bar */}
      <div className="h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
