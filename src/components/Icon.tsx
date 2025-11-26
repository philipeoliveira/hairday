import { type VariantProps } from 'class-variance-authority';
import { IconVariants } from '../styles/variants/icon-variants';

interface IconProps
   extends React.ComponentProps<'svg'>,
      VariantProps<typeof IconVariants> {
   svg: React.FC<React.ComponentProps<'svg'>>;
}

export function Icon({ svg: SvgComponent, size, className, ...props }: IconProps) {
   return <SvgComponent className={IconVariants({ size, className })} {...props} />;
}
