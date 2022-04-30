import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import ContactUs from './ContactUs';

const Footer = () => {
  return (
    <footer className='bg-[#100E1D] mt-[45px] md:mt-24'>
      <section className='md:container py-10 md:flex md:justify-between md:py-20'>
        <ul className='font-poppins px-10 font-medium text-[18px] leading-9 w-[92px] h-[180px] text-white'>
          <li>Home</li>
          <li>Services</li>
          <li>Our Works</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <div className='px-10'>
          <h2 className='font-heebo font-extrabold text-[#F2F2F2] text-[36px] leading-[52.88px] mt-14'>Edie</h2>
          <div className='flex gap-2 items-baseline'>
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <ContactUs />
      </section>
    </footer>
  )
}

export default Footer