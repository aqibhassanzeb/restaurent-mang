import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-primary sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <div className="flex flex-col">
            <span className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
              Your favorite
            </span>
            <span className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
              Cake, right at
            </span>
            <span className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
              your door
            </span>
          </div>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="#"
              className="inline-block rounded bg-btn_clr hover:bg-orange-400 px-12 py-3 text-sm font-medium text-black transition  focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Order Now!
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/img/hero-section2.png"
        alt="hero_section"
        width={500}
        height={500}
        className="  object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px]
      md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
};

export default Hero;
