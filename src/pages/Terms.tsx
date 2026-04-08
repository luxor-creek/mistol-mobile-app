import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
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
            Terms & Conditions
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 overflow-auto pb-20">
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">1. Acceptance of Terms</h3>
            <p className="text-[#595e5e]">
              By using the Chappy app, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you should not use the app.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">2. User Responsibilities</h3>
            <p className="text-[#595e5e]">
              You agree to use Chappy responsibly and not for any unlawful or harmful purposes. This includes not sharing inappropriate content, spamming, or engaging in any actions that could disrupt the app's services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">3. Privacy and Data</h3>
            <p className="text-[#595e5e]">
              Chappy values your privacy. We collect and process certain information to improve your experience. Please review our Privacy Policy for details on how your data is handled.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">4. Account Security</h3>
            <p className="text-[#595e5e]">
              You are responsible for maintaining the security of your account and password. Notify us immediately if you suspect any unauthorized access to your account.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">5. Usage Restrictions</h3>
            <p className="text-[#595e5e]">
              You agree not to copy, modify, or distribute any content or features from Chappy without permission. Chappy is for personal use only and may not be used for commercial purposes without prior authorization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">6. Updates and Changes</h3>
            <p className="text-[#595e5e]">
              Chappy may update or modify the app, its features, or these terms at any time. You will be notified of any significant changes. Continued use of the app after updates implies acceptance of the new terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">7. Limitation of Liability</h3>
            <p className="text-[#595e5e]">
              Chappy is provided "as is." We do not guarantee that the app will always be error-free, secure, or available. We are not liable for any damages resulting from using or not being able to use the app.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">8. Termination of Service</h3>
            <p className="text-[#595e5e]">
              We reserve the right to suspend or terminate your access to Chappy if you violate these terms. You can also delete your account at any time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">9. Governing Law</h3>
            <p className="text-[#595e5e]">
              These terms are governed by the laws of the jurisdiction where you reside.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">10. Contact Us</h3>
            <p className="text-[#595e5e]">
              For any questions or concerns about these terms, you can contact us through the app's support section or via email.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom System Bar */}
      <div className="h-[34px] flex items-center justify-center pb-2">
        <div className="bg-[#1f2121] h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
