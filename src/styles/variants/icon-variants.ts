import { cva } from 'class-variance-authority';

export const IconVariants = cva('', {
   variants: {
      size: {
         sm: 'size-4',
         md: 'size-5',
      },
   },
   defaultVariants: {
      size: 'md',
   },
});
