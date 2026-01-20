import AnimatedButton from "../Button/Button";
import TitleDescription from "../TitleDescription/TitleDescription";

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
      <div className="relative z-10 container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex justify-center flex-col max-w-xl">

          <TitleDescription
            title={
              <>
                <span className="text-white text-4xl ">Strategic Solutions</span>
                <span className="text-white text-4xl ">for</span>
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
            <AnimatedButton
              text="Get Started"
              bgColor="bg-darkOrange"
              textColor="text-white"
              padding="px-7"
              border="border-none hover:border hover:border-darkOrange"
              rounded="rounded-md"
            />

            <AnimatedButton
              text="Get Started"
              bgColor="bg-darkNavyBlue"
              textColor="text-white"
              padding="px-10"
              border="border-b-2 border-white"
              rounded="rounded-md"
            />
          </div>
        </div>

        {/* RIGHT IMAGE (BOTTOM ALIGNED) */}
        <div className="relative">
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
