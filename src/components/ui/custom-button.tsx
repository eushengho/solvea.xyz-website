
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" && 
            "bg-secondary text-white shadow hover:bg-secondary/90",
          variant === "secondary" && 
            "bg-secondary text-white shadow-sm hover:bg-secondary/80",
          size === "default" && "h-10 px-4 py-2",
          size === "lg" && "h-12 px-8 py-3 text-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
