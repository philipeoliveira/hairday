import { cva } from 'class-variance-authority';

export const IconVariants = cva('', {
   variants: {
      variant: {
         primary: 'fill-yellow',
      },
      size: {
         md: 'size-5',
      },
   },
   defaultVariants: {
      variant: 'primary',
      size: 'md',
   },
});
