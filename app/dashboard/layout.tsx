import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-100">
      <Navbar />
      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:px-6 lg:flex-row">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </section>
    </main>
  );
}
