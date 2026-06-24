import { InteriorPageFrame } from "@/components/site-shell";
import { ContactSections } from "@/components/site-sections";
import { PageContainer } from "@/components/ui";

export default function ContactPage() {
  return (
    <PageContainer>
      <InteriorPageFrame
        title="Call, WhatsApp, or visit Code Blue anytime."
        description="The contact page keeps the business line highly visible, supports 24/7 availability messaging, and leaves clean space for the essentials."
      >
        <ContactSections />
      </InteriorPageFrame>
    </PageContainer>
  );
}
