import React from 'react';
import { availableTimesVariants } from '../styles/variants/available-times-variants';
import type { VariantProps } from 'class-variance-authority';

interface AvailableTimesProps
   extends React.ComponentProps<'input'>,
      Omit<VariantProps<typeof availableTimesVariants>, 'isSelected'> {
   children: React.ReactNode;
   isSelected?: boolean;
}

export function AvailableTimes({
   isDisabled,
   isSelected,
   className,
   children,
   ...props
}: AvailableTimesProps) {
   return (
      <label className={availableTimesVariants({ isDisabled, isSelected, className })}>
         {children}
         <input type='radio' className='hidden' disabled={!!isDisabled} {...props} />
      </label>
   );
}
