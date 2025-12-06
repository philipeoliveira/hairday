import { ButtonIcon } from '../components/ButtonIcon';
import { Text } from '../components/Text';
import { useAppointment } from '../hooks/useAppointment';
import Trash from '../assets/icons/trash.svg?react';

interface AppointmentCardItemProps {
   id: string;
   client: string;
   time: string;
}

export function AppointmentCardItem({ id, client, time }: AppointmentCardItemProps) {
   const { deleteAppointment } = useAppointment();

   function handleDelete(id: string) {
      deleteAppointment(id);
   }

   return (
      <li className='flex justify-between gap-2 py-1'>
         <div className='flex gap-5'>
            <Text variant='body-title-md' className='text-gray-200'>
               {time}
            </Text>
            <Text variant='body-text-md' className='text-gray-200'>
               {client}
            </Text>
         </div>
         <ButtonIcon
            icon={Trash}
            onClick={() => handleDelete(id)}
            title={`Deletar horário ${time}`}
         />
      </li>
   );
}
