import useLocalStorage from 'use-local-storage';
import { type AppointmentProps } from '../types/appointment';
import { times } from '../constants/times';
import dayjs from '@/lib/dayjs';

export function useAppointment(selectedDate?: string) {
   const [appointments, setAppointments] = useLocalStorage<AppointmentProps[]>(
      'appointments',
      []
   );

   // Filtra os agendamentos pela data escolhida
   const filteredByDate = appointments.filter((appointment) =>
      dayjs(appointment.date, 'DD/MM/YYYY').isSame(
         dayjs(selectedDate, 'DD/MM/YYYY'),
         'day'
      )
   );

   // Filtra os agendamentos por período
   const morningAppointments = filteredByDate.filter((appointment) =>
      (times.morning as readonly string[]).includes(appointment.time)
   );
   const afternoonAppointments = filteredByDate.filter((appointment) =>
      (times.afternoon as readonly string[]).includes(appointment.time)
   );
   const nightAppointments = filteredByDate.filter((appointment) =>
      (times.night as readonly string[]).includes(appointment.time)
   );

   function createAppointment({ client, date, time }: Omit<AppointmentProps, 'id'>) {
      setAppointments([...appointments, { id: crypto.randomUUID(), client, date, time }]);
   }

   function deleteAppointment(id: string) {
      setAppointments(appointments.filter((appointment) => id !== appointment.id));
   }

   return {
      appointments,
      morningAppointments,
      afternoonAppointments,
      nightAppointments,
      createAppointment,
      deleteAppointment,
   };
}
