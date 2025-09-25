"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pt-5 pb-5">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline decoration-primary decoration-4">
                Notion-X</span>
            </h1>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 pt-5 pb-5">
                <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-primary pt-2 pb-2">
                    Portfolio Project Highlight
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-normal">
                    This is a full-stack Notion clone, built to showcase my skills in modern web development. Features include adding image and text blocks, real-time collaboration, and more.
                </p>
                <span className="text-sm text-muted-foreground block mt-2">by KC Kim</span>
            </div>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                Explore Notion-X
                <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
            </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Notion-X free
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
}