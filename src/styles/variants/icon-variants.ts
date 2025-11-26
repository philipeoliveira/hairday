import { cva } from 'class-variance-authority';

export const IconVariants = cva('', {
   variants: {
      size: {
         md: 'size-8',
      },
   },
   defaultVariants: {
      size: 'md',
   },
});
