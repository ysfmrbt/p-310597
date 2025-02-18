
import { Sidebar } from "@/components/layout/Sidebar";
import { DeliveryTable } from "@/components/delivery/DeliveryTable";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <div className="mb-6 bg-white rounded-lg p-3 text-center text-sm font-medium text-black shadow-sm">
          Livraison
        </div>
        <DeliveryTable />
      </main>
    </div>
  );
};

export default Index;
