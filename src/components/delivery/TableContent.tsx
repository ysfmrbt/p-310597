
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const deliveries = [
  {
    id: "#LIV1000",
    order: "#COM1000",
    deliverer: {
      initials: "LA",
      email: "leslie.alexander@example.com",
      contact: "jane.cooper@example.com",
    },
    status: "pending" as const,
    date: "17 Février, 2025",
  },
  {
    id: "#LIV1001",
    order: "#COM1001",
    deliverer: {
      initials: "MF",
      email: "michael.foster@example.com",
      contact: "jane.cooper@example.com",
    },
    status: "returned" as const,
    date: "17 Février, 2025",
  },
  {
    id: "#LIV1002",
    order: "#COM1002",
    deliverer: {
      initials: "DV",
      email: "dries.vincent@example.com",
      contact: "jane.cooper@example.com",
    },
    status: "delivered" as const,
    date: "16 Février, 2025",
  },
  {
    id: "#LIV1003",
    order: "#COM1003",
    deliverer: {
      initials: "LW",
      email: "lindsay.walton@example.com",
      contact: "jane.cooper@example.com",
    },
    status: "failed" as const,
    date: "20 Février, 2025",
  },
  {
    id: "#LIV1004",
    order: "#COM1004",
    deliverer: {
      initials: "CH",
      email: "courtney.henry@example.com",
      contact: "jane.cooper@example.com",
    },
    status: "delayed" as const,
    date: "19 Février, 2025",
  },
];

const statusLabels = {
  pending: "En attente",
  returned: "Retournée",
  delivered: "Livré",
  failed: "Echec",
  delayed: "Retardée",
};

export const TableContent = () => {
  return (
    <div className="flex w-full items-stretch gap-[27px] justify-between flex-wrap mt-4">
      {/* ID Column */}
      <div className="text-sm text-black font-medium w-[119px]">
        <div className="border-zinc-200 w-full font-semibold px-6 py-2.5 border-b">
          Identifiant
        </div>
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 min-h-14 w-full px-6 py-[18px] border-b"
          >
            {delivery.id}
          </div>
        ))}
      </div>

      {/* Order Column */}
      <div className="text-sm text-black font-medium w-[125px]">
        <div className="border-zinc-200 w-full font-semibold px-6 py-2.5 border-b">
          Commande
        </div>
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 min-h-14 w-full px-6 py-[18px] border-b"
          >
            {delivery.order}
          </div>
        ))}
      </div>

      {/* Deliverer Column */}
      <div className="min-w-60 w-[418px]">
        <div className="border-zinc-200 w-full text-sm text-black font-semibold px-6 py-2.5 border-b">
          Livreur
        </div>
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 flex min-h-14 w-full items-center gap-4 px-6 py-2 border-b"
          >
            <div className="flex items-center gap-2 text-base text-[#010101] font-medium text-center">
              <div className="bg-zinc-900 text-white min-h-10 min-w-10 w-10 h-10 rounded-full flex items-center justify-center">
                {delivery.deliverer.initials}
              </div>
            </div>
            <div className="text-sm text-black leading-none flex-1">
              <div className="font-semibold">{delivery.deliverer.email}</div>
              <div className="font-medium">{delivery.deliverer.contact}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Column */}
      <div className="text-xs font-medium w-[120px]">
        <div className="border-zinc-200 w-full text-sm text-black font-semibold px-6 py-2.5 border-b">
          Status
        </div>
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 flex min-h-14 items-center px-6 py-4 border-b"
          >
            <Badge status={delivery.status}>
              {statusLabels[delivery.status]}
            </Badge>
          </div>
        ))}
      </div>

      {/* Date Column */}
      <div className="text-sm text-black font-medium w-[138px]">
        <div className="border-zinc-200 w-full font-semibold text-right px-6 py-2.5 border-b">
          Date de livraison
        </div>
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 min-h-14 w-full px-6 py-4 border-b"
          >
            {delivery.date}
          </div>
        ))}
      </div>

      {/* Actions Column */}
      <div className="w-[68px]">
        <div className="border-zinc-200 min-h-10 w-full py-2.5 border-b" />
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="border-zinc-100 flex min-h-14 w-full items-center px-4 py-2.5 border-b"
          >
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/526a26d6a79e334f912bae1fafb9059dd67f73d2edc5336779cc04d2109d5a5f"
                alt="Actions"
                className="w-4 h-4"
              />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
