import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hey! I am <span className="text-primary">Rifky Niyas</span>,
          </h1>
          <p class="max-w-2xl mb-6 font-light text-white-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I create products to empower your digital experience
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary"
          >
            Support My work
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <Image
            src={"/images/hero-section-img.png"}
            alt="Image of Rifky Niyas"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
