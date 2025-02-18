
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col justify-between border-r border-zinc-200 bg-white">
      <div>
        <SidebarHeader />
        <SidebarNavigation />
      </div>
      <SidebarFooter />
    </aside>
  );
};
