import { Link } from "@radix-ui/themes";

const Intro = () => {
  return (
    <section id="intro" className="bg-neutral-light-gray">
      <div className="lg:flex lg:items-center max-w-6xl mx-auto">
        <div className="hero-img lg:flex-[3] lg:order-2">
        </div>
        <div className="text-center lg:text-start px-6 mt-6 lg:mt-0 lg:flex-[2] lg:order-1">
          <h1 className="text-[2.5rem] leading-[1.15] lg:text-[3.25rem] font-light text-primary-dark-blue">Next generation digital banking</h1>
          <p className="text-neutral-gray-blue text-sm lg:text-base mt-6 leading-relaxed">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Link href="#" className="cta-btn inline-block mt-8">Request Invite</Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
