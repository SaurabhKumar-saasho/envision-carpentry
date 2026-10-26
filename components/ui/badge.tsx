import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-white shadow-xs hover:bg-destructive/80",
        outline:
          "text-foreground border-border",
        amber:
          "border-amber-400/40 bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider",
        wood:
          "border-amber-800/25 bg-amber-800/10 text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-200 font-bold uppercase tracking-wider shadow-2xs",
        woodDark:
          "border-amber-300/40 bg-white/10 text-amber-200 font-bold uppercase tracking-wider backdrop-blur-xs",
        emerald:
          "border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
