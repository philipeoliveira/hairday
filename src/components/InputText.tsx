import { Icon } from './Icon';
import { inputWrapperVariants, inputVariants } from '../styles/variants/input-variants';

interface InputTextProps extends React.ComponentProps<'input'> {
   icon?: React.ComponentProps<typeof Icon>['svg'];
   className?: string;
}

export function InputText({ icon, className, ...props }: InputTextProps) {
   return (
      <div className={inputWrapperVariants({ className })}>
         {icon && <Icon svg={icon} />}
         <input
            type='text'
            className={inputVariants()}
            placeholder='Nome do cliente'
            {...props}
         />
      </div>
   );
}
