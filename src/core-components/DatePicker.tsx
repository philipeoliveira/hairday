import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import dayjs from '@/lib/dayjs';
import 'dayjs/locale/pt-br';
import { ptBR } from 'date-fns/locale';
import CalendarBlank from '../assets/icons/calendarBlank.svg?react';
import ChevronDown from '../assets/icons/CaretDown.svg?react';
import { Icon } from '@/components/Icon';

interface DatePickerProps {
   value: string;
   onChange: (value: string) => void;
   className?: string;
}

dayjs.locale('pt-br');

export default function DatePicker({ value, onChange, className }: DatePickerProps) {
   const [open, setOpen] = useState(false);

   // “zerar” a data atual para meia-noite
   const today = new Date();
   today.setHours(0, 0, 0, 0);

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <div
            data-state={open ? 'open' : 'closed'}
            className={cn(
               'flex items-center gap-2 border text-gray-200 border-gray-500 focus-within:border-yellow-dark data-[state=open]:border-yellow-dark bg-transparent h-12 px-3 rounded-xl transition-colors',
               className
            )}
         >
            <Icon svg={CalendarBlank} className='fill-yellow' />
            <PopoverTrigger asChild>
               <div className='flex items-center gap-2 cursor-pointer flex-1'>
                  <IMaskInput
                     mask='00/00/0000'
                     placeholder='dd/mm/aaaa'
                     value={value}
                     onAccept={(val) => onChange(val)}
                     className='bg-transparent outline-none w-full text-left placeholder:text-gray-200'
                  />
               </div>
            </PopoverTrigger>

            <PopoverTrigger asChild>
               <button className='cursor-pointer ml-2'>
                  <Icon svg={ChevronDown} size='sm' className='fill-gray-200' />
               </button>
            </PopoverTrigger>
         </div>

         <PopoverContent
            className='p-0 mt-2 rounded-xl text-gray-100 border border-gray-500 bg-gray-600'
            align='end'
         >
            <Calendar
               mode='single'
               locale={ptBR}
               disabled={(date) => date < today} // Desabilita datas anteriores ao dia atual
               selected={value ? dayjs(value, 'DD/MM/YYYY').toDate() : undefined}
               onSelect={(date) => {
                  if (date) {
                     onChange(dayjs(date).format('DD/MM/YYYY'));
                     setOpen(false);
                  }
               }}
               className='w-full'
            />
         </PopoverContent>
      </Popover>
   );
}
