import Image from 'next/image'
import {FiShare} from 'react-icons/fi'
import {FiMoreHorizontal} from 'react-icons/fi'
import {FiArrowUpRight} from 'react-icons/fi'

const Card = ({ ...data }) => {
  const { title, username, picPost } = { ...data };

  return (
    <>
      {/* image card base */}
      <div className="py-4 overflow-hidden   ">
        <div className="relative mb-4  ">
          <img src={`/${picPost}`} alt="" className="w-full  rounded-2xl " />

          {/* card hover */}

          <div className=" opacity-0 hover:opacity-100 bg-[#00000060] rounded-2xl  absolute top-0 z-10   w-full h-full ">
            <div className="pb-2 top-0   relative  h-full ">
              <div className="flex justify-around items-center w-full absolute  space-x-2 bottom-2 ">
                <div className="flex space-x-2 items-center bg-slate-100  md:px-2 sm:px-3 py-2 rounded-full">
                  <FiArrowUpRight />
                  <span>enlace.com</span>
                </div>

                 <span className='text-[1.3rem] bg-slate-100 px-3 py-3 rounded-full'><FiShare/></span>
                 <span  className='text-[1.5rem] bg-slate-100 px-3 py-3 rounded-full'><FiMoreHorizontal/></span>
              </div>
              <button className="relative top-3 left-4 text-white bg-[#e60023] hover:bg-red-700 p-3 rounded-full">
                Guardar
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col gap-2 justify-center   space-x-2">
          <p className="ml-3 font-medium">{title}</p>
          <div className="flex space-x-2">
            <img
              src={`/${picPost}`}
              alt=""
              className="w-[30px] h-[30px] rounded-2xl"
            />
            <span>{username}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;