import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section id="features" className="bg-neutral-light-gray-blue">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:px-0">
        <div className="text-center lg:text-left lg:w-3/5 lg:p-4">
          <h2 className="text-[30.5px] lg:text-[2.5rem] lg:leading-[2.75rem] text-primary-dark-blue leading-tight font-light">Why choose Easybank?</h2>
          <p className="text-neutral-gray-blue mt-4 text-sm lg:text-base leading-relaxed">We leveraged Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>

        <div id="features-list" className="space-y-8 mt-16 lg:flex lg:space-y-0 lg:space-x-4 lg:mt-8">
          <FeatureCard iconSrc="/images/icon-online.svg" title="Online Banking" description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." />
          <FeatureCard iconSrc="/images/icon-budgeting.svg" title="Simple Budgeting" description="See exactly where your money goes each month. Receive notifications when you're close to your hitting limits." />
          <FeatureCard iconSrc="/images/icon-onboarding.svg" title="Fast Onboarding" description="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
          <FeatureCard iconSrc="/images/icon-api.svg" title="Open API" description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." />
        </div>
      </div>
    </section>
  )
}

export default Features
