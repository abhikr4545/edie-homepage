import ContactUs from './ContactUs'
import heroImage from '../images/heroImage.jpg'

const Hero = () => {
  return (
    <section className="pt-[3rem]">
      <div className='container'>
        <p className={`font-poppins text-[#2D9CDB] text-[12px] pl-[40px] md:text-[18px] md:leading-[27px] md:font-medium md:pl-[277px]`}>
          Unhappy with your website?
        </p>
        <p className={`font-poppins text-[24px] leading-[36px] text-[#333333] font-medium ml-[40px] max-w-[272px] md:text-[48px] md:leading-[72px] md:max-w-[543px] md:max-h-[144px] md:ml-[277px]`}>
          We create beautiful and fast web services
        </p>
      </div>
      <div className='pt-5 md:pt-8'>
        <img className='w-[348px] mx-auto h-[145px] rounded-[18px] md:h-[354px] md:w-[1332px] ' src={heroImage} alt="office" />
      </div>
      <div className='container pt-5 md:pt-8'>
        <p className={`font-poppins text-[24px] leading-[36px] text-[#333333] font-medium ml-[40px] max-w-[227px] md:text-[48px] md:leading-[72px] md:max-w-[366px] md:max-h-[144px] md:ml-[277px]`}>
          Story, emotion and purpose
        </p>
        <p className={`font-poppins text-[12px] font-normal leading-[18px] tracking-normal text-left h-[74px] w-[275px] ml-10 md:text-[18px] md:w-[366px] md:leading-[27px] md:h-[137px] md:ml-[277px]`}>
          We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
        </p>
      </div>
      <div className='container pb-10'>
        <ContactUs />
      </div>
    </section>
  )
}

export default Hero