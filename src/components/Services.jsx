import ServiceCards from "./ServiceCards"

const Services = () => {
  return (
    <section className="container pt-14 md:pt-32">
      <p className="font-poppins font-medium tracking-normal text-left leading-[36px] text-[24px] h-[72px] w-[259px] ml-[49px] md:leading-[54px] md:text-[36px] md:h-[108px] md:w-[346px]">
        We offer high demand services
      </p>
      <div className="md:grid md:grid-cols-3 md:pt-32">
        <ServiceCards />
      </div>
    </section>
  )
}

export default Services