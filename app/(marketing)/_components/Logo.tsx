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
            className="dark:hidden"
            />
            <Image 
            src="/idea-dark.svg"
            alt="Logo"
            width={30}
            height={30}
            className="hidden dark:block"
            />
            <p className={cn("font-semibold", font.className)}>
                Notion
            </p>
        </div>
    );
}