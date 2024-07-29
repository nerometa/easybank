import { Link } from "@radix-ui/themes";

const Intro = () => {
  return (
    <section id="intro">
      <div className="bg-[url('@/assets/images/bg-intro-mobile.svg')] lg:bg-[url('@/assets/images/bg-intro-desktop.svg')] bg-no-repeat relative bg-center bg-cover min-h-[18.5rem] before:bg-[url('@/assets/images/image-mockups.png')] before:size-full before:absolute before:bg-[center_bottom] before:bg-no-repeat before:bg-[length:90%]">
      </div>
      <div className="text-center px-6 mt-6">
        <h1 className="text-[2.5rem] leading-[1.15] text-primary-dark-blue">Next generation digital banking</h1>
        <p className="text-neutral-gray-blue text-sm mt-6 leading-relaxed">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Link className="cta-btn inline-block mt-8">Request Invite</Link>
      </div>
    </section>
  );
};

export default Intro;
