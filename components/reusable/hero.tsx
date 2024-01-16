import Image, { StaticImageData } from "next/image";
import RootLayout from "@/app/layout";

interface HeroProps {
  title: string;
  imageAlt: string;
  imageData: StaticImageData;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imageData}
          alt={props.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-6xl text-white font-bold">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
