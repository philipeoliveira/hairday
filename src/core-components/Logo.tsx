import logo from '../assets/images/logo-hair-day.svg';

export default function Logo() {
   return (
      <div className='absolute top-0 left-0 py-3 px-5 bg-gray-600 rounded-br-xl'>
         <img src={logo} alt='logo' />
      </div>
   );
}
