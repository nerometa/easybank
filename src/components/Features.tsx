import iconOnline from '@/assets/images/icon-online.svg'
import iconBudgeting from '@/assets/images/icon-budgeting.svg'
import iconOnboarding from '@/assets/images/icon-onboarding.svg'
import iconApi from '@/assets/images/icon-api.svg'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section id="features" className="px-6 bg-neutral-light-gray-blue mt-24 py-14">
      <div className="text-center">
        <h2 className="text-[30.5px] text-primary-dark-blue leading-tight font-light">Why choose Easybank?</h2>
        <p className="text-neutral-gray-blue mt-4 text-sm leading-relaxed">We leveraged Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>

      <div id="features-list" className="space-y-8 mt-16">
        <FeatureCard iconSrc={iconOnline} title="Online Banking" description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." />
        <FeatureCard iconSrc={iconBudgeting} title="Simple Budgeting" description="See exactly where your money goes each month. Receive notifications when you're close to your hitting limits." />
        <FeatureCard iconSrc={iconOnboarding} title="Fast Onboarding" description="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
        <FeatureCard iconSrc={iconApi} title="Open API" description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." />
      </div>
    </section>
  )
}

export default Features
