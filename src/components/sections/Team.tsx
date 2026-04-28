import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { getTeamMembers, strapiImageUrl, type TeamMember } from "@/lib/strapi";

/** Fallback-billeder når Strapi ikke har et foto endnu */
const fallbackImages = [
  "/team/alexander.svg",
  "/team/member-2.svg",
  "/team/member-3.svg",
  "/team/member-4.svg",
];

function getImageForMember(member: TeamMember, index: number): string {
  const uploaded = strapiImageUrl(member.photo);
  if (uploaded) return uploaded;
  if (member.isPrimary) return fallbackImages[0];
  return fallbackImages[(index % 3) + 1];
}

export default async function Team() {
  const members = await getTeamMembers().catch(() => [] as TeamMember[]);

  if (members.length === 0) return null;

  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
            Hele holdet bag
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center leading-[1.1] max-w-3xl mx-auto">
            Fire mennesker. Én mission.
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mt-4 leading-relaxed">
            Vi er et lille hold i København — netop derfor kender vi jeres sag
            personligt. Ingen account managers, ingen mellemled.
          </p>
        </FadeIn>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {members.map((person, i) => {
            const imageUrl = getImageForMember(person, i);
            return (
              <FadeIn key={person.id} delay={i * 100}>
                <div className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-100">
                    <Image
                      src={imageUrl}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {person.isPrimary && (
                      <span className="absolute top-3 left-3 bg-white text-gray-900 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full shadow-sm">
                        Tager første møde
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="text-base lg:text-lg font-bold tracking-heading text-gray-900 leading-tight">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {person.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
