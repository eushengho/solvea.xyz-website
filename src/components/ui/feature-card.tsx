
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl bg-white p-6 shadow-subtle transition-all hover:shadow-medium",
        className
      )}
    >
      <div className="flex items-center space-x-2 mb-3">
        <ArrowRight className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
