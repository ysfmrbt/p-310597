
import { TableHeader } from "./TableHeader";
import { TableContent } from "./TableContent";
import { TablePagination } from "./TablePagination";

export const DeliveryTable = () => {
  return (
    <div className="mt-6 rounded-lg border border-zinc-200 bg-white shadow-sm">
      <TableHeader />
      <div className="p-6">
        <h2 className="mb-4 text-lg font-semibold text-black">
          Dernières livraisons
        </h2>
        <TableContent />
        <TablePagination />
      </div>
    </div>
  );
};
