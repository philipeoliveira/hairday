import { Icon } from './Icon';
import { inputWrapperVariants, inputVariants } from '../styles/variants/input-variants';

interface InputText {
   icon?: React.ComponentProps<typeof Icon>['svg'];
   className?: string;
}

export function InputText({ icon, className }: InputText) {
   return (
      <div className={inputWrapperVariants({ className })}>
         {icon && <Icon svg={icon} />}
         <input type='text' className={inputVariants()} placeholder='Nome do cliente' />
      </div>
   );
}
