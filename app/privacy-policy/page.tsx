import BgGradient from "@/components/common/bg-gradient";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BgGradient className="from-emerald-300 via-teal-300 to-cyan-300 top-0" />
      </div>
      <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight mb-4">
        <span className="text-transparent bg-linear-to-r from-rose-600 via-rose-500 to-orange-500 bg-clip-text">
          Privacy Policy
        </span>
      </h1>

      <p className="mb-4 text-gray-700">
        At Lexora, accessible from https://mydomain.com, one of our main priorities is the privacy of our users. This Privacy Policy document outlines the types of information that is collected and recorded by Lexora and how we use it.
      </p>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <BgGradient className="from-red-200 via-rose-200 to-pink-200 bottom-0 right-0 translate-x-1/4" />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4 text-gray-700">
        We may collect personal information that you voluntarily provide to us when you register on the website, subscribe to a plan, or interact with our services. This may include:
      </p>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number (if provided)</li>
        <li>Billing details and payment information</li>
        <li>Any other information you choose to provide</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4 text-gray-700">
        We use the information we collect in the following ways:
      </p>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>To provide and maintain our services</li>
        <li>To process transactions and send related information</li>
        <li>To communicate with you, including sending service updates and support</li>
        <li>To improve and personalize the user experience</li>
        <li>To detect and prevent fraudulent activity</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Log Files</h2>
      <p className="mb-4 text-gray-700">
        Lexora follows a standard procedure of using log files. These files log visitors when they use the website. The information collected includes IP addresses, browser type, ISP, date/time stamp, referring/exit pages, and possibly the number of clicks.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
      <p className="mb-4 text-gray-700">
        Like most websites, Lexora uses cookies to enhance the user experience. These cookies store information such as preferences and pages visited to improve future experiences.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Third-Party Services</h2>
      <p className="mb-4 text-gray-700">
        We may use third-party tools (like Razorpay for payments) that collect and process data according to their own privacy policies. Please refer to their websites for more information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p className="mb-4 text-gray-700">
        We implement appropriate technical and organizational measures to secure your personal data and prevent unauthorized access, disclosure, or misuse.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Your Consent</h2>
      <p className="mb-4 text-gray-700">
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4 text-gray-700">
        We may update our Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about this Privacy Policy, you can contact us at:
        <br />
        <strong>Email:</strong> <span className="hover:text-rose-500">tarunrawat687@gmail.com</span>
      </p>
    </div>
  );
}