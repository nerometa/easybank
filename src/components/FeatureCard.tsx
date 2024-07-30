interface FeatureCardProps {
  iconSrc: string
  title: string
  description: string
}

const FeatureCard = ({ iconSrc, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center flex flex-col justify-center items-center lg:items-start lg:text-start lg:p-4">
      <img src={iconSrc} alt={title} />
      <h3 className="text-[19px] lg:text-2xl text-primary-dark-blue font-light mt-5 lg:mt-10">{title}</h3>
      <p className="text-neutral-gray-blue leading-[1.75] text-sm lg:text-[16px] mt-5 lg:mt-6 lg:leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
