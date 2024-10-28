'use client'

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/Button";
import { Title } from "../../ui/Title";
import { buttons, peopleInfo } from "@/app/utils/const";

export const SomethingAwesome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === peopleInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? peopleInfo.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-center px-4 flex flex-col gap-16 bg-project-purple py-12">
      <div className="text-white">
        <Title
          subtitle="Join other Sun harvesters"
          subtitleColor="yellow"
          title="Make something awesome"
          description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        />
        <Button color="yellow" />
      </div>
      <div>
        <div className="bg-white flex flex-col gap-8 p-8 rounded-lg">
          <p>{peopleInfo[currentIndex].text}</p>
          <div className="flex gap-2">
            <Image
              src={peopleInfo[currentIndex].img}
              alt={peopleInfo[currentIndex].name}
              width={48}
              height={48}
            />
            <div className="flex flex-col items-start">
              <p>{peopleInfo[currentIndex].name}</p>
              <p className="text-project-light-gray">
                {peopleInfo[currentIndex].category}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center justify-center mt-4">
          {buttons.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={id === 1 ? handlePrevious : handleNext}
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
