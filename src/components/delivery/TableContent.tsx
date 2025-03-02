
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const statusVariants = {
  pending: "outline",
  returned: "secondary",
  delivered: "default",
  failed: "destructive",
  delayed: "outline",
} as const;

export const TableContent = () => {
  return (
    <div className="min-w-full overflow-x-auto">
      <div className="inline-flex min-w-max gap-4">
        {/* ID Column */}
        <div className="w-32">
          <div className="border-b border-zinc-200 py-3 px-4 font-semibold">
            Identifiant
          </div>
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="border-b border-zinc-100 py-4 px-4"
            >
              {delivery.id}
            </div>
          ))}
        </div>

        {/* Order Column */}
        <div className="w-32">
          <div className="border-b border-zinc-200 py-3 px-4 font-semibold">
            Commande
          </div>
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="border-b border-zinc-100 py-4 px-4"
            >
              {delivery.order}
            </div>
          ))}
        </div>

        {/* Deliverer Column */}
        <div className="w-[420px]">
          <div className="border-b border-zinc-200 py-3 px-4 font-semibold">
            Livreur
          </div>
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="flex items-center gap-4 border-b border-zinc-100 py-4 px-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
                {delivery.deliverer.initials}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold">{delivery.deliverer.email}</div>
                <div className="text-sm text-zinc-600">
                  {delivery.deliverer.contact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Column */}
        <div className="w-32">
          <div className="border-b border-zinc-200 py-3 px-4 font-semibold">
            Status
          </div>
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="border-b border-zinc-100 py-4 px-4"
            >
              <Badge variant={statusVariants[delivery.status]}>
                {statusLabels[delivery.status]}
              </Badge>
            </div>
          ))}
        </div>

        {/* Date Column */}
        <div className="w-40">
          <div className="border-b border-zinc-200 py-3 px-4 font-semibold text-right">
            Date de livraison
          </div>
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="border-b border-zinc-100 py-4 px-4 text-right"
            >
              {delivery.date}
            </div>
          ))}
        </div>

        {/* Actions Column */}
        <div className="w-16">
          <div className="border-b border-zinc-200 py-3" />
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="flex items-center justify-center border-b border-zinc-100 py-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-zinc-100"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/526a26d6a79e334f912bae1fafb9059dd67f73d2edc5336779cc04d2109d5a5f"
                  alt="Actions"
                  className="h-4 w-4"
                />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
