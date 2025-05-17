import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const buttonVariants = {
    scale: 1.05,
    transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
    },
};

export default function HeroSection() {
    return (
        <MotionSection 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto flex flex-col z-0 py-9 items-center sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl lg:pt-16"
        > 
            <MotionDiv 
                variants={itemVariants}
                className="flex justify-center"
            >
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                    <Badge
                        variant={'secondary'} 
                        className="w-[30vh] relative px-9 py-3 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 flex justify-between"
                    >
                            <span className="h-auto w-auto">
                                <Sparkles className="mr-2 text-rose-600 animate-pulse" />
                            </span>
                            <p className="text-base text-rose-600">Powered by AI</p>
                    </Badge>
                </div>
            </MotionDiv>
            <MotionH1 
                variants={itemVariants}
                className="font-bold py-6 text-center mt-3"
            >
                Transform PDFs into{' '}
                <span className="relative inline-block">
                    <MotionSpan
                        whileHover={buttonVariants} 
                        className="realative z-10 px-2"
                    >
                        concise
                    </MotionSpan>
                    <span className="absolute inset-0 bg-rose-300/20 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                </span>{' '}
                summaries
            </MotionH1>
            <MotionH2 
                variants={itemVariants}
                className="text-lg py-3 sm:text-xl lg:text-xl text-center px-4 lg:px-0 text-gray-600 font-normal">
                Get a beautiful summary reel of the document in seconds.
            </MotionH2>
            <MotionDiv
                variants={itemVariants}
                whileHover={buttonVariants}
            >
                <Button variant={'link'} className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300">
                    <Link href='/#pricing' className="flex gap-2 items-center">
                        <span>Try Lexora</span>
                        <ArrowRight className="animate-pulse" />
                    </Link>
                </Button>
            </MotionDiv>
        </MotionSection>
    )
}