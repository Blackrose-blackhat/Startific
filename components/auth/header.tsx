import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
interface HeaderProps {
    label?:string;
}

export const Header = ({label}:HeaderProps) => {
    return(
        <div className={cn("flex flex-col space-y-5 justify-center items-center", font.className)}>
            <h1 className={cn("text-4xl font-semibold")}>Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}
