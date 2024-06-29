import Header from "@/components/landing/Header";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-switcher";
import Image from "next/image";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      {/* <LoginButton >
        <Button>Login</Button>
      </LoginButton> */}
    
    </main>
  );
}
