
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-switcher";
import Image from "next/image";
import { Suspense, lazy } from "react";
const Header = lazy(()=> import("@/components/landing/Header"))
export default function Home() {
 
console.log(process.env.
  GITHUB_CLIENT_ID)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Suspense fallback={<div>Loding...</div>}>
      
      <Header />
      </Suspense>
      {/* <LoginButton >
        <Button>Login</Button>
      </LoginButton> */}
    
    </main>
  );
}
