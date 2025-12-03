import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../styles/variants/button-variants';
import { Text } from './Text';

interface ButtonProps
   extends Omit<VariantProps<typeof buttonVariants>, 'disabled'>,
      React.ComponentProps<'button'> {
   className?: string;
   children: React.ReactNode;
}

export function Button({
   variant,
   size,
   disabled,
   className,
   children,
   ...props
}: ButtonProps) {
   return (
      <button
         className={buttonVariants({ variant, size, disabled, className })}
         {...props}
      >
         <Text variant='body-button-sm'>{children}</Text>
      </button>
   );
}
