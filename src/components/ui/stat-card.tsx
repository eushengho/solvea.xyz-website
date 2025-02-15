
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

export function StatCard({ title, value, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-6 shadow-subtle transition-all hover:shadow-medium",
        className
      )}
    >
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-secondary">{title}</div>
    </div>
  );
}
