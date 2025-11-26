import CloudSun from './assets/icons/cloudSun.svg?react';
import { Text } from './components/Text';
import { Icon } from './components/Icon';
import { Button } from './components/Button';

function App() {
   return (
      <>
         <Text as='h1' variant='body-title-lg' className='text-gray-100'>
            Agende um atendimento
         </Text>

         <Icon svg={CloudSun} className='fill-yellow' />

         <Button>Agendar</Button>
      </>
   );
}

export default App;
