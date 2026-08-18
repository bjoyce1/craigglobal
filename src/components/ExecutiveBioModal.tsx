import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CgiPortrait } from "@/components/CgiPortrait";
import type { CgiTeamMember } from "@/lib/cgi-team";

/**
 * ExecutiveBioModal — premium profile panel for a CGI leader.
 * Renders the complete approved biography, expertise, awards and media CTA.
 */
export function ExecutiveBioModal({
  member,
  open,
  onOpenChange,
  onWatchVideo,
}: {
  member: CgiTeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onWatchVideo?: (url: string) => void;
}) {
  if (!member) return null;
  const paragraphs =
    member.fullBio.length > 0
      ? member.fullBio
      : member.roleDescription
        ? [member.roleDescription]
        : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="surface-dark max-h-[88vh] w-[calc(100vw-2rem)] max-w-4xl overflow-y-auto border-[var(--line-dark)] bg-midnight p-0 text-bone">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-[minmax(0,300px)_1fr]">
          <div className="p-6 md:p-8 md:pr-0">
            <CgiPortrait
              name={member.name}
              initials={member.initials}
              photo={member.photo}
            />
            {member.videoUrl && (
              <button
                type="button"
                onClick={() => onWatchVideo?.(member.videoUrl!)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-hi"
              >
                Watch Patricia's Bio
              </button>
            )}
          </div>

          <div className="p-6 md:p-8">
            <p className="eyebrow text-gold">{member.organization}</p>
            <DialogTitle className="mt-3 font-serif text-3xl font-semibold leading-tight text-bone md:text-4xl">
              {member.name}
            </DialogTitle>
            <p className="eyebrow mt-3 text-gold">{member.title}</p>
            <p className="text-dim mt-2 font-sans text-sm uppercase tracking-[0.16em]">
              {member.location}
            </p>
            {member.appointmentDate && (
              <p className="text-dim mt-1 font-sans text-xs uppercase tracking-[0.16em]">
                Appointed {member.appointmentDate}
              </p>
            )}

            {member.bioStatus === "Awaiting Client Bio" && (
              <p className="mt-6 border border-[var(--line-dark)] px-4 py-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-gold">
                Role description · Full biography forthcoming
              </p>
            )}

            <div className="mt-6 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-dim text-[0.98rem] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {member.currentRoles.length > 0 && (
              <div className="mt-8 border-t border-[var(--line-dark)] pt-6">
                <p className="eyebrow text-gold">Current roles</p>
                <ul className="mt-3 space-y-2">
                  {member.currentRoles.map((r) => (
                    <li key={r} className="text-dim font-serif text-lg">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.awards.length > 0 && (
              <div className="mt-8 border-t border-[var(--line-dark)] pt-6">
                <p className="eyebrow text-gold">Recognition</p>
                <ul className="mt-3 space-y-2">
                  {member.awards.map((a) => (
                    <li key={a} className="text-dim font-serif text-lg">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.expertise.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {member.expertise.map((t) => (
                  <span
                    key={t}
                    className="border border-[var(--line-dark)] px-3 py-1.5 font-sans text-[0.68rem] uppercase tracking-[0.14em] text-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** VideoModal — elegant frame for an external bio video. */
export function VideoModal({
  url,
  open,
  onOpenChange,
}: {
  url: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const embed = url?.includes("vimeo.com")
    ? `https://player.vimeo.com/video/${url.split("/").filter(Boolean).pop()}`
    : url;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-4xl border-[var(--line-dark)] bg-midnight p-4">
        <DialogTitle className="sr-only">Executive bio video</DialogTitle>
        {embed && (
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              src={embed}
              title="Executive bio video"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
