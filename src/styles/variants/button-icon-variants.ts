import { cva } from 'class-variance-authority';

export const buttonIconVariants = cva(
   'size-4 flex items-center justify-center cursor-pointer'
);

export const buttonIconIconVariants = cva(
   'fill-yellow hover:fill-yellow-dark transition-colors'
);
