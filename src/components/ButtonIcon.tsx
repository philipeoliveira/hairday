import { Icon } from './Icon';
import { buttonIconVariants } from '../styles/variants/button-icon-variants';

interface ButtonIconProps extends React.ComponentProps<'button'> {
   icon: React.ComponentProps<typeof Icon>['svg'];
   className?: string;
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
   return (
      <button {...props}>
         <Icon svg={icon} className={buttonIconVariants({ className })} />
      </button>
   );
}
