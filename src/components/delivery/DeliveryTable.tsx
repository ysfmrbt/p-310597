import { TableHeader } from "./TableHeader";
import { TableContent } from "./TableContent";
import { TablePagination } from "./TablePagination";

export const DeliveryTable = () => {
  return (
    <div className="border border-[color:var(--Border-borderPrimary,#E4E4E7)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white w-full mt-4 rounded-lg border-solid">
      <TableHeader />
      <div className="w-full mt-2.5 px-5 py-2.5 rounded-lg">
        <div className="text-black text-base font-semibold">
          Dernières livraisons
        </div>
        <TableContent />
        <TablePagination />
      </div>
    </div>
  );
};
