import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
   variants: {
      variant: {
         'body-title-lg': 'text-2xl leading-8 font-bold',
         'body-title-md': 'text-base leading-6 font-bold',
         'body-title-sm': 'text-sm leading-5 font-bold',
         'body-text-md': 'text-base leading-6 font-normal',
         'body-text-sm': 'text-sm leading-5 font-normal',
         'body-button-sm': 'text-sm leading-5 font-bold uppercase text-gray-900',
      },
   },
   defaultVariants: {
      variant: 'body-text-md',
   },
});
