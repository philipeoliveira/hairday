import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
   'flex items-center justify-center gap-2 w-full cursor-pointer select-none transition py-4.5 px-6 border-2 border-transparent rounded-lg',
   {
      variants: {
         variant: {
            primary: 'bg-yellow hover:border-yellow-light',
         },
         size: {
            md: 'py-4.5 px-6',
         },
         disabled: {
            true: 'opacity-50 pointer-events-none',
         },
      },
      defaultVariants: {
         variant: 'primary',
         size: 'md',
         disabled: false,
      },
   }
);
