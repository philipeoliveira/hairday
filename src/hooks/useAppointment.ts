import useLocalStorage from 'use-local-storage';
import { type AppointmentProps } from '../types/appointment';

export function useAppointment() {
   const [appointments, setAppointments] = useLocalStorage<AppointmentProps[]>(
      'appointments',
      []
   );

   function createAppointment({ client, time }: Omit<AppointmentProps, 'id'>) {
      setAppointments([...appointments, { id: crypto.randomUUID(), client, time }]);
   }

   function deleteAppointment(id: string) {
      setAppointments(appointments.filter((appointment) => id !== appointment.id));
   }

   return {
      appointments,
      createAppointment,
      deleteAppointment,
   };
}
