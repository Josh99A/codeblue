import { HomePageFrame } from "@/components/site-shell";
import { HomeHero, HomepageSections } from "@/components/site-sections";
import { PageContainer } from "@/components/ui";

export default function HomePage() {
  return (
    <PageContainer>
      <HomePageFrame>
        <HomeHero />
        <HomepageSections />
      </HomePageFrame>
    </PageContainer>
  );
}
