import { ConsultationForm } from "@/components/forms";
import { InteriorPageFrame } from "@/components/site-shell";
import { PageContainer } from "@/components/ui";

export default function ConsultPage() {
  return (
    <PageContainer>
      <InteriorPageFrame
        title="Consult with a doctor"
        description="Patients can start online consultation, an in-person review, or a physical visit within Jinja from one clear intake flow."
      >
        <ConsultationForm />
      </InteriorPageFrame>
    </PageContainer>
  );
}
