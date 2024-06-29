"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  asChild?: Boolean;
  mode?: "modal" | "redirect";
}

export const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
    let router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  if(mode=="modal")
  {
    return(
        <div>TODO implement modal</div>
    )
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
