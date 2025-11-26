import { cva } from 'class-variance-authority';

export const IconVariants = cva('', {
   variants: {
      size: {
         md: 'size-5',
      },
   },
   defaultVariants: {
      size: 'md',
   },
});
