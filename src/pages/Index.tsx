import { Sidebar } from "@/components/layout/Sidebar";
import { DeliveryTable } from "@/components/delivery/DeliveryTable";

const Index = () => {
  return (
    <div className="bg-slate-100 flex items-stretch overflow-hidden justify-between flex-wrap min-h-screen">
      <Sidebar />
      <main className="bg-zinc-100 min-w-60 overflow-hidden flex-1 shrink basis-[0%] p-2.5">
        <div className="bg-neutral-50 border-zinc-100 border w-full overflow-hidden text-xs text-black font-medium text-center p-2.5 rounded-lg border-solid">
          Livraison
        </div>
        <DeliveryTable />
      </main>
    </div>
  );
};

export default Index;
