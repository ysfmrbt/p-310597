
import { Sidebar } from "@/components/layout/Sidebar";
import { DeliveryTable } from "@/components/delivery/DeliveryTable";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="bg-white rounded-lg p-3 text-center text-sm font-medium text-black shadow-sm">
          Livraison
        </div>
        <DeliveryTable />
      </main>
    </div>
  );
};

export default Index;
