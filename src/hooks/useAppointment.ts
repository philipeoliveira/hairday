import useLocalStorage from 'use-local-storage';
import { type AppointmentProps } from '../types/appointment';
import { times } from '../constants/times';

export function useAppointment() {
   const [appointments, setAppointments] = useLocalStorage<AppointmentProps[]>(
      'appointments',
      []
   );

   const morningAppointments = appointments.filter((appointment) =>
      (times.morning as readonly string[]).includes(appointment.time)
   );
   const afternoonAppointments = appointments.filter((appointment) =>
      (times.afternoon as readonly string[]).includes(appointment.time)
   );
   const nightAppointments = appointments.filter((appointment) =>
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
