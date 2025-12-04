import { Text } from '../components/Text';
import { useAppointment } from '../hooks/useAppointment';

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
      <div className='flex justify-between gap-2'>
         <div className='flex gap-5'>
            <Text variant='body-title-md' className='text-gray-300'>
               {time}
            </Text>
            <Text variant='body-text-md' className='text-gray-300'>
               {client}
            </Text>
         </div>
         <div>
            <Text variant='body-text-sm' className='text-gray-300'>
               <a href={id} onClick={() => handleDelete(id)}>
                  deletar
               </a>
            </Text>
         </div>
      </div>
   );
}
