import Image from "next/image";
import { creatorName, title, socials } from "@/data/data";
import Link from "next/link";
import { HoverInfo } from "@/components/HoverInfo";

export const Hero: React.FC = () => {

  return (
    <div className="flex gap-3">
      <Image
        height={125}
        width={115}
        src="/images/sujal-computer.jpg"
        alt="image"
        className="rounded-lg  border-2 border-primary-accent"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl md:text-3xl">{creatorName}</h2>
        <h4 className="font-light text-lg md:text-xl mt-[-8px]">{title}</h4>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {socials.map((social) => (
            <Link key={social.id} href={social.link} target="__blank">
              <HoverInfo text={social.name}> 
                  <p className="text-2xl border border-primary-accent rounded-md p-1 hover:bg-pri">{social.icon && <social.icon />}</p>
              </HoverInfo>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}