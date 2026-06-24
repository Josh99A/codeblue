import { TestRequestForm } from "@/components/forms";
import { InteriorPageFrame } from "@/components/site-shell";
import { PageContainer } from "@/components/ui";

export default function TestsPage() {
  return (
    <PageContainer>
      <InteriorPageFrame
        title="Request a bedside test"
        description="Start a lab request, upload reports or requisitions, and coordinate home sample pickup within Jinja when needed."
      >
        <TestRequestForm />
      </InteriorPageFrame>
    </PageContainer>
  );
}
