"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Title } from "../ui/Title";
import { buttons, peopleInfo } from "@/app/utils/const";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const SomethingAwesome = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="text-center px-4 flex flex-col gap-16 lg:p-20 bg-project-purple py-12">
      <div className="text-white lg:flex gap-60 items-center">
        <Title
          subtitle="Join other Sun harvesters"
          subtitleColor="yellow"
          title="Make something awesome"
          description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        />
        <Button color="yellow" />
      </div>
      <div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {peopleInfo.map(({ id, text, img, name, category }) => (
              <div key={id} className="embla__slide">
                <div className="bg-white flex flex-col gap-8 p-8 rounded-lg">
                  <p>{text}</p>
                  <div className="flex gap-2">
                    <Image src={img} alt={name} width={48} height={48} />
                    <div className="flex flex-col items-start">
                      <p>{name}</p>
                      <p className="text-project-light-gray">{category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 items-center lg:justify-start justify-center mt-4">
          {buttons.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={id === 1 ? scrollPrev : scrollNext}
              className="rounded-full border border-solid border-project-yellow"
            >
              <Image src={icon} alt={label} width={24} height={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
