import Image from "next/image";

const Steps = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <p className="text-center text-2xl font-bold tracking-widest text-yellow-900 md:text-4xl">
        How It Works
      </p>
      <div className="flex  mx-auto justify-center items-center">
        <div>
          <div className="flex mt-2">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px opacity-0 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  1
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                  <Image
                    src="/img/hero_section2.png"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
                {/* className="text-deep-blue-accent-400 h-12 w-12 sm:h-16 sm:w-16" */}
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Choose Your Favorite Cake
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  2
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                  <Image src="/img/del.png" alt="logo" width={80} height={80} />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Fast Delivery
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  3
                </div>
              </div>
              <div className="h-full w-px bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                  <Image
                    src="/img/payment.png"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Easy Payment Method
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 flex flex-col items-center">
              <div className="h-10 w-px bg-gray-300 sm:h-full" />
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium">
                  4
                </div>
              </div>
              <div className="h-full w-px opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
              <div className="sm:mr-5">
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 sm:h-24 sm:w-24">
                  <Image
                    src="/img/enjoy2.png"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Enjoy Your Meal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/img/hero_section4.png"
            alt="hero_section"
            width={600}
            height={600}
            className="ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
