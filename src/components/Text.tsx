import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { textVariants } from '../styles/variants/text-variants';

interface TextProps extends VariantProps<typeof textVariants> {
   as?: keyof React.JSX.IntrinsicElements;
   className?: string;
   children?: React.ReactNode;
}

export function Text({ as = 'span', className, variant, children, ...props }: TextProps) {
   return React.createElement(
      as,
      { className: textVariants({ className, variant }), ...props },
      children
   );
}
