"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, ArrowUp, Menu, MessageCircleMore, Phone, X } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import logoLight from "@/assets/code-blue-logo-dark-tight.png";
import markLight from "@/assets/code-blue-mark-dark-removebg-preview.png";
import { contactInfo, contactMeta, footerLinks, footerSocials, locationMeta, navItems } from "@/lib/site-content";
import { FadeIn } from "@/components/motion";
import { ButtonAnchor, cn, ContentWidth } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header-shell">
      <ContentWidth>
        <div className="site-header-bar">
          <Link
            href="/"
            className="site-logo-wrap"
            aria-label="Code Blue Medical Consultancy home"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image src={logoLight} alt="Code Blue Medical Consultancy" priority className="site-logo" />
          </Link>

          <button
            type="button"
            className="site-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-header-nav-panel"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </button>

          <div
            id="site-header-nav-panel"
            className={cn("site-header-nav-panel", isMenuOpen && "site-header-nav-panel-open")}
          >
            <nav className="site-nav">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("site-nav-link", pathname === item.href && "site-nav-link-active")}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="site-nav-actions">
              <ButtonAnchor href={contactInfo.phoneHref} tone="nav-dark" onClick={() => setIsMenuOpen(false)}>
                <Phone size={16} />
                Call now
              </ButtonAnchor>
              <ButtonAnchor
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                tone="nav-light"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </ButtonAnchor>
            </div>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="site-footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <span className="site-footer-social-icon-wrap">
                    <FooterSocialIcon label={item.label} />
                  </span>
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

function FooterSocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <FaInstagram className="site-footer-social-icon" aria-hidden />
    );
  }

  if (label === "X") {
    return <FaXTwitter className="site-footer-social-icon" aria-hidden />;
  }

  return null;
}

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={cn("back-to-top", isVisible && "back-to-top-visible")}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export function WhatsAppBubble() {
  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Code Blue on WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden />
      <span className="whatsapp-float-icon">
        <MessageCircleMore size={22} />
      </span>
      <span className="whatsapp-float-copy">
        <strong>WhatsApp</strong>
        <span>Chat now</span>
      </span>
    </a>
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
      <BackToTopButton />
      <WhatsAppBubble />
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
      <BackToTopButton />
      <WhatsAppBubble />
      <ClosingCta />
      <SiteFooter />
    </>
  );
}
