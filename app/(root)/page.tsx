import Navbar from "@/components/shared/navbar";
import Loader from "@/components/ui/Loader";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/landing/Header"), {
  loading: () => <Loader />,
  ssr: false, // This line will take care of deciding whether to load on server or client side
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
          <Navbar />

      <Header />
    </main>
  );
}
