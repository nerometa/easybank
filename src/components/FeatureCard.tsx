interface FeatureCardProps {
  iconSrc: string
  title: string
  description: string
}

const FeatureCard = ({ iconSrc, title, description }: FeatureCardProps) => {
  return (
    <div className="space-y-6 text-center flex flex-col justify-center items-center">
      <img src={iconSrc} alt={title} />
      <h3 className="text-xl font-light">{title}</h3>
      <p className="text-neutral-gray-blue leading-relaxed text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard
