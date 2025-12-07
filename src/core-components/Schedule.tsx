import { Text } from '../components/Text';
import { AppointmentCard } from '../core-components/AppointmentCard';
import { AppointmentCardItem } from './AppointmentCardItem';
import { useAppointment } from '../hooks/useAppointment';
import { useState } from 'react';
import dayjs from '@/lib/dayjs';
import DatePicker from './DatePicker';

export function Schedule() {
   const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'));

   const { morningAppointments, afternoonAppointments, nightAppointments } =
      useAppointment(date);

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
               <DatePicker value={date} onChange={setDate} />
            </div>
            <div className='space-y-3'>
               <AppointmentCard period='morning'>
                  {morningAppointments.length > 0 ? (
                     [...morningAppointments] // Cria uma cópia do array para evitar mutação
                        .sort((a, b) =>
                           dayjs(a.time, 'HH:mm').diff(dayjs(b.time, 'HH:mm'))
                        )
                        .map((morningAppointment) => (
                           <AppointmentCardItem
                              key={morningAppointment.id}
                              id={morningAppointment.id}
                              client={morningAppointment.client}
                              time={morningAppointment.time}
                           />
                        ))
                  ) : (
                     <Text variant='body-text-md' className='text-gray-300 py-1'>
                        Nenhum agendamento para o período da manhã
                     </Text>
                  )}
               </AppointmentCard>

               <AppointmentCard period='afternoon'>
                  {afternoonAppointments.length > 0 ? (
                     [...afternoonAppointments] // Cria uma cópia do array para evitar mutação
                        .sort((a, b) =>
                           dayjs(a.time, 'HH:mm').diff(dayjs(b.time, 'HH:mm'))
                        )
                        .map((afternoonAppointment) => (
                           <AppointmentCardItem
                              key={afternoonAppointment.id}
                              id={afternoonAppointment.id}
                              client={afternoonAppointment.client}
                              time={afternoonAppointment.time}
                           />
                        ))
                  ) : (
                     <Text variant='body-text-md' className='text-gray-300 py-1'>
                        Nenhum agendamento para o período da tarde
                     </Text>
                  )}
               </AppointmentCard>

               <AppointmentCard period='night'>
                  {nightAppointments.length > 0 ? (
                     [...nightAppointments] // Cria uma cópia do array para evitar mutação
                        .sort((a, b) =>
                           dayjs(a.time, 'HH:mm').diff(dayjs(b.time, 'HH:mm'))
                        )
                        .map((nightAppointment) => (
                           <AppointmentCardItem
                              key={nightAppointment.id}
                              id={nightAppointment.id}
                              client={nightAppointment.client}
                              time={nightAppointment.time}
                           />
                        ))
                  ) : (
                     <Text variant='body-text-md' className='text-gray-300 py-1'>
                        Nenhum agendamento para o período da noite
                     </Text>
                  )}
               </AppointmentCard>
            </div>
         </div>
      </div>
   );
}
