import Image from "next/image";
import Link from "next/link";
import { Activity, Phone } from "lucide-react";
import logoLight from "@/assets/code-blue-logo-dark-tight.png";
import markLight from "@/assets/code-blue-mark-dark-removebg-preview.png";
import { contactInfo, contactMeta, footerLinks, footerSocials, locationMeta, navItems } from "@/lib/site-content";
import { FadeIn } from "@/components/motion";
import { ButtonAnchor, cn, ContentWidth } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="site-header-shell">
      <ContentWidth>
        <div className="site-header-bar">
          <Link href="/" className="site-logo-wrap" aria-label="Code Blue Medical Consultancy home">
            <Image src={logoLight} alt="Code Blue Medical Consultancy" priority className="site-logo" />
          </Link>
          <nav className="site-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="site-nav-actions">
            <ButtonAnchor href={contactInfo.phoneHref} tone="nav-dark">
              <Phone size={16} />
              Call now
            </ButtonAnchor>
            <ButtonAnchor href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" tone="nav-light">
              WhatsApp
            </ButtonAnchor>
          </div>
        </div>
      </ContentWidth>
    </header>
  );
}

export function InteriorHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader />
      <section className="interior-hero">
        <ContentWidth>
          <FadeIn className="interior-hero-card">
            <h1 className="interior-hero-title">{title}</h1>
            <p className="interior-hero-copy">{description}</p>
          </FadeIn>
        </ContentWidth>
      </section>
    </>
  );
}

export function ClosingCta() {
  return (
    <section className="closing-cta-shell">
      <ContentWidth>
        <FadeIn className="closing-cta">
          <div className="closing-cta-copy">
            <div className="closing-cta-icon">
              <Phone size={24} />
            </div>
            <div>
              <h2 className="closing-cta-title">Let&apos;s get you the right care, right away.</h2>
              <p className="closing-cta-text">We&apos;re here 24/7 to consult, coordinate, and support.</p>
            </div>
          </div>
          <div className="closing-cta-actions">
            <ButtonAnchor href={contactInfo.phoneHref} tone="nav-dark">
              <Phone size={16} />
              Call {contactInfo.phoneDisplay}
            </ButtonAnchor>
            <ButtonAnchor href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" tone="nav-light">
              WhatsApp
            </ButtonAnchor>
          </div>
        </FadeIn>
      </ContentWidth>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ContentWidth>
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Image src={logoLight} alt="Code Blue Medical Consultancy" className="site-footer-logo" />
            <p className="site-footer-copy">
              Code Blue Medical Consultancy helps patients move from uncertainty into action with
              clear consultation, bedside testing, bedside nursing, and WhatsApp-first follow-up.
            </p>
            <div className="site-footer-socials">
              {footerSocials.map((item) => (
                <a key={item.label} href={item.href} className="site-footer-social">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="site-footer-heading">Contact</h3>
            <div className="site-footer-list">
              {contactMeta.map((item) => {
                const Icon = item.icon;
                const props = item.external ? { target: "_blank", rel: "noreferrer" } : {};

                return (
                  <a key={item.label} href={item.href} className="site-footer-item" {...props}>
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="site-footer-heading">Location</h3>
            <div className="site-footer-list">
              {locationMeta.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="site-footer-item">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="site-footer-heading">Quick links</h3>
            <div className="site-footer-links">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="site-footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Code Blue Medical Consultancy. All rights reserved.</p>
          <div className="site-footer-trace">
            <span>Care that feels calm, connected, and clear.</span>
            <Activity size={18} />
          </div>
        </div>
      </ContentWidth>
    </footer>
  );
}

export function LightLogoBadge({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("light-logo-badge", className)}>
      <Image src={markLight} alt="" aria-hidden className="light-logo-badge-mark" />
    </div>
  );
}

export function InteriorPageFrame({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <InteriorHeader title={title} description={description} />
      {children}
      <ClosingCta />
      <SiteFooter />
    </>
  );
}

export function HomePageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
      <ClosingCta />
      <SiteFooter />
    </>
  );
}
