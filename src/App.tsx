import { Text } from './components/Text';
import { Button } from './components/Button';
import { AppointmentCard } from './core-components/AppointmentCard';
import { InputText } from './components/InputText';
import UserSquare from './assets/icons/userSquare.svg?react';

function App() {
   const morningAppointment = '09:00 Fulano Silva';
   const afternoonAppointment = '14:00 Beltrano';
   const nightAppointment = '';

   return (
      <div className='space-y-4'>
         <Text as='h1' variant='body-title-lg' className='text-gray-100'>
            Agende um atendimento
         </Text>
         <Text variant='body-text-sm' className='text-gray-300'>
            Selecione data, horário e informe o nome do cliente para criar o agendamento
         </Text>

         <Button>Agendar</Button>

         <Text as='h2' variant='body-title-lg' className='text-gray-100'>
            Sua agenda
         </Text>
         <Text variant='body-text-sm' className='text-gray-300'>
            Consulte os seus cortes de cabelo agendados por dia
         </Text>

         <InputText icon={UserSquare} />

         <div className='space-y-3'>
            <AppointmentCard period='morning'>{morningAppointment}</AppointmentCard>
            <AppointmentCard period='afternoon'>{afternoonAppointment}</AppointmentCard>
            <AppointmentCard period='night'>{nightAppointment}</AppointmentCard>
         </div>
      </div>
   );
}

export default App;
