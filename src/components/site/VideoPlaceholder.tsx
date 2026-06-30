import { useEffect, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  title: string;
  creator?: string;
  duration?: string;
  tone?: "coral" | "cream" | "blue" | "pink";
  aspect?: "9/16" | "16/9" | "4/5" | "1/1";
  thumbnailSeed?: string;
  tiktokUrl?: string;
};

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  coral: "from-accent/30 via-pink/40 to-pink-2/60",
  cream: "from-cream-soft via-cream to-pink/40",
  blue: "from-blue-soft-2/60 via-blue-soft/40 to-cream-soft",
  pink: "from-pink/60 via-pink-2/60 to-accent/30",
};

function parseTikTok(url: string) {
  // https://www.tiktok.com/@user/video/123...
  const m = url.match(/@([^/]+)\/video\/(\d+)/);
  if (!m) return null;
  return { username: m[1], videoId: m[2] };
}

function useTikTokScript(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const id = "tiktok-embed-script";
    if (document.getElementById(id)) {
      // @ts-expect-error - tiktok global
      window.tiktokEmbed?.lib?.render?.();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.tiktok.com/embed.js";
    document.body.appendChild(s);
  }, [enabled]);
}

export function VideoPlaceholder({
  title,
  creator,
  duration = "0:48",
  tone = "coral",
  aspect = "9/16",
  thumbnailSeed,
  tiktokUrl,
}: Props) {
  const tt = tiktokUrl ? parseTikTok(tiktokUrl) : null;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useTikTokScript(!!tt && mounted);

  if (tt && mounted) {
    return (
      <div
        className={`group relative w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${toneMap[tone]}`}
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        <blockquote
          className="tiktok-embed absolute inset-0 !m-0 !max-w-none !min-w-0 !w-full !h-full"
          cite={tiktokUrl}
          data-video-id={tt.videoId}
          style={{ width: "100%", height: "100%" }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href={`https://www.tiktok.com/@${tt.username}?refer=embed`}>
              @{tt.username}
            </a>
          </section>
        </blockquote>
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-bg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Live on TikTok
          </span>
        </div>
      </div>
    );
  }

  const seed = thumbnailSeed ?? title;
  const angle = (seed.charCodeAt(0) * 13) % 360;
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${toneMap[tone]}`}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      {/* Animated blob */}
      <div
        className="absolute -inset-10 opacity-70 mix-blend-multiply blur-2xl pointer-events-none"
        style={{
          background: `conic-gradient(from ${angle}deg, #ff6334 0%, #ffd8c2 25%, #ffe9d6 50%, #ffb39a 75%, #ff6334 100%)`,
          animation: "spin 18s linear infinite",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #000 0.5px, transparent 0.6px), radial-gradient(circle at 70% 60%, #000 0.5px, transparent 0.6px)",
          backgroundSize: "3px 3px, 5px 5px",
        }}
      />

      {/* Top tag */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-bg">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Creator reel
        </span>
        <span className="rounded-full bg-bg/85 backdrop-blur-sm px-2 py-0.5 text-[11px] font-semibold text-ink">
          {duration}
        </span>
      </div>

      {/* Play button */}
      <button
        type="button"
        aria-label={`Play ${title}`}
        className="absolute inset-0 grid place-items-center"
      >
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-bg/90 backdrop-blur shadow-xl transition-transform duration-300 group-hover:scale-110">
          <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
          <Play className="relative h-6 w-6 fill-accent text-accent translate-x-0.5" />
        </span>
      </button>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
        <p className="text-bg text-[13px] font-semibold leading-tight line-clamp-2">{title}</p>
        {creator && <p className="text-bg/80 text-[11px] mt-0.5">{creator}</p>}
      </div>
    </div>
  );
}
