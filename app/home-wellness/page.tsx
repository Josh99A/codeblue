import { InteriorPageFrame } from "@/components/site-shell";
import { HomeWellnessSections } from "@/components/site-sections";
import { PageContainer } from "@/components/ui";

export default function HomeWellnessPage() {
  return (
    <PageContainer>
      <InteriorPageFrame
        title="Home nursing, elderly wellness checks, and follow-up support."
        description="Code Blue presents home-based support as calm, visible, and human care for patients within Jinja."
      >
        <HomeWellnessSections />
      </InteriorPageFrame>
    </PageContainer>
  );
}
