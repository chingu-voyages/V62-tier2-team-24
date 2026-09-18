import { HeaderLanding } from "@/components/headers/header-landing";
import { Footer } from "@/components/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLanding />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
