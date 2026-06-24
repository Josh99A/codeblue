import {
  ClipboardCheck,
  Clock3,
  FlaskConical,
  Headset,
  HousePlus,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/consult", label: "Consult" },
  { href: "/tests", label: "Tests" },
  { href: "/home-wellness", label: "Home wellness" },
  { href: "/contact", label: "Contact" },
];

export const contactInfo = {
  phoneDisplay: "+256 740 961565",
  phoneHref: "tel:+256740961565",
  whatsappHref: "https://wa.me/256740961565",
  availability: "24/7 availability",
  location: ["Kayunga cell", "Namulesa parish", "Mafubira ward", "Jinja District, Uganda"],
};

export const imagery = {
  hero: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=1200&q=80",
  nurse: "https://images.unsplash.com/photo-1584516150909-c43483ee7938?auto=format&fit=crop&w=960&q=80",
  doctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=960&q=80",
  test: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=960&q=80",
  support: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=960&q=80",
  consultDetail:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  contactDetail:
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80",
};

export const heroActions = [
  { label: "Call now", href: contactInfo.phoneHref, icon: Phone, tone: "solid" as const },
  {
    label: "Chat on WhatsApp",
    href: contactInfo.whatsappHref,
    icon: MessageCircleMore,
    tone: "outline" as const,
    external: true,
  },
];

export const heroHighlights = [
  {
    title: "Doctor consultations",
    body: "Online, at clinic, or in-home",
    icon: Stethoscope,
  },
  {
    title: "Bedside nursing",
    body: "Professional support at home",
    icon: HousePlus,
  },
  {
    title: "Bedside diagnostics",
    body: "Sample pickup across Jinja",
    icon: FlaskConical,
  },
];

export const homepageStats = [
  {
    label: "Support available",
    sublabel: "Consult, coordinate, follow up.",
    value: "24/7",
    icon: Headset,
  },
  {
    label: "Average response",
    sublabel: "Fast replies, real people.",
    value: "24 min",
    icon: Clock3,
  },
  {
    label: "Home-based cases",
    sublabel: "Care delivered where it matters.",
    value: "24+",
    icon: HousePlus,
  },
];

export const primaryActions = [
  {
    title: "Request bedside nurse",
    href: "/home-wellness",
    description: "Compassionate, professional support at home. From wellness checks to recovery follow-ups.",
    image: imagery.nurse,
    icon: HousePlus,
  },
  {
    title: "Consult with doctor",
    href: "/consult",
    description: "Speak to a doctor online, at our clinic (DMC), or at your home within Jinja.",
    image: imagery.doctor,
    icon: Stethoscope,
  },
  {
    title: "Request bedside test",
    href: "/tests",
    description: "Share your request and we handle the rest, including home sample pickup.",
    image: imagery.test,
    icon: FlaskConical,
  },
];

export const processSteps = [
  {
    title: "Choose your service",
    body: "Pick the option that matches your need, nurse, doctor, or test.",
    icon: ClipboardCheck,
  },
  {
    title: "Fill the intake form",
    body: "Share a few details and upload any reports or prescriptions.",
    icon: ClipboardCheck,
  },
  {
    title: "Continue on WhatsApp",
    body: "We confirm quickly and move straight to next steps.",
    icon: MessageCircleMore,
  },
];

export const consultationPricing = [
  { label: "Online consultation", price: "UGX 5,000", icon: Stethoscope },
  { label: "Physical at DMC", price: "UGX 10,000", icon: ShieldCheck },
  { label: "Physical at patient within Jinja", price: "UGX 50,000", icon: HousePlus },
];

export const supportChecklist = [
  "Professional, vetted care team",
  "Home sample pickup across Jinja",
  "Fast coordination on WhatsApp",
  "Follow-up that keeps you informed",
];

export const contactCards = [
  {
    title: "Call business line",
    body: "Reach Code Blue directly for consults, diagnostics, or home support coordination.",
  },
  {
    title: "WhatsApp support",
    body: "Use WhatsApp when you need fast document sharing or a clearer handoff.",
  },
  {
    title: "Visit in Jinja",
    body: "Location details stay visible for in-person coordination and follow-up.",
  },
];

export const homeCareCards = [
  {
    title: "Bedside nurse requests",
    body: "Support for home observation, medication reminders, and practical care coordination.",
  },
  {
    title: "Elderly wellness checks",
    body: "Recurring visits that keep wellbeing visible for both patients and families.",
  },
  {
    title: "Recovery follow-up",
    body: "Calm post-treatment check-ins that make recovery feel safer at home.",
  },
];

export const homeCareIncludes = [
  "Observation and comfort support",
  "Vital check-ins and wellbeing follow-up",
  "Medication and recovery coordination",
  "Gentle communication with caregivers",
];

export const preferredContactOptions = ["WhatsApp", "Phone call", "Either works"];
export const consultationModes = [
  "Online consultation",
  "Physical at DMC",
  "Physical at patient within Jinja",
];
export const pickupModes = [
  "Home sample pickup needed",
  "Drop-off at facility",
  "Need advice first",
];

export const testPricing = [
  { label: "AFP", price: "UGX 60,000" },
  { label: "PSA", price: "UGX 60,000" },
  { label: "CEA", price: "UGX 60,000" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/consult", label: "Consult" },
  { href: "/tests", label: "Tests" },
  { href: "/home-wellness", label: "Home wellness" },
  { href: "/contact", label: "Contact" },
];

export const footerSocials = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "X" },
  { href: "#", label: "Facebook" },
];

export const contactMeta = [
  { label: contactInfo.phoneDisplay, href: contactInfo.phoneHref, icon: Phone },
  { label: "WhatsApp support", href: contactInfo.whatsappHref, icon: MessageCircleMore, external: true },
  { label: contactInfo.availability, href: "/contact", icon: Clock3 },
];

export const locationMeta = [
  { label: "Kayunga cell", icon: MapPin },
  { label: "Namulesa parish", icon: MapPin },
  { label: "Mafubira ward", icon: MapPin },
  { label: "Jinja District, Uganda", icon: MapPin },
];
