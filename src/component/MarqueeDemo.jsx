import { ExternalLink } from "lucide-react";
import { myProjects } from "../Constant";
import { Marquee } from "./Marquee";

function ProjectCard({ title, description, href, image, tags }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${title} project`}
      className="text-[15px] sm:text-[18px] group/card block w-72 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
    >
      <div className="flex h-28 items-center gap-4 p-4">
        <img
          src={image}
          alt=""
          className="h-20 w-24 shrink-0 rounded-lg object-cover"
          loading="lazy"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-semibold text-white">{title}</h3>
            <ExternalLink
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover/card:text-white"
            />
          </div>

          <p className="mt-0.5 sm:mt-1 line-clamp-2 text-xs leading-5 text-neutral-400">
            {description}
          </p>

          <div className="mt-1 sm:mt-2 flex items-center gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <img
                key={`${title}-${tag.id}`}
                src={tag.path.replace("/public", "")}
                alt={tag.name}
                title={tag.name}
                className="h-5 w-5 rounded-full bg-white/90 p-0.5 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee
        pauseOnHover
        repeat={3}
        className="py-2 [--duration:24s] [--gap:0.75rem]"
      >
        {myProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/70 to-transparent" />
    </div>
  );
}
