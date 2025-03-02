
import { cn } from "@/lib/utils";

export interface BadgeProps {
  status: "pending" | "returned" | "delivered" | "failed" | "delayed";
  children: React.ReactNode;
}

const statusStyles = {
  pending: "bg-yellow-100 text-zinc-900 border border-yellow-200",
  returned: "bg-cyan-100 text-zinc-900 border border-cyan-200",
  delivered: "bg-emerald-100 text-zinc-900 border border-emerald-200",
  failed: "bg-red-100 text-zinc-900 border border-red-200",
  delayed: "bg-fuchsia-100 text-zinc-900 border border-fuchsia-200",
};

export const Badge = ({ status, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        "px-2.5 py-1 rounded-md text-xs font-medium inline-block",
        statusStyles[status],
      )}
    >
      {children}
    </div>
  );
};
