import { cn } from "../../libs/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn("bg-blue-400 text-white rounded-md py-4 px-6 hover:bg-blue-700 transition-all duration-150 delay-150", className)}
      {...props}
    >
      {children}
    </button>
  );
}
