import BgGradient from "@/components/common/bg-gradient";

export default function ReturnRefundPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BgGradient className="from-emerald-300 via-teal-300 to-cyan-300 top-0" />
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight mb-4">
                <span className="text-transparent bg-linear-to-r from-rose-600 via-rose-500 to-orange-500 bg-clip-text">
                Return & Refund Policy
                </span>
            </h1>

            <p className="mb-4 text-gray-700">
                At <strong>Lexora</strong>, we strive to offer high-quality digital products and subscription-based services that provide real value to our users. Please read our return and refund policy carefully before purchasing or subscribing to any of our plans.
            </p>

            <div className="fixed inset-0 z-0 pointer-events-none">
                <BgGradient className="from-red-200 via-rose-200 to-pink-200 bottom-0 right-0 translate-x-1/4" />
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-2">1. Digital Nature of Services</h2>
            <p className="mb-4 text-gray-700">
                All offerings on Lexora, including our subscription plans (Basic and Pro), are digital services. Once a plan is purchased and activated, it is immediately accessible and consumed. Due to the nature of digital goods, we do not accept any returns.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. No Refunds</h2>
            <p className="mb-4 text-gray-700">
                All purchases made on Lexora are final. We do not issue refunds under any circumstances, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
                <li>Change of mind after purchase</li>
                <li>Accidental purchases</li>
                <li>Unused or partially used subscriptions</li>
                <li>Dissatisfaction with features included in the plan</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. Cancellation</h2>
            <p className="mb-4 text-gray-700">
                You may cancel your subscription at any time; however, cancellations will only stop the auto-renewal for the next billing cycle. You will continue to have access to your current subscription benefits until the end of the billing period. <strong>No partial refunds</strong> will be provided for unused time.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Exceptional Cases</h2>
            <p className="mb-4 text-gray-700">
                If you believe you were charged in error, please contact our support team at <a href="mailto:tarunrawat687@gmail.com" className="text-rose-500 no-underline">tarunrawat687@gmail.com</a>. Our team will investigate the issue, but please note that refunds are granted only in rare and exceptional cases, such as duplicate transactions caused by a technical fault.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">5. By Purchasing, You Agree</h2>
            <p className="mb-4 text-gray-700">
                By subscribing to any plan or making a payment on Lexora, you acknowledge that you have read and agreed to this Return & Refund Policy.
            </p>

            <p className="mt-6 text-gray-700 font-medium">
                If you have any questions or concerns about this policy, feel free to reach out to us at <a href="mailto:tarunrawat687@gmail.app" className="text-rose-500 no-underline">tarunrawat687@gmail.com</a>.
            </p>
        </div>
    );
}