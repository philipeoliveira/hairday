import {
   AlertDialog,
   AlertDialogTrigger,
   AlertDialogContent,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogCancel,
   AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { ButtonIcon } from '../components/ButtonIcon';
import Trash from '../assets/icons/trash.svg?react';

interface DeleteConfirmationButtonProps {
   id: string;
   time: string;
   client: string;
   onDelete: (id: string) => void;
}

export function DeleteConfirmationButton({
   id,
   time,
   client,
   onDelete,
}: DeleteConfirmationButtonProps) {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <ButtonIcon icon={Trash} title={`Deletar o horário ${time} de ${client}`} />
         </AlertDialogTrigger>

         {/* Modal de confirmação */}
         <AlertDialogContent className='rounded-xl text-gray-100 border border-gray-500 bg-gray-600'>
            <AlertDialogHeader>
               <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
               <AlertDialogDescription className='text-gray-300'>
                  Tem certeza que deseja excluir o horário <strong>{time}</strong> de{' '}
                  <strong>{client}</strong>?
               </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
               <AlertDialogCancel className='text-gray-100 bg-gray-500 border-none cursor-pointer'>
                  Cancelar
               </AlertDialogCancel>

               <AlertDialogAction
                  onClick={() => onDelete(id)}
                  className='cursor-pointer hover:bg-gray-100 hover:text-gray-500'
               >
                  Confirmar
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
