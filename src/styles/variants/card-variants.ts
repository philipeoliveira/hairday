import { cva } from 'class-variance-authority';

export const cardVariants = cva('border rounded-lg border-gray-600', {
   variants: {
      size: {
         none: '',
         md: 'px-5 py-3',
      },
   },
   defaultVariants: {
      size: 'none',
   },
});
