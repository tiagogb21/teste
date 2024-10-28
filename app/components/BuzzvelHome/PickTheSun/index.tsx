import Image from "next/image";
import { Title } from "../ui/Title";

export const PickTheSun = () => {
  return (
    <div className="flex flex-col lg:items-center px-4 py-12 gap-16">
      <Title
        subtitle="No more waste"
        title="Pick the Sun"
        description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      />
      <div className="relative flex items-center">
      <Image
        className="absolute -z-10 -top-20 -left-10 lg:w-[44.3rem]"
        src="/Ellipse-Yellow.png"
        alt="iPhone"
        width={200}
        height={200}
      />
      <Image
        src="/Desktop.png"
        alt="Macbook"
        width={358}
        height={246}
        className="lg:w-[95rem]"
      />
      <Image
        className="absolute -right-10 top-4 lg:top-12 -z-10 lg:w-[37.25rem]"
        src="/Ellipse-Purple.png"
        alt="iPhone"
        width={150}
        height={150}
      />
      </div>
    </div>
  );
};
