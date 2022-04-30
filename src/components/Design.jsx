import { HiArrowNarrowRight } from 'react-icons/hi';
import smartHome from '../images/smarthome.jpg';
import onboard from '../images/onboard.png';
import booking from '../images/booking.png';
import juiceProduct from '../images/juice-product.png';

const Design = () => {
  return (
    <section className='mt-24 md:container'>
      <p className="font-poppins font-medium tracking-normal text-left leading-[36px] text-[24px] h-[72px] w-[267px] ml-[49px] md:leading-[54px] md:text-[36px] md:h-[108px] md:w-[448px]">
        Good design means good business
      </p>
      <div className=''>
        <div className='md:grid md:grid-cols-2'>
          <article className='mx-auto md:mx-0 p-4 md:pt-44'>
            <img src={smartHome} alt="Smart Home" className='h-[336px] w-[670px] rounded-xl mb-4 md:h-[545px] md:w-[543px]' />
            <p className='h-[26px] w-[183px] font-light text-[#828282] font-poppins text-[12px] leading-[18px] tracing-normal text-left md:h-[26px] md:w-[183px] md:leading-[21px] md:text-[14px]'>
              Full stack application
            </p>
            <p className='h-[30px] w-[341px] font-poppins text-[18px] font-normal leading-[27px] tracing-normal text-left md:h-[45px] md:w-[367px] md:leading-[36px] md:text-[24px]'>
              Smart home dashboard
            </p>
          </article>
          <article className='mx-auto md:mx-0 p-4'>
            <img src={onboard} alt="Onboard" className='h-[336px] w-[670px] rounded-xl mb-4 md:h-[545px] md:w-[543px]' />
            <p className='h-[26px] w-[183px] font-light text-[#828282] font-poppins text-[12px] leading-[18px] tracing-normal text-left md:h-[26px] md:w-[183px] md:leading-[21px] md:text-[14px]'>
              UX/UI design
            </p>
            <p className='h-[30px] w-[341px] font-poppins text-[18px] font-normal leading-[27px] tracing-normal text-left md:h-[45px] md:w-[367px] md:leading-[36px] md:text-[24px]'>
              Onboard application
            </p>
          </article>
        </div>
        <div className='md:grid md:grid-cols-2'>
          <article className='mx-auto md:mx-0 p-4 md:pt-44'>
            <img src={booking} alt="Booking" className='h-[336px] w-[670px] rounded-xl mb-4 md:h-[545px] md:w-[543px]' />
            <p className='h-[26px] w-[183px] font-light text-[#828282] font-poppins text-[12px] leading-[18px] tracing-normal text-left md:h-[26px] md:w-[183px] md:leading-[21px] md:text-[14px]'>
              Mobile application
            </p>
            <p className='h-[30px] w-[341px] font-poppins text-[18px] font-normal leading-[27px] tracing-normal text-left md:h-[45px] md:w-[367px] md:leading-[36px] md:text-[24px]'>
              Booking system
            </p>
          </article>
          <article className='mx-auto md:mx-0 p-4'>
            <img src={juiceProduct} alt="Juice" className='h-[336px] w-[670px] rounded-xl mb-4 md:h-[545px] md:w-[543px]' />
            <p className='h-[26px] w-[183px] font-light text-[#828282] font-poppins text-[12px] leading-[18px] tracing-normal text-left md:h-[26px] md:w-[183px] md:leading-[21px] md:text-[14px]'>
              Front End application
            </p>
            <p className='h-[30px] w-[341px] font-poppins text-[18px] font-normal leading-[27px] tracing-normal text-left md:h-[45px] md:w-[367px] md:leading-[36px] md:text-[24px]'>
              Juice product homepage
            </p>
            <div className='flex gap-2 items-center md:justify-end md:pt-28 md:pr-32 md:cursor-pointer'>
              <p className='w-[85px] font-poppins font-medium text-[18px] leading-[27px] tracing-normal text-left text-[#2D9CDB] md:w-[113px] md:leading-[21px] md:text-[24px] md:my-auto'>see more</p>
              <HiArrowNarrowRight className='text-[#2D9CDB] my-auto' />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Design