import { IoMdCreate } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgArrowsH } from 'react-icons/cg';

const ServiceCards = () => {
  return (
    <>
      <article className="space-y-8 pt-10 pb-11 md:w-[341px] md:h-[422px]">
        <IoMdCreate className='bg-[#2D9CDB] text-white text-[27px] w-[67px] h-[67px] rounded-2xl ml-[50px] p-2' />
        <h2 className='text-[#333333] font-poppins font-bold text-[24px] ml-[50px] h-[36px] w-[160px]'>UI/UX Design</h2>
        <p className='font-poppins text-left h-[96px] w-[273px] text-[16px] leading-[24px] ml-[50px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
        </p>
        <button className="font-poppins font-medium text-left text-[#828282] pl-3 bg-[#E0E0E0] h-[42px] w-[116px] text-[16px] leading-[24px] ml-[48px] rounded-[12px]">
          Get started
        </button>
      </article>
      <article className="space-y-8 pt-10 pb-11 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:w-[341px] md:h-[422px] rounded-3xl w- md:cursor-pointer">
        <CgArrowsH className='bg-[#27AE60] text-white text-[27px] w-[67px] h-[67px] rounded-2xl ml-[50px] p-2' />
        <h2 className='text-[#333333] font-poppins font-bold text-[24px] ml-[50px] h-[36px] w-[160px]'>Front End</h2>
        <p className='font-poppins text-left h-[96px] w-[273px] text-[16px] leading-[24px] ml-[50px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
        </p>
        <button className="font-poppins font-medium text-left text-[#828282] pl-3 bg-[#E0E0E0] h-[42px] w-[116px] text-[16px] leading-[24px] ml-[48px] rounded-[12px]">
          Get started
        </button>
      </article>
      <article className="space-y-8 pt-10 pb-11 md:w-[341px] md:h-[422px]">
        <GiHamburgerMenu className='bg-[#EB5757] text-white text-[27px] w-[67px] h-[67px] rounded-2xl ml-[50px] p-2' />
        <h2 className='text-[#333333] font-poppins font-bold text-[24px] ml-[50px] h-[36px] w-[160px]'>Back End</h2>
        <p className='font-poppins text-left h-[96px] w-[273px] text-[16px] leading-[24px] ml-[50px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
        </p>
        <button className="font-poppins font-medium text-left text-[#828282] pl-3 bg-[#E0E0E0] h-[42px] w-[116px] text-[16px] leading-[24px] ml-[48px] rounded-[12px]">
          Get started
        </button>
      </article>
    </>
  )
}

export default ServiceCards