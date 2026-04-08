import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Chappy?',
    answer: 'Chappy is an AI-powered chatbot app designed to engage in natural, meaningful conversations. It uses advanced machine learning algorithms to understand and respond to user input, offering personalized conversations, problem-solving, entertainment, and much more. Whether you\'re looking for information, advice, or just a friendly chat, Chappy is here to help!'
  },
  {
    question: 'Is Chappy free to use?',
    answer: 'Yes, Chappy offers a free plan with basic features. Premium plans with additional features are also available.'
  },
  {
    question: 'How do I use Chappy?',
    answer: 'Simply open the app and start chatting! You can type messages or use voice chat to interact with Chappy.'
  },
  {
    question: 'Is my data safe with Chappy?',
    answer: 'Yes, we take data security seriously and use industry-standard encryption to protect your information.'
  },
  {
    question: 'Is Chappy available on all devices?',
    answer: 'Chappy is currently available on iOS and Android devices, with web support coming soon.'
  }
];

export function FAQ() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
            FAQ
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 py-6 overflow-auto pb-20">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[14px] overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-[18px] flex items-center justify-between gap-4"
              >
                <div className="flex-1 text-left font-semibold text-[#1f2121] text-base tracking-tight">
                  {faq.question}
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#1f2121] shrink-0" strokeWidth={2} />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#1f2121] shrink-0" strokeWidth={2} />
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-[18px] pb-[18px] text-[#595e5e] text-base tracking-tight leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom System Bar */}
      <div className="h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
