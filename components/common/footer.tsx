import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import BgGradient from "./bg-gradient";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-12 pb-5 border-t border-gray-200">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <BgGradient className="from-emerald-300 via-teal-300 to-cyan-300 top-0 h-[390px]" />
        </div>
        <div className="container mx-auto px-4 md:px-20 flex flex-col items-center justify-between gap-10 md:gap-6 md:flex-row">
            {/* Left Section */}
            <div className="flex flex-col items-center justify-center w-[175px]">
                <div className="relative p-[2.5px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                    <Badge
                        variant={'secondary'} 
                        className="w-auto h-auto relative text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 flex justify-between pt-2"
                    >
                        <div className="rounded-full overflow-hidden h-15 w-15 mb-2 hover:scale-110">
                            <img
                            src="/me.jpg"
                            alt="Tarun Singh Rawat"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Badge>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-700">
                    Tarun Singh Rawat
                </h3>
                <h3 className="mt-1.5 text-xs font-normal text-gray-700">
                    Fullstack Developer
                </h3>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div>
                    <Link href="/privacy-policy" className="text-muted-foreground text-sm hover:underline">
                        Privacy Policy
                    </Link>
                </div>
                <div>
                    <Link href="/return-and-refund-policy" className="text-muted-foreground text-sm hover:underline">
                        Return & Refund Policy
                    </Link>
                </div>
                <div>
                    <Link href="/terms-conditions" className="text-muted-foreground text-sm hover:underline">
                        Terms & Conditions
                    </Link>
                </div>
            </div>

            {/* Right Section */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BgGradient className="from-red-300 via-rose-300 to-pink-300 top-0 h-[390px] right-0 translate-x-1/4" />
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-700">
            <Link
                href="https://www.instagram.com/_.42028040._"
                target="_blank"
                className="flex items-center gap-2 hover:text-rose-500 transition"
            >
                <Instagram className="h-4 w-4" />
                Instagram
            </Link>
            <Link
                href="mailto:tarunrawat687@gmail.com"
                className="flex items-center gap-2 hover:text-rose-500 transition"
            >
                <Mail className="h-4 w-4" />
                tarunrawat687@gmail.com
            </Link>
            <Link
                href="https://www.linkedin.com/in/your-linkedin" // Replace with your link
                target="_blank"
                className="flex items-center gap-2 hover:text-rose-500 transition"
            >
                <Linkedin className="h-4 w-4" />
                LinkedIn
            </Link>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} Lexora. Built with ❤️ by Tarun Singh Rawat.
        </div>
    </footer>
  );
}