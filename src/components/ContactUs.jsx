
const ContactUs = () => {
  return (
    <article className="relative pt-6 md:pt-8 w-fit h-fit">
      <button className="absolute font-poppins z-20 font-medium text-[#F2F2F2] bg-[#2D9CDB] rounded-xl w-[71px] h-[39px] leading-[21px] right-1 top-[53%] md:w-[94px] md:h-[49px] md:text-[18px] md:leading-[27px] md:top-[68px] md:left-[529px]">
        Join
      </button>
      <p className={`pb-4 font-poppins font-medium text-[#828282] text-left text-[10px] leading-[15px] tracking-normal h-[21px] w-[232px] ml-[40px] md:text-[14px] md:leading-[21px] md:max-w-[172px] md:pb-8 md:h-[21px] md:ml-[277px]`}>
        Want us to contact you?
      </p>
      <input type="text" className="rounded-xl placeholder:text-[14px] placeholder:font-medium placeholder:font-poppins bg-[#F2F2F2] h-[47px] w-[291px] ml-[40px] md:ml-[277px] md:w-[350px] md:h-[57px] md:ring-1 md:ring-[#F2F2F2] md:placeholder:text-[18px] md:" placeholder="Email" />
    </article>
  )
}

export default ContactUs