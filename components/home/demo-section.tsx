import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import SummaryViewer from "../summaries/summary-viewer";

const DEMO_SUMMARY = `
# Lexora: AI-Powered PDF Summarizer 🚀

🎯  Concisely summarize lengthy PDFs & documents with Lexora's AI!

• 📌 Affordable plans for students, professionals & researchers.


# Document Details
• 📄 Type:  Product Overview
• 👥 For: Students, Researchers, Professionals


# Key Highlights
• 🚀 AI-powered PDF summarization in seconds.
• ⭐ Affordable tiered subscription plans via Razorpay.
• 💫 Clean, modern UI/UX for seamless experience.


# Why it Matters
• 💡 Save precious time by getting to the core information in lengthy documents, boosting productivity and efficiency across various fields.


# Main Points
• 🎯 Lexora provides fast and accurate summaries of complex documents.
• 💪 User-friendly interface with multiple subscription options.
• 🔥 Improves reading comprehension and reduces time spent on document review.


# Pro Tips
• ⭐ Utilize the Pro plan for unlimited summaries and faster processing.
• 💎 Leverage markdown export for easy integration into your workflow.
• 📌 Stay informed about your usage limits and plan status through in-app notifications.


# Key Terms to Know
• 📚  **LLMs (Large Language Models):** AI technology powering Lexora's summarization capabilities.
• 🔍 **Razorpay:** Secure payment gateway integrated into Lexora for subscription management.


# Bottom Line
• 💫 Lexora is your go-to solution for efficient and affordable document summarization.
`;

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div
                aria-hidden= "true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
                >
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }} 
                        className="inline-flex items-center p-2 bg-gray-50/40 backdrop-blur-xs border justify-center rounded-2xl mb-4 border-gray-500/20"
                    >
                        <Pizza className="w-6 h-6 text-rose-500" />
                    </MotionDiv>
                    <div className="text-center mb-16">
                        <MotionH3 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="font-bold text-2xl max-w-2xl mx-auto px-4 sm:px-6"
                        >
                            Watch how Lexora transforms{' '} <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">this Next.js course PDF</span>{' '} into an esay-to-read summary!
                        </MotionH3>
                    </div>
                </div>
                <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                    <MotionDiv
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                    >
                        <SummaryViewer summary={DEMO_SUMMARY} />
                    </MotionDiv>
                </div>
            </div> 
        </section>
    );
}