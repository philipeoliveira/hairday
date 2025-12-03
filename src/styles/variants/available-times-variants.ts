import { cva } from 'class-variance-authority';

export const availableTimesVariants = cva(
   'w-fit py-2 px-5 rounded-lg border border-gray-500 bg-gray-600 hover:bg-gray-500 text-gray-200 transition-colors',
   {
      variants: {
         isDisabled: {
            true: 'bg-transparent pointer-events-none border-gray-600 hover:bg-transparent text-gray-500',
            false: 'cursor-pointer',
         },
         isSelected: {
            true: 'border-yellow pointer-events-none text-yellow',
            false: '',
         },
      },
      defaultVariants: {
         isDisabled: false,
         isSelected: false,
      },
   }
);
