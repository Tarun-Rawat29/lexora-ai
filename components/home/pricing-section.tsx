import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

type PriceType = {
    name: string;
    price: number;
    description: string,
    items: string[];
    id: String;
    paymentLink: string;
    priceId: string;
};

const plans = [
    {
        name: 'Basic',
        price: 29,
        description: 'Perfect for ocassional use',
        items: [
            '5 summeries per month',
            'Standard processing speed',
            'Email support'
        ],
        id:'basic',
        paymentLink: '',
        priceId: '',
    },
    {
        name: 'Pro',
        price: 199,
        description: 'For professionals and team',
        items: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown export',
        ],
        id: 'pro',
        paymentLink:'',
        priceId:'',
    },
];

const listVariant = {
    hidden: { 
        opacity: 0, 
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
        },
    },
};

const PricingCard = ({ 
    name, 
    price, 
    description, 
    items, 
    id, 
    paymentLink,
} : PriceType) => {
    return (
        <MotionDiv
            variants={listVariant}
            whileHover={{ scale: 1.02 }}
            className="realtive w-full max-w-lg hover:scale-105 hover:transition-all duration-300"
        >
            <div 
                className={cn(
                    "realtive flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] rounded-2xl border-gray-500/20", id === 'pro' && 'border-rose-500 gap-5 border-2' 
                )}
            >
                <MotionDiv
                    variants={listVariant}
                    className="flex flex-col items-start justify-between gap-4"
                >
                    <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                    <p className="text-base-content/80 mt-2">{description}</p>
                    <div className="flex
                    gap-2">
                        <p className="text-5xl tracking-tight font-bold">Rs {price}</p>
                        <div className="flex flex-col justify-end mb-[4px]">
                            <p className="text-xs uppercase font-semibold">INR</p>
                            <p className="text-xs">/month</p>
                        </div>
                    </div>
                    <MotionDiv
                        variants={listVariant}
                        className="space-y-2.5 leading-relaxed text-base flex-1"
                    >
                        {items.map((item, idx) => (
                            <li className="flex items-center gap-2" key={idx}>
                                <CheckIcon size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </MotionDiv>
                    <MotionDiv
                        variants={listVariant}
                        className="flex space-y-2 justify-center w-full"
                    >
                        <Link 
                            href={paymentLink}
                            className={cn(
                                "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
                                id === 'pro' ? 'border-rose-900' : 'border-rose-100 from-rose-400 to-rose-500'
                            )}
                        >
                            Buy Now <ArrowRight size={18} />
                        </Link>
                    </MotionDiv>
                </MotionDiv>
            </div>
        </MotionDiv>
    );
}
export default function PricingSection() {
    return (
        <MotionSection 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative overflow-hidden" 
            id="pricing"
        >
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-10 sm:px-6 lg:px-8 lg:pt-12">
                <MotionDiv
                    variants={itemVariants}
                    className="flex items-center justify-center w-full pb-12"
                >
                    <h2 className="uppercase font-bold text-lg mb-5 text-rose-500">Pricing</h2>
                </MotionDiv>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-16">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </MotionSection>
    );
}