import mockupSrc from '@/assets/images/image-mockups.png'
import { Button } from '@radix-ui/themes'

const Intro = () => {
  return (
    <section id="intro">
      <div className={`bg-[url('@/assets/images/bg-intro-mobile.svg')] lg:bg-[url('@/assets/images/bg-intro-desktop.svg')] bg-no-repeat relative -mb-[70px] -top-[70px] lg:top-0 lg:mb-0`}>
        <div className="-translate-y-14 lg:translate-y-0 px-4 lg:flex lg:flex-row-reverse">
          <img alt="Easybank app mockups" src={mockupSrc} />
          <div className="text-center mt-4 px-2 flex-1">
            <h1 className="text-[40px] leading-tight font-light">Next generation digital banking</h1>
            <p className="text-neutral-gray-blue text-sm mt-6">Take your financial life online. Your Easybank account will be a one-stop shop for spending, saving, budgeting, investing, and much more.</p>
            <Button radius="full" className="mt-12 cta-btn">Request Invite</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
