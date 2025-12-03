import { Text } from '../components/Text';
import { AppointmentCard } from '../core-components/AppointmentCard';

export function Schedule() {
   const morningAppointment = '09:00 Fulano Silva';
   const afternoonAppointment = '14:00 Beltrano';
   const nightAppointment = '';

   return (
      <div className='w-full py-20'>
         <div className='mx-auto flex flex-col gap-8 max-w-170.5'>
            <div className='flex justify-between gap-6'>
               <div className='flex flex-col gap-1'>
                  <Text as='h2' variant='body-title-lg' className='text-gray-100'>
                     Sua agenda
                  </Text>
                  <Text variant='body-text-sm' className='text-gray-300'>
                     Consulte os seus cortes de cabelo agendados por dia
                  </Text>
               </div>
            </div>
            <div className='space-y-3'>
               <AppointmentCard period='morning'>{morningAppointment}</AppointmentCard>
               <AppointmentCard period='afternoon'>
                  {afternoonAppointment}
               </AppointmentCard>
               <AppointmentCard period='night'>{nightAppointment}</AppointmentCard>
            </div>
         </div>
      </div>
   );
}
