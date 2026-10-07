import { Sparkles } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { Project, ProjectImage } from "@/data/portfolio";
import { withBase } from "@/lib/base-path";
import { cn } from "@/lib/utils";

type Variant = "card" | "modal";

type Props = {
  project: Project;
  /** `card` fans the shots inside a grid card, `modal` lays them out in a row. */
  variant?: Variant;
  /** Show the per-screenshot captions (used by the details modal). */
  showLabels?: boolean;
  className?: string;
  /** Overlays rendered on top of the banner (category chip, close button, ...). */
  children?: ReactNode;
};

// App screenshots are portrait phone captures (~9:20 at 720x1600). The frames
// keep that ratio so a whole screen shows instead of a cropped centre strip.
const FRAME_SIZE: Record<Variant, string> = {
  card: "h-40",
  modal: "h-40 sm:h-44",
};

const BAND_SIZE: Record<Variant, string> = {
  card: "h-52",
  modal: "h-52 sm:h-56",
};

type Fan = { rotate: number; y: number; z: number };

// Fan used on cards: the cover shot sits centred and in front, the other two
// tuck in behind it and drop slightly.
function fanLayout(count: number): Fan[] {
  if (count <= 1) return [{ rotate: 0, y: 0, z: 20 }];
  if (count === 2) {
    return [
      { rotate: -4, y: 12, z: 10 },
      { rotate: 5, y: 0, z: 20 },
    ];
  }
  // The vertical drop keeps the fanned corners inside the banner's height.
  return [
    { rotate: -9, y: 16, z: 10 },
    { rotate: 0, y: 0, z: 20 },
    { rotate: 9, y: 16, z: 10 },
  ];
}

/**
 * Cards show at most three shots, with the cover (first image) moved to the
 * middle of the fan so the most representative screen is the one on top.
 * The modal keeps the authored order, since its captions read as a sequence.
 */
function orderShots(images: ProjectImage[], variant: Variant): ProjectImage[] {
  if (variant === "modal") return images;
  const shots = images.slice(0, 3);
  if (shots.length < 2) return shots;
  const center = Math.floor(shots.length / 2);
  const rest = shots.slice(1);
  return [...rest.slice(0, center), shots[0], ...rest.slice(center)];
}

function Shot({
  src,
  alt,
  label,
  variant,
  className,
  style,
}: {
  src: string;
  alt: string;
  label?: string;
  variant: Variant;
  className?: string;
  style?: CSSProperties;
}) {
  const isModal = variant === "modal";
  return (
    <figure className={cn("flex flex-col items-center", className)} style={style}>
      <div
        className={cn(
          "relative aspect-[9/20] overflow-hidden rounded-[0.65rem] border border-white/15 bg-black/70 shadow-[0_20px_45px_rgba(0,0,0,0.6)]",
          "transition-transform duration-500 ease-out",
          !isModal && "group-hover:scale-[1.04]",
          FRAME_SIZE[variant]
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- the static export serves every image unoptimized, so next/image would add markup without optimizing anything */}
        <img
          src={withBase(src)}
          alt={alt}
          loading={isModal ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
      {label && (
        <figcaption className="mt-2 text-[11px] font-medium text-neutral-400">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function BannerBackdrop({ variant }: { variant: Variant }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-700/10 to-transparent" />
      <div
        className={cn(
          "absolute inset-0 opacity-40",
          variant === "modal" ? "grid-pattern" : "dot-pattern"
        )}
      />
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
    </>
  );
}

// Placeholder artwork for projects that have no screenshots yet.
function ProjectArt({
  category,
  className,
  children,
}: {
  category: Project["category"];
  className?: string;
  children?: ReactNode;
}) {
  if (category === "Web") {
    return (
      <div className={cn("relative h-44 w-full overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 via-cyan-700/10 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-28 w-44 overflow-hidden rounded-lg border border-white/15 bg-white/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="flex h-4 items-center gap-1 border-b border-white/10 bg-white/[0.04] px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>
            <div className="grid grid-cols-3 gap-1 p-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-3 rounded-sm bg-white/10" />
              ))}
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  }
  if (category === "Mobile") {
    return (
      <div className={cn("relative h-44 w-full overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-700/10 to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-28 w-16 rounded-2xl border border-white/15 bg-white/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <div className="absolute left-1/2 top-1.5 h-1 w-6 -translate-x-1/2 rounded-full bg-white/10" />
            <div className="absolute inset-x-2 top-5 bottom-2 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
          </div>
        </div>
        {children}
      </div>
    );
  }
  return (
    <div className={cn("relative h-44 w-full overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-900/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles className="h-10 w-10 text-blue-300/80" />
      </div>
      {children}
    </div>
  );
}

export function ProjectBanner({
  project,
  variant = "card",
  showLabels = false,
  className,
  children,
}: Props) {
  const images = project.images ?? [];

  if (images.length === 0) {
    return (
      <ProjectArt category={project.category} className={className}>
        {children}
      </ProjectArt>
    );
  }

  const isModal = variant === "modal";
  const shots = orderShots(images, variant);
  const fans = fanLayout(shots.length);

  return (
    <div
      className={cn("relative w-full overflow-hidden", BAND_SIZE[variant], className)}
    >
      <BannerBackdrop variant={variant} />

      <div
        className={cn(
          "absolute inset-0 flex justify-center",
          isModal ? "flex-wrap items-center gap-4 px-6" : "items-center"
        )}
      >
        {shots.map((image, i) => (
          <Shot
            key={image.src}
            src={image.src}
            alt={image.alt}
            label={showLabels ? image.label : undefined}
            variant={variant}
            className={cn(!isModal && i > 0 && "-ml-5")}
            style={
              isModal
                ? undefined
                : {
                    transform: `rotate(${fans[i].rotate}deg) translateY(${fans[i].y}px)`,
                    zIndex: fans[i].z,
                  }
            }
          />
        ))}
      </div>

      {children}
    </div>
  );
}
