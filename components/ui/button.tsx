import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center cursor-pointer rounded-md border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Standard Shadcn Variants (Theme-aware) */
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground shadow-xs",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-xs",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto",

        /* Carpentry & Envision Theme-Specific Variants */
        wood:
          "bg-[var(--wood)] text-[var(--wood-foreground)] hover:brightness-110 shadow-sm font-medium",
        amber:
          "bg-[var(--amber)] text-[var(--amber-foreground)] hover:bg-[var(--amber-hover)] shadow-sm font-semibold tracking-wide",
        charcoal:
          "bg-[var(--charcoal)] text-[var(--charcoal-foreground)] hover:bg-black/90 shadow-sm font-medium",
        heroPrimary:
          "bg-white text-stone-900 hover:bg-stone-100 shadow-md font-semibold tracking-tight",
        heroOutline:
          "border border-white/70 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-medium",
      },
      size: {
        default: "h-9 gap-2 px-4 py-2 text-sm",
        xs: "h-6 gap-1 px-2 text-xs rounded-sm [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-xs rounded-md [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2.5 px-6 text-sm md:text-base rounded-md [&_svg:not([class*='size-'])]:size-5",
        xl: "h-13 gap-3 px-8 text-base md:text-lg rounded-lg font-semibold [&_svg:not([class*='size-'])]:size-5",
        icon: "size-9 rounded-md",
        "icon-sm": "size-8 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-11 rounded-md [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as any)}
    />
  )
}

export { Button, buttonVariants }
