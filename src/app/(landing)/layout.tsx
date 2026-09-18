import { HeaderLanding } from "@/components/headers/header-landing";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLanding />
      <main>{children}</main>
    </>
  );
}
