import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex bg-arblack text-slate-100">
      <Sidebar />
      <main className="flex-1 min-w-0 flex overflow-hidden pt-14 pb-16 md:pt-0 md:pb-0">
        {children}
      </main>
    </div>
  );
}
