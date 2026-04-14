import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex bg-[#EDEDED] text-slate-100 md:p-3 md:gap-3">
      <Sidebar />
      <main className="flex-1 min-w-0 flex overflow-hidden bg-arblack md:rounded-2xl md:border md:border-arborder md:shadow-xl md:shadow-black/10 pt-14 pb-16 md:pt-0 md:pb-0">
        {children}
      </main>
    </div>
  );
}
