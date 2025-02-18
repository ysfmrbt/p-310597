import { Separator } from "@/components/ui/separator";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";

export const Sidebar = () => {
  return (
    <aside className="bg-neutral-50 border-zinc-100 border min-w-60 w-64 border-solid flex flex-col justify-between">
      <div>
        <SidebarHeader />
        <SidebarNavigation />
      </div>
      <SidebarFooter />
    </aside>
  );
};
