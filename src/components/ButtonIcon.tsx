import { Icon } from './Icon';
import {
   buttonIconVariants,
   buttonIconIconVariants,
} from '../styles/variants/button-icon-variants';

interface ButtonIconProps extends React.ComponentProps<'button'> {
   icon: React.ComponentProps<typeof Icon>['svg'];
   className?: string;
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
   return (
      <button {...props} className={buttonIconVariants()}>
         <Icon svg={icon} className={buttonIconIconVariants({ className })} />
      </button>
   );
}
