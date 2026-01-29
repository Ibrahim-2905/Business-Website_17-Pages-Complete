import AnimatedButton from "../Button/Button";
import TitleDescription from "../TitleDescription/TitleDescription";
import { DynamicButton } from "../Button/DynamicButton";

export default function MirageHero() {
  return (
    <section className="relative bg-lightGray min-h-[110vh] mb-15 overflow-hidden">

      {/* Background image */}
      <img
        src="/logo/bgHero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content grid */}
      <div className="relative z-10 container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex justify-center flex-col max-w-xl">

          <TitleDescription
            title={
              <>
                <span className="text-white text-4xl ">Strategic Solutions</span>
                <span className="text-white text-4xl "> for</span>
                <span className="text-darkOrange text-4xl block">
                  Modern Business
                </span>
              </>
            }
          />

          <p className="text-gray-300 mb-8 text-lg">
            We provide comprehensive financial, ERP, and outsourcing services
            to help your organization thrive in a complex global market.
          </p>

          <div className="flex gap-4">
           
            <DynamicButton
              text="Get Started"
              bgColor="bg-darkOrange"
              hoverBgColor="bg-transparent"
              hoverTextColor="text-darkOrange"
              textColor="text-white"
              border="border-2 border-transparent hover:border-darkOrange"
              link="/contact"
              rounded="rounded-md"
              padding="px-4  md:px-10"
            />

            <DynamicButton
              text="Get Started"
              bgColor="bg-darkNavyBlue"
              textColor="text-white"
              padding="px-4 md:px-10"
              border="border-b-2 border-white"
              hoverBgColor="bg-white"
              hoverTextColor="text-darkNavyBlue"
              rounded="rounded-md"
            />
          </div>
        </div>

        {/* RIGHT IMAGE (BOTTOM ALIGNED) */}
        <div className="relative hidden md:block">
          <img
            src="/logo/laptop.png"
            alt="Dashboard Analytics"
            className="absolute bottom-0 right-0 w-[155%] max-w-[750px] drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}








