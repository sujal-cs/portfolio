import Image from "next/image";
import { creatorName, title, socials } from "@/data/data";
import Link from "next/link";
import { heroImg } from "@/data/data";
import { HoverInfo } from "@/components/HoverInfo";

export const Hero: React.FC = () => {
  return (
    <div className="flex gap-3">
      <Image
        height={125}
        width={115}
        src={heroImg}
        alt="image"
        className="rounded-lg border border-line shadow-sm shadow-stone-950/10"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold md:text-3xl">{creatorName}</h2>
        <h4 className="mt-[-4px] text-base font-light text-muted md:mt-[-6px] md:text-xl">
          {title}
        </h4>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverInfo text={social.name}>
                <p className="rounded-md border border-line bg-surface p-1.5 text-xl shadow-sm shadow-stone-950/5 transition-colors hover:border-accent/40 hover:bg-accent-soft md:text-2xl">
                  {social.icon && <social.icon />}
                </p>
              </HoverInfo>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
