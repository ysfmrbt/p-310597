
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen min-w-[280px] flex-col justify-between border-r border-zinc-200 bg-white">
      <div className="flex-1 overflow-y-auto">
        <SidebarHeader />
        <SidebarNavigation />
      </div>
      <SidebarFooter />
    </aside>
  );
};
