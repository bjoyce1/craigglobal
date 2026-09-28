import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { Eyebrow } from "@/components/Eyebrow";
import { CgiPortrait } from "@/components/CgiPortrait";
import { ExecutiveBioModal, VideoModal } from "@/components/ExecutiveBioModal";
import { LeadershipMap } from "@/components/ui/leadership-map";
import { PillButton } from "@/components/PillButton";
import {
  cgiExecutives,
  cgiLegal,
  cgiOperations,
  cgiTeam,
  type CgiTeamMember,
} from "@/lib/cgi-team";

function preview(member: CgiTeamMember) {
  return member.shortBio;
}

function ExecutiveCard({
  member,
  onOpen,
  onHover,
}: {
  member: CgiTeamMember;
  onOpen: () => void;
  onHover: (id: string | null) => void;
}) {
  return (
    <article
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      className="group flex flex-col border border-[var(--line-dark)] p-6 transition-colors duration-500 hover:border-gold/60"
    >
      <CgiPortrait name={member.name} initials={member.initials} photo={member.photo} />
      <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-bone">
        {member.name}
      </h3>
      <p className="eyebrow mt-3 text-gold">{member.title}</p>
      <p className="text-dim mt-2 font-sans text-xs uppercase tracking-[0.18em]">
        {member.location}
      </p>
      <p className="text-dim mt-5 text-[0.95rem] leading-relaxed">{preview(member)}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {member.expertise.slice(0, 6).map((t) => (
          <span
            key={t}
            className="border border-[var(--line-dark)] px-2.5 py-1 font-sans text-[0.62rem] uppercase tracking-[0.14em] text-gold"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-7">
        <button
          type="button"
          onClick={onOpen}
          className="group/btn inline-flex cursor-pointer items-center gap-2 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-hi"
        >
          Read Full Bio
          <span className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5">
            &rarr;
          </span>
        </button>
      </div>
    </article>
  );
}

function TeamCard({
  member,
  onOpen,
  onHover,
}: {
  member: CgiTeamMember;
  onOpen: () => void;
  onHover: (id: string | null) => void;
}) {
  return (
    <article
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      className="group flex flex-col border border-[var(--line-dark)] p-5 transition-colors duration-500 hover:border-gold/60"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 shrink-0">
          <CgiPortrait
            name={member.name}
            initials={member.initials}
            photo={member.photo}
          />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold leading-snug text-bone">
            {member.name}
          </h3>
          <p className="eyebrow mt-2 text-gold">{member.title}</p>
          <p className="text-dim mt-1 font-sans text-[0.65rem] uppercase tracking-[0.18em]">
            {member.location}
          </p>
        </div>
      </div>
      <p className="text-dim mt-4 text-[0.9rem] leading-relaxed">
        {member.roleDescription ?? member.shortBio}
      </p>
      {member.bioStatus === "Awaiting Client Bio" && (
        <p className="mt-4 font-sans text-[0.6rem] uppercase tracking-[0.18em] text-gold/70">
          Role description · Full biography forthcoming
        </p>
      )}
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={onOpen}
          className="group/btn inline-flex cursor-pointer items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:text-gold-hi"
        >
          View profile
          <span className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5">
            &rarr;
          </span>
        </button>
      </div>
    </article>
  );
}

export function CgiLeadership() {
  const [active, setActive] = useState<CgiTeamMember | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const points = cgiTeam.map((m) => ({
    id: m.id,
    label: m.location,
    lat: m.coords.lat,
    lng: m.coords.lng,
  }));

  return (
    <section className="surface-dark border-t border-[var(--line-dark)]">
      <SectionReveal className="section-pad mx-auto max-w-6xl px-6">
        <Eyebrow>CGI Executive Leadership</Eyebrow>
        <h2 className="display-h2 mt-6 max-w-3xl text-bone">
          The leadership carrying CGI abroad.
        </h2>

        <p className="text-dim mt-5 text-sm">
          Browse the team — open any profile for the full biography.
        </p>

        <Carousel opts={{ align: "start" }} className="mt-12 w-full">
          <CarouselContent className="-ml-6">
            {cgiTeam.map((m) => (
              <CarouselItem
                key={m.id}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <ExecutiveCard
                  member={m}
                  onOpen={() => setActive(m)}
                  onHover={setHovered}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-10 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 cursor-pointer border-[var(--line-dark)] bg-transparent text-bone hover:bg-gold hover:text-navy" />
            <CarouselNext className="static translate-y-0 cursor-pointer border-[var(--line-dark)] bg-transparent text-bone hover:bg-gold hover:text-navy" />
          </div>
        </Carousel>

        {/* Global leadership map */}
        <div className="mt-24 border-t border-[var(--line-dark)] pt-14">
          <Eyebrow>Global leadership map</Eyebrow>
          <LeadershipMap points={points} activeId={hovered} className="mt-8" />
        </div>

        {/* Closing */}
        <div className="mt-24 border-t border-[var(--line-dark)] pt-14">
          <h3 className="display-h2 max-w-2xl text-bone">Leadership Across Markets.</h3>
          <p className="body-measure text-dim mt-6">
            From Africa to Europe and North America, CGI brings together leaders with
            regional expertise, international perspective, and the operational discipline
            required to build enduring enterprise across borders.
          </p>
          <PillButton to="/contact" className="mt-9">
            Connect With CGI &rarr;
          </PillButton>
        </div>
      </SectionReveal>

      <ExecutiveBioModal
        member={active}
        open={!!active}
        onOpenChange={(o) => !o && setActive(null)}
        onWatchVideo={(url) => setVideoUrl(url)}
      />
      <VideoModal
        url={videoUrl}
        open={!!videoUrl}
        onOpenChange={(o) => !o && setVideoUrl(null)}
      />
    </section>
  );
}
