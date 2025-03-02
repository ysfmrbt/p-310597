
import { Sidebar } from "@/components/layout/Sidebar";

const Discounts = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <div className="mb-6 bg-white rounded-lg p-3 text-center text-sm font-medium text-black shadow-sm">
          Remises
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Remises</h1>
          <p className="text-zinc-600">Gérez vos remises et promotions ici.</p>
        </div>
      </main>
    </div>
  );
};

export default Discounts;
