import { Link } from "@tanstack/react-router";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { caseStudies, creatorVideos, type CreatorVideo, type CaseStudy } from "@/lib/case-studies";

const tiktokReels: { url: string; title: string; creator: string }[] = [
  {
    url: "https://www.tiktok.com/@alvaleiablomdahl/video/7638669551365934358",
    title: "Reklam @GoWish",
    creator: "@alvaleiablomdahl",
  },
  {
    url: "https://www.tiktok.com/@gowish_com/video/7227501005464718619",
    title: "POV: curated wishlists for any occasion",
    creator: "@gowish_com",
  },
  {
    url: "https://www.tiktok.com/@alishabkrindsig/video/7621916390357732630",
    title: "Favoritter fra @jwlry.dk på Ønskeskyen",
    creator: "@alishabkrindsig",
  },
  {
    url: "https://www.tiktok.com/@josefinedybvad/video/7642621765948083478",
    title: "Haul — styles fra UNIQLO",
    creator: "@josefinedybvad",
  },
  {
    url: "https://www.tiktok.com/@maria_mk_managements/video/7601162694854479106",
    title: "My current obsessions",
    creator: "@maria_mk_managements",
  },
  {
    url: "https://www.tiktok.com/@lykkeaagaard/video/7613328342892186902",
    title: "Favoritter til konfirmander",
    creator: "@lykkeaagaard",
  },
];

export function CreatorReels() {
  // Pick one video per case study, first 6
  const picks = caseStudies
    .map((c) => {
      const vids = creatorVideos[c.slug];
      if (!vids?.length) return null;
      return { study: c, video: vids[0] };
    })
    .filter(Boolean)
    .slice(0, 6) as { study: CaseStudy; video: CreatorVideo }[];

  return (
    <section className="relative overflow-hidden border-y border-line bg-cream-soft">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[1180px] px-6 pt-20 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <PlayCircle className="h-4 w-4" /> Creator reels
            </p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] max-w-[22ch] leading-[1.05]">
              See how creators <span className="serif text-accent">actually use</span> GoWish.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[17px] text-ink-2 leading-[1.5]">
              Short videos from real creators — walkthroughs, behind-the-scenes builds, and the exact playbooks that drive monthly commission.
            </p>
          </div>
          <Link to="/learning-bank" className="btn-ghost shrink-0">
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {picks.map(({ study, video }, i) => {
            const tt = tiktokReels[i];
            return (
            <Link
              key={study.slug}
              to="/learning-bank/$slug"
              params={{ slug: study.slug }}
              className="group flex flex-col gap-3"
            >
              <VideoPlaceholder
                title={tt?.title ?? video.title}
                duration={video.duration}
                tone={video.tone}
                aspect="9/16"
                thumbnailSeed={`${study.slug}-home-${i}`}
                tiktokUrl={tt?.url}
              />
            </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}
