import person4 from '../images/person4.png';

const Testimony = () => {
  return (
    <section className='px-2 mt-32 md:container'>
      <p className='h-[180px] w-[351px] font-poppins text-[24px] font-normal leading-[36px] tracing-normal text-left md:h-[162px] md:w-[937px] md:text-[36px] md:leading-[54px] md:px-0 md:ml-[49px]'>
        “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
      </p>
      <article className='mt-[45px] flex items-center'>
        <img src={person4} alt="" className='h-[82px] w-[82px] rounded-xl md:ml-[49px]' />
        <div className='pl-3'>
          <p className='h-[36px] w-[140px] font-medium tracking-normal leading-9 font-poppins text-[24px]'>
            Carlos Tran
          </p>
          <p className='h-[27px] w-[191px] font-medium tracking-normal leading-7 font-poppins text-[18px] text-[#828282]'>
            The Decorate Gatsby
          </p>
        </div>
      </article>
    </section>
  )
}

export default Testimony