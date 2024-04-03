import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? "bg-black/20 border border-white/10 p-1.5 rounded-md"
          : "bg-white/10 border border-white/10 p-1.5 rounded-md"
      }
    >
      {props.children}
    </button>
  );
}
