"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex items-center">
      <div class="grid flex-none max-w-screen-xl px-4 py-8 mx-auto gap-12 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 order-2">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hey! I am <span className="text-primary">Rifky Niyas</span>,
          </h1>
          <p class="max-w-2xl mb-6 font-light text-white-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I create products to empower your digital experience
          </p>
          <a
            href="https://www.buymeacoffee.com/rifkyniyas"
            target="_blank"
            class="inline-flex items-center justify-center gap-x-2 px-5 py-3 mr-6 text-base font-medium text-center 
            text-white rounded-lg bg-primary hover:bg-opacity-75"
          >
            <Icon icon="cib:buy-me-a-coffee" />
            <span>Support My work</span>
          </a>
          <a
            href="mailto:rifkyniyas@gmail.com"
            class="inline-flex items-center justify-center gap-x-2 px-5 py-3 mr-3 text-base font-medium text-center 
            text-white rounded-lg border border-white hover:border-transparent hover:bg-white hover:text-primary"
          >
            <Icon icon="mingcute:code-line" />
            <span>Work With Me</span>
          </a>
        </div>
        <div class="lg:mt-0 lg:col-span-5 flex justify-center relative order-1">
          <Image
            src={"/images/hero-section-img.png"}
            alt="Image of Rifky Niyas"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
