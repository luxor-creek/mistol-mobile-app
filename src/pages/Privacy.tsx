import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function Privacy() {
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
            Privacy Policy
          </div>
          <div className="opacity-0 w-[35px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 overflow-auto pb-20">
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">1. Introduction</h3>
            <p className="text-[#595e5e]">
              At Chappy, we are committed to protecting your privacy. This privacy policy explains what personal information we collect, how we use it, and how we keep it safe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">2. Information We Collect</h3>
            <p className="text-[#595e5e] mb-2">
              When you use Chappy, we may collect the following types of information:
            </p>
            <ul className="list-disc ml-5 text-[#595e5e] space-y-1">
              <li>Personal Information: If you create an account, we may collect your name, email address, and other details you provide.</li>
              <li>Usage Data: We collect information about how you interact with the app, such as your preferences, chat history, and activity.</li>
              <li>Device Information: We may collect information about your device, like the type of device, operating system, and version of the app you are using.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">3. How We Use Your Information</h3>
            <p className="text-[#595e5e] mb-2">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc ml-5 text-[#595e5e] space-y-1">
              <li>To provide and improve our services</li>
              <li>To personalize your experience</li>
              <li>To communicate with you, including sending app updates or support information</li>
              <li>To ensure the security and functionality of the app</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">4. Data Security</h3>
            <p className="text-[#595e5e]">
              We take your privacy seriously and use reasonable measures to protect your data from unauthorized access or disclosure. However, no data transmission over the internet can be completely secure, and we cannot guarantee full security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">5. Sharing Your Information</h3>
            <p className="text-[#595e5e] mb-2">
              We do not share your personal information with third parties except in the following cases:
            </p>
            <ul className="list-disc ml-5 text-[#595e5e] space-y-1">
              <li>When required by law or to comply with legal processes</li>
              <li>To protect our rights, property, or safety, or that of others</li>
              <li>If we partner with a third-party service to improve our app, we will ensure that they follow similar privacy practices.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">6. Data Retention</h3>
            <p className="text-[#595e5e]">
              We will retain your information as long as necessary to provide our services, comply with legal obligations, or resolve disputes. You can request to delete your account at any time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">7. Your Rights</h3>
            <p className="text-[#595e5e]">
              You have the right to access, correct, or delete your personal data. If you wish to update or delete your information, you can do so through the app or contact us for assistance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">8. Updates to This Privacy Policy</h3>
            <p className="text-[#595e5e]">
              We may update this privacy policy from time to time. When we make significant changes, we will notify you through the app. By continuing to use Chappy, you accept the updated policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1f2121] text-base mb-1">9. Contact Us</h3>
            <p className="text-[#595e5e]">
              If you have any questions or concerns about this privacy policy, please contact us via the support section in the app or by email.
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
