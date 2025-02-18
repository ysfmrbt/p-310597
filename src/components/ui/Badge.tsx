
import { cn } from "@/lib/utils";

export interface BadgeProps {
  status: "pending" | "returned" | "delivered" | "failed" | "delayed";
  children: React.ReactNode;
}

const statusStyles = {
  pending: "bg-yellow-100 text-[#010000]",
  returned: "bg-cyan-100 text-[#000001]",
  delivered: "bg-emerald-100 text-black",
  failed: "bg-red-100 text-[#010000]",
  delayed: "bg-fuchsia-100 text-[#010001]",
};

export const Badge = ({ status, children }: BadgeProps) => {
  return (
    <div
      className={cn(
        "px-1.5 py-1 rounded-md text-xs font-medium",
        statusStyles[status],
      )}
    >
      {children}
    </div>
  );
};
