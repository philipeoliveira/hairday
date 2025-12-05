import { type VariantProps } from 'class-variance-authority';
import { cardVariants } from '../styles/variants/card-variants';
import SunHorizon from '../assets/icons/sunHorizon.svg?react';
import CloudSun from '../assets/icons/cloudSun.svg?react';
import MoonStars from '../assets/icons/moonStars.svg?react';
import { Text } from '../components/Text';
import { Icon } from '../components/Icon';

const periods = {
   morning: {
      title: 'Manhã',
      icon: SunHorizon,
      times: '9h-12h',
   },
   afternoon: {
      title: 'Tarde',
      icon: CloudSun,
      times: '13h-18h',
   },
   night: {
      title: 'Noite',
      icon: MoonStars,
      times: '19h-21h',
   },
} as const;

interface CardProps extends VariantProps<typeof cardVariants> {
   className?: string;
   period: keyof typeof periods;
   children: React.ReactNode;
}

export function AppointmentCard({
   size,
   className,
   period,
   children,
   ...props
}: CardProps) {
   const { icon, title, times } = periods[period];

   return (
      <section className={cardVariants({ size, className })} {...props}>
         <div className='px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600'>
            <div className='flex items-center gap-2'>
               <Icon svg={icon} />
               <Text as='h3' variant='body-text-sm' className='text-gray-300'>
                  {title}
               </Text>
            </div>
            <Text variant='body-text-sm' className='text-gray-300'>
               {times}
            </Text>
         </div>
         <ul className='flex flex-col p-5 gap-0.5'>{children}</ul>
      </section>
   );
}
