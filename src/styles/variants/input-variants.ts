import { cva } from 'class-variance-authority';

export const inputVariants = cva(
   'w-full outline-none text-gray-200 placeholder:text-gray-200'
);

export const inputWrapperVariants = cva(
   'has-focus:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2'
);
