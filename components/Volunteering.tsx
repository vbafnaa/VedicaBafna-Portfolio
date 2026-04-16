"use client";

import { VerticalTabs } from "@/components/ui/vertical-tabs";
import { volunteerExperiences } from "@/data/volunteering";

export function Volunteering() {
  return (
    <div id="volunteering" className="scroll-mt-24">
      <VerticalTabs
        items={volunteerExperiences}
        heading="Volunteer Experience"
        kicker="(COMMUNITY)"
      />
    </div>
  );
}
