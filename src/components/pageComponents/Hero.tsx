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
      <div>
        <h2 className="font-bold text-2xl">{creatorName}</h2>
        <h4 className="font-light text-lg mt-[-0.35rem]">{title}</h4>
        <div className="flex flex-wrap gap-1.5">
            {socials.map((social) => (
            <Link key={social.id} href={social.link}>
              <HoverInfo text={social.name}>
                <Image
                src={social.icon}
                height={27}
                width={27}
                alt={social.name}
                className="dark:invert-[0.85] invert-[0.15]"
                />
              </HoverInfo>
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
}