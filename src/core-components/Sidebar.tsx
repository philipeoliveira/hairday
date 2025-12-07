import { Button } from '../components/Button';
import { InputText } from '../components/InputText';
import { Text } from '../components/Text';
import { AvailableTimes } from './AvailableTimes';
import UserSquare from '../assets/icons/userSquare.svg?react';
import { useState } from 'react';
import { useAppointment } from '../hooks/useAppointment';
import { times } from '../constants/times';
import DatePicker from './DatePicker';
import dayjs from '@/lib/dayjs';

export function Sidebar() {
   const [client, setClient] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const { appointments, createAppointment } = useAppointment();

   const bookedTimes = appointments
      .filter((a) => dayjs(a.date, 'DD/MM/YYYY').isSame(dayjs(date, 'DD/MM/YYYY'), 'day'))
      .map((a) => a.time);

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      createAppointment({ client, date, time });

      setClient('');
      setDate('');
      setTime('');
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
         </div>
         <form className='space-y-8' onSubmit={handleSubmit}>
            <label className='flex flex-col gap-2'>
               <Text variant='body-title-md' className='text-gray-200'>
                  Data
               </Text>
               <DatePicker value={date} onChange={setDate} className='w-full' />
            </label>
            <div className='flex flex-col gap-2'>
               <Text variant='body-title-md' className='text-gray-200'>
                  Horários
               </Text>
               <div className='flex flex-col gap-2'>
                  <Text variant='body-text-md' className='text-gray-300'>
                     Manhã
                  </Text>
                  <div className='flex flex-wrap items-center gap-2'>
                     {times.morning.map((timeMorning) => (
                        <AvailableTimes
                           key={timeMorning}
                           name='time'
                           value={timeMorning}
                           isSelected={time === timeMorning}
                           isDisabled={bookedTimes.includes(timeMorning) || !date}
                           onChange={(e) => setTime(e.target.value)}
                        >
                           {timeMorning}
                        </AvailableTimes>
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <Text variant='body-text-md' className='text-gray-300'>
                     Tarde
                  </Text>
                  <div className='flex flex-wrap items-center gap-2'>
                     {times.afternoon.map((timeAfternoon) => (
                        <AvailableTimes
                           key={timeAfternoon}
                           name='time'
                           value={timeAfternoon}
                           isSelected={time === timeAfternoon}
                           isDisabled={bookedTimes.includes(timeAfternoon) || !date}
                           onChange={(e) => setTime(e.target.value)}
                        >
                           {timeAfternoon}
                        </AvailableTimes>
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <Text variant='body-text-md' className='text-gray-300'>
                     Noite
                  </Text>
                  <div className='flex flex-wrap items-center gap-2'>
                     {times.night.map((timeNight) => (
                        <AvailableTimes
                           key={timeNight}
                           name='time'
                           value={timeNight}
                           isSelected={time === timeNight}
                           isDisabled={bookedTimes.includes(timeNight) || !date}
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
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  icon={UserSquare}
                  placeholder='Helena Souza'
               />
            </label>
            <Button type='submit' isDisabled={!client || !date || !time}>
               Agendar
            </Button>
         </form>
      </aside>
   );
}
