import person1 from '../images/person1.png';
import person2 from '../images/person2.png';
import person3 from '../images/person3.png';

const Team = () => {
  return (
    <section className='mt-36 md:container md:grid md:grid-cols-2 md:items-center'>
      <article>
        <p className='mt-10 h-[27px] w-[280px] ml-4 font-poppins text-[18px] leading-[27px] tracing-normal text-left text-[#EB5757] md:ml-[49px]'>
        Meet the team
        </p>
        <p className="font-poppins font-medium tracking-normal ml-4 text-left h-[162px] w-[280px] md:ml-[49px] leading-[54px] text-[36px]">
          We are chilled and a laidback team
        </p>
        <p className='h-[48px] w-[273px] ml-4 font-poppins text-[16px] leading-[24px] tracing-normal text-left text-[#333333] md:ml-[49px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </article>
      {/* Images Section */}
      <article className='grid grid-cols-2 items-center px-2 gap-3 md:justify-end'>
        <div>
          <img src={person3} alt="" className='h-[178px] w-[178px] rounded-3xl md:ml-auto md:h-[320px] md:w-[320px]' />
        </div>
        <div>
          <img src={person1} alt="" className='h-[144px] w-[144px] rounded-3xl mb-1 md:h-[260px] md:w-[260px]' />
          <img src={person2} alt="" className='h-[167px] w-[162px] rounded-3xl md:h-[300px] md:w-[291px]' />
        </div>
      </article>
    </section>
  )
}

export default Team