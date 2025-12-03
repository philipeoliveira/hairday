import { Button } from '../components/Button';
import { InputText } from '../components/InputText';
import { Text } from '../components/Text';
import { AvailableTimes } from './AvailableTimes';
import UserSquare from '../assets/icons/userSquare.svg?react';
import { useState } from 'react';

const times = {
   morning: ['09:00', '10:00', '11:00', '12:00'],
   afternoon: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
   night: ['19:00', '20:00', '21:00'],
} as const;

export function Sidebar() {
   const [time, setTime] = useState('');
   const [client, setClient] = useState('');

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const id = crypto.randomUUID();

      console.log(id, time, client);
   }

   return (
      <aside className='p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6'>
         <div className='space-y-1 w-full'>
            <Text as='h1' variant='body-title-lg' className='text-gray-100'>
               Agende um atendimento
            </Text>
            <Text variant='body-text-sm' className='text-gray-300'>
               Selecione data, horário e informe o nome do cliente para criar o
               agendamento
            </Text>
            <form className='space-y-8' onSubmit={handleSubmit}>
               <div className='flex flex-col gap-2'>
                  <Text variant='body-title-md' className='text-gray-200'>
                     Horários
                  </Text>
                  <div className='flex flex-col gap-2'>
                     <Text variant='body-text-md' className='text-gray-200'>
                        Manhã
                     </Text>
                     <div className='flex flex-wrap items-center gap-2'>
                        {times.morning.map((timeMorning) => (
                           <AvailableTimes
                              key={timeMorning}
                              name='time'
                              value={timeMorning}
                              onChange={(e) => setTime(e.target.value)}
                              isSelected={time === timeMorning}
                           >
                              {timeMorning}
                           </AvailableTimes>
                        ))}
                     </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                     <Text variant='body-text-md' className='text-gray-200'>
                        Tarde
                     </Text>
                     <div className='flex flex-wrap items-center gap-2'>
                        {times.afternoon.map((timeAfternoon) => (
                           <AvailableTimes
                              key={timeAfternoon}
                              name='time'
                              value={timeAfternoon}
                              onChange={(e) => setTime(e.target.value)}
                              isSelected={time === timeAfternoon}
                           >
                              {timeAfternoon}
                           </AvailableTimes>
                        ))}
                     </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                     <Text variant='body-text-md' className='text-gray-200'>
                        Noite
                     </Text>
                     <div className='flex flex-wrap items-center gap-2'>
                        {times.night.map((timeNight) => (
                           <AvailableTimes
                              key={timeNight}
                              name='time'
                              value={timeNight}
                              isSelected={time === timeNight}
                              onChange={(e) => setTime(e.target.value)}
                           >
                              {timeNight}
                           </AvailableTimes>
                        ))}
                     </div>
                  </div>
               </div>
               <label className='flex flex-col gap-2 w-full'>
                  <Text variant='body-title-md' className='text-gray-200'>
                     Cliente
                  </Text>
                  <InputText
                     name='client'
                     onChange={(e) => setClient(e.target.value)}
                     icon={UserSquare}
                     placeholder='Helena Souza'
                  />
               </label>
               <Button type='submit'>Agendar</Button>
            </form>
         </div>
      </aside>
   );
}
