import Input from '../reusables/Input';
import {FaSearch} from 'react-icons/fa'

const NavInput = () => {
  const inputProperties = {
    className: "w-full bg-transparent   outline-none",
    type: "text",
    name: "inputSearch",
    placeholder: "search",
  };

  return (
    <>
     

      <div className='w-full'>
        <FaSearch className="text-gray-500 text-[1.5rem] sm:hidden" />
       
       <div className="hidden  sm:flex flex-2 w-[65%]  items-center  bg-[#e1e1e1] px-4 space-x-2 rounded-full	h-[3rem] ">
         <FaSearch className="text-gray-500" />
         <Input {...inputProperties} />
       </div>
       
      </div>
    </>
  );
};

export default NavInput