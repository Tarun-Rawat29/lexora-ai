import BgGradient from "@/components/common/bg-gradient";

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BgGradient className="from-emerald-300 via-teal-300 to-cyan-300 top-0" />
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight mb-4">
                <span className="text-transparent bg-linear-to-r from-rose-600 via-rose-500 to-orange-500 bg-clip-text">
                    Terms & Conditions
                </span>
            </h1>

            <p className="mb-4">
                By accessing and using Lexora, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use the platform.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Service</h2>
            <p className="mb-4">
                Lexora is a subscription-based platform. You agree to use the service only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the platform.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. Account Responsibilities</h2>
            <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. Subscriptions & Payments</h2>
            <p className="mb-4">
                By subscribing to a plan, you authorize Lexora to charge your payment method on a recurring basis. All payments are non-refundable except as outlined in our Refund Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
            <p className="mb-4">
                All content on Lexora, including logos, branding, design, and materials, are owned by Lexora and protected by copyright and intellectual property laws. You may not use, reproduce, or redistribute any content without our permission.
            </p>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BgGradient className="from-red-200 via-rose-200 to-pink-200 bottom-0 right-0 translate-x-1/4" />
            </div>
            <h2 className="text-xl font-semibold mt-8 mb-2">5. Termination</h2>
            <p className="mb-4">
                Lexora reserves the right to terminate or suspend your access at any time, with or without notice, for violating these terms or engaging in misuse of the platform.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
            <p className="mb-4">
                Lexora is not liable for any indirect, incidental, or consequential damages resulting from your use of the service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
            <p className="mb-4">
                We may revise these Terms & Conditions at any time. By continuing to use Lexora after changes are made, you agree to be bound by the updated terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
            <p className="mb-4">
                These terms are governed by the laws of India. Any disputes will be resolved in the appropriate courts within India.
            </p>

            <p className="mt-8 mb-4">
                If you have any questions about these Terms & Conditions, contact us at{" "}
                <a href="mailto:tarunrawat687@gmail.com" className="text-rose-500 no-underline">
                tarunrawat687@gmail.com
                </a>.
            </p>
        </div>
    );
}