import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
    return(
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <MotionDiv 
                variants={itemVariants}
                className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group"
            >
                <Badge
                    variant={'secondary'}
                    className="relative px-6 py-3 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-300"
                >
                    <span className="h-auto w-auto">
                        <Sparkles className="mr-2 text-rose-600 animate-pulse" />
                    </span>
                    <p className="text-base text-rose-600">AI-Powered Content Creation</p>
                </Badge>
            </MotionDiv>
            <MotionDiv 
                variants={itemVariants} 
                className="capitalize text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                Start Uploading{' '}
                <span className="relative inline-block ">
                    <span className="realative z-10 px-2 font-bold">Your PDF's</span>
                    <span className="absolute inset-0 bg-rose-300/20 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                </span>
            </MotionDiv>
            <MotionDiv 
                variants={itemVariants} 
                className="py-3 mx-auto max-w-[700px] text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                    <p>Upload your PDF and let our AI do the magic! ✨</p>
            </MotionDiv>
        </div>
    )
}