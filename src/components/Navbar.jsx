import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <nav className={`flex items-center px-4 py-3 justify-between md:px-[100px] md:py-[42px] container`}>
      <div className="font-heebo cursor-pointer leading-[35.25px] text-[24px] md:leading-[52.88px] md:text-[36px] md:font-extrabold">Edie</div>
      <IoMenu className='md:hidden h-[18px] w-[18px]' onClick={handleMenuClick} />
      <ul className={`font-poppins fixed z-30 bg-[#FFFFFF] md:bg-white top-0 h-screen w-screen pt-20 ${showMenu ? "left-0" : "left-full"} transition-all duration-500 ease-in-out space-y-7 md:z-auto md:space-y-0 md:pt-0 md:h-auto md:w-auto md:static md:leading-[36px] md:text-[24px] md:flex md:justify-between md:items-center md:space-x-16 md:font-medium`}>
        <li className="cursor-pointer ml-8 md:ml-0">Home</li>
        <li className="cursor-pointer ml-8 md:ml-0">Services</li>
        <li className="cursor-pointer ml-8 md:ml-0">Our Works</li>
        <li className="cursor-pointer ml-8 md:ml-0">Clients</li>
        <li className="cursor-pointer ml-8 md:ml-0">Contact</li>
        <MdClose className={`fixed md:hidden top-0 ${showMenu ? "right-4" : "-right-20"} transition-all duration-500 ease-in-out`} size={25} onClick={handleMenuClick} />
      </ul>
    </nav>
  )
}

export default Navbar