import { FileText } from 'lucide-react';
import { Button } from "../ui/button";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="container flex items-center justify-between py-4 lg:pr-8 lg:pl-2 px-2 mt-2 mx-auto">
            <div className="flex lg:flex-1">
                <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
                    <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out"></FileText>
                    <span className="font-extrabold text-gray-900 lg:text-xl">Lexora</span>
                </NavLink>
            </div>
            <div className="flex lg: justify-center gap-4 lg:gap-12 lg:items-center">
                <NavLink href="/#pricing">Pricing</NavLink>
                <SignedIn>
                    <NavLink href="/dashboard">Your Summaries</NavLink>
                </SignedIn>
            </div>
            <div className="flex lg:justify-end lg:flex-1">
                <SignedIn>
                    <div className="flex gap-2 items-center">
                        <NavLink href="/upload">Upload a PDF</NavLink>
                        <div>Pro</div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </SignedIn>
                <SignedOut>
                    <NavLink href="/sign-in">Sign in</NavLink>
                </SignedOut>
            </div>
        </nav>
    );
}