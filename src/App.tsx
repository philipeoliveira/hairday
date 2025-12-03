import Logo from '../src/core-components/Logo';
import { Schedule } from './core-components/Schedule';
import { Sidebar } from './core-components/Sidebar';

function App() {
   return (
      <main className='relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto'>
         <Logo />
         <Sidebar />
         <Schedule />
      </main>
   );
}

export default App;
