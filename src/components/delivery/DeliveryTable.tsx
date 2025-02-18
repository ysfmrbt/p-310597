
import { TableHeader } from "./TableHeader";
import { TableContent } from "./TableContent";
import { TablePagination } from "./TablePagination";

export const DeliveryTable = () => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <TableHeader />
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black">
            Dernières livraisons
          </h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-zinc-200">
          <TableContent />
        </div>
        <TablePagination />
      </div>
    </div>
  );
};
