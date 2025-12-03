import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../styles/variants/button-variants';
import { Text } from './Text';

interface ButtonProps
   extends VariantProps<typeof buttonVariants>,
      React.ComponentProps<'button'> {
   className?: string;
   children: React.ReactNode;
}

export function Button({
   variant,
   size,
   isDisabled,
   className,
   children,
   ...props
}: ButtonProps) {
   return (
      <button
         className={buttonVariants({ variant, size, isDisabled, className })}
         {...props}
      >
         <Text variant='body-button-sm'>{children}</Text>
      </button>
   );
}
