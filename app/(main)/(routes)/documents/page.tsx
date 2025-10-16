"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({
            title: "Untitled",
        });

        toast.promise(promise, {
            loading: "Creating new note...",
            success: "New note created!",
            error: "Failed to create new note.",
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/team.svg"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />
            <Image
                src="/team-dark.svg"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />
            <h2 className="text-2xl font-medium">
                Welcome to {user?.firstName}&apos;s Notion X
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="w-4 h-4"/>
                Create a note
            </Button>
        </div>
    );
}

export default DocumentsPage;