import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image 
            src="/x_logo.svg"
            alt="Logo"
            width={30}
            height={30}
            />
            <p className={cn("font-semibold", font.className)}>
                Notion-X
            </p>
        </div>
    );
}