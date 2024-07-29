interface FeatureCardProps {
  iconSrc: string
  title: string
  description: string
}

const FeatureCard = ({ iconSrc, title, description }: FeatureCardProps) => {
  return (
    <div className="space-y-5 text-center flex flex-col justify-center items-center">
      <img src={iconSrc} alt={title} />
      <h3 className="text-[19px] text-primary-dark-blue font-light">{title}</h3>
      <p className="text-neutral-gray-blue leading-[1.75] text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard
