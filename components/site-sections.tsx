import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import {
  consultationPricing,
  contactCards,
  contactInfo,
  heroActions,
  heroHighlights,
  homeCareCards,
  homeCareIncludes,
  homepageStats,
  imagery,
  primaryActions,
  processSteps,
  supportChecklist,
} from "@/lib/site-content";
import { FadeIn } from "@/components/motion";
import { ButtonAnchor, ContentWidth } from "@/components/ui";

export function HomeHero() {
  return (
    <section className="home-hero">
      <ContentWidth className="home-hero-grid">
        <FadeIn className="home-hero-copy">
          <h1 className="home-hero-title">Digital care that feels calm, connected, and clear.</h1>
          <p className="home-hero-text">
            Code Blue Medical Consultancy helps patients in Jinja access the right care fast.
            Consult a doctor, request bedside support, or arrange home sample pickup with one
            simple intake.
          </p>
          <div className="home-hero-actions">
            {heroActions.map((action) => {
              const Icon = action.icon;
              const props = action.external ? { target: "_blank", rel: "noreferrer" } : {};

              return (
                <ButtonAnchor key={action.label} href={action.href} tone={action.tone === "solid" ? "primary" : "secondary"} {...props}>
                  <Icon size={16} />
                  {action.label}
                </ButtonAnchor>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="home-hero-media">
          <div className="home-hero-image-wrap">
            <Image
              src={imagery.hero}
              alt="Code Blue clinician standing confidently"
              width={960}
              height={1120}
              className="home-hero-image"
              priority
            />
          </div>
          <div className="hero-summary-card">
            <h2 className="hero-summary-title">Care made easier</h2>
            <div className="hero-summary-list">
              {heroHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="hero-summary-item">
                    <span className="hero-summary-icon">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="hero-summary-item-title">{item.title}</p>
                      <p className="hero-summary-item-copy">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hero-summary-note">
              <ShieldCheck size={18} />
              <span>Built for modern outpatient coordination in Jinja.</span>
            </div>
          </div>
        </FadeIn>
      </ContentWidth>
    </section>
  );
}

export function HomepageSections() {
  return (
    <>
      <section className="stats-band-shell">
        <ContentWidth>
          <div className="stats-band">
            {homepageStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.label} delay={index * 0.06} className="stats-band-item">
                  <span className="stats-band-icon">
                    <Icon size={28} />
                  </span>
                  <div>
                    <p className="stats-band-value">{item.value}</p>
                    <p className="stats-band-label">{item.label}</p>
                    <p className="stats-band-copy">{item.sublabel}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </ContentWidth>
      </section>

      <section className="home-section">
        <ContentWidth>
          <FadeIn className="section-heading section-heading-center">
            <p className="section-kicker">Choose the right care path</p>
            <h2 className="section-title">Services built around your needs.</h2>
          </FadeIn>

          <div className="services-grid">
            {primaryActions.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.06} className="service-feature">
                  <div className="service-feature-copy">
                    <span className="service-feature-icon">
                      <Icon size={20} />
                    </span>
                    <h3 className="service-feature-title">{item.title}</h3>
                    <p className="service-feature-text">{item.description}</p>
                    <Link href={item.href} className="service-feature-link">
                      Learn more
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className="service-feature-media">
                    <Image src={item.image} alt={item.title} width={420} height={520} className="service-feature-image" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </ContentWidth>
      </section>

      <section className="process-section">
        <ContentWidth>
          <FadeIn className="section-heading section-heading-center">
            <p className="section-kicker">How it works</p>
            <h2 className="section-title">Three simple steps to care.</h2>
          </FadeIn>

          <div className="process-grid">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08} className="process-step">
                  <div className="process-number">{index + 1}</div>
                  <div className="process-line" />
                  <div className="process-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-text">{item.body}</p>
                </FadeIn>
              );
            })}
          </div>
        </ContentWidth>
      </section>

      <section className="home-section home-section-tight">
        <ContentWidth>
          <FadeIn className="section-heading section-heading-center">
            <p className="section-kicker">Clear pricing. Local support.</p>
            <h2 className="section-title">Care you can plan for.</h2>
          </FadeIn>

          <div className="pricing-support-grid">
            <FadeIn className="pricing-card">
              <h3 className="pricing-card-title">Consultation pricing</h3>
              <div className="pricing-table">
                {consultationPricing.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="pricing-row">
                      <div className="pricing-row-label">
                        <span className="pricing-row-icon">
                          <Icon size={18} />
                        </span>
                        <span>{item.label}</span>
                      </div>
                      <span className="pricing-row-price">{item.price}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pricing-footer-note">
                <ShieldCheck size={18} />
                <span>Transparent pricing. No hidden fees.</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="support-card">
              <div className="support-card-media">
                <Image
                  src={imagery.support}
                  alt="Landscape representing Jinja-based support"
                  width={420}
                  height={420}
                  className="support-card-image"
                />
              </div>
              <div className="support-card-copy">
                <h3 className="support-card-title">Jinja-based. Patient-first.</h3>
                <p className="support-card-text">
                  Our team provides bedside nurse support, home wellness visits, and bedside
                  testing across Jinja. We bring care closer to home, with dignity and respect.
                </p>
                <div className="support-checklist">
                  {supportChecklist.map((item) => (
                    <div key={item} className="support-check-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </ContentWidth>
      </section>
    </>
  );
}

export function ContactSections() {
  return (
    <ContentWidth className="page-sections">
      <section className="content-split">
        <FadeIn className="page-card">
          <div className="section-heading">
            <p className="section-kicker">How patients can contact Code Blue</p>
            <h2 className="section-title section-title-left">Keep the main contact options impossible to miss.</h2>
          </div>
          <div className="stacked-card-grid">
            {contactCards.map((card, index) => (
              <article key={card.title} className={`info-card ${index === 0 ? "info-card-active" : ""}`}>
                <h3 className="info-card-title">{card.title}</h3>
                <p className="info-card-text">{card.body}</p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="page-media-card">
          <Image
            src={imagery.contactDetail}
            alt="Code Blue clinician ready to support patients"
            width={960}
            height={1200}
            className="page-media-image"
          />
        </FadeIn>
      </section>

      <section className="content-split">
        <FadeIn className="page-card page-card-soft">
          <div className="section-heading">
            <p className="section-kicker">Trust and next steps</p>
            <h2 className="section-title section-title-left">Call, WhatsApp, or visit with confidence.</h2>
          </div>
          <p className="section-body-text">
            The business line, WhatsApp handoff, and location stay visible without burying patients
            under extra content or dead-end forms.
          </p>
          <div className="page-actions">
            <ButtonAnchor href={contactInfo.phoneHref} tone="secondary">
              Call business line
            </ButtonAnchor>
            <ButtonAnchor href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" tone="primary">
              Open WhatsApp
            </ButtonAnchor>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="page-card">
          <div className="stacked-card-grid">
            <div className="info-card">
              <p className="info-card-label">Phone</p>
              <p className="info-card-value">{contactInfo.phoneDisplay}</p>
            </div>
            <div className="info-card">
              <p className="info-card-label">Availability</p>
              <p className="info-card-value">{contactInfo.availability}</p>
            </div>
            <div className="info-card">
              <p className="info-card-label">Primary area</p>
              <p className="info-card-value">Jinja town</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </ContentWidth>
  );
}

export function HomeWellnessSections() {
  return (
    <ContentWidth className="page-sections">
      <section className="content-split">
        <FadeIn className="page-card">
          <div className="section-heading">
            <p className="section-kicker">Services for home-based support</p>
            <h2 className="section-title section-title-left">A calmer presentation for home care and family support.</h2>
          </div>
          <div className="stacked-card-grid">
            {homeCareCards.map((card, index) => (
              <article key={card.title} className={`info-card ${index === 0 ? "info-card-active" : ""}`}>
                <h3 className="info-card-title">{card.title}</h3>
                <p className="info-card-text">{card.body}</p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="page-card page-card-soft">
          <div className="section-heading">
            <p className="section-kicker">What home care can include</p>
            <h2 className="section-title section-title-left">Support that stays practical and human.</h2>
          </div>
          <div className="simple-list">
            {homeCareIncludes.map((item) => (
              <div key={item} className="simple-list-item">
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </ContentWidth>
  );
}
