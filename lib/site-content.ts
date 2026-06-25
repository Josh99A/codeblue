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
import trustOutcomesImage from "@/assets/images/5. Trust and Outcomes Slot.png";
import familySupportImage from "@/assets/images/10. Family Support Contact Detail.png";
import homepageHeroImage from "@/assets/images/7. Jinja Digital Care Hero.png";
import doctorConsultationImage from "@/assets/images/8. Doctor Consultation Detail.png";
import bedsideDiagnosticsDetailImage from "@/assets/images/9. Bedside Diagnostics Detail.png";

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
  location: ["Mafubira, Jinja", "Uganda"],
};

export const imagery = {
  hero: homepageHeroImage,
  nurse: familySupportImage,
  doctor: doctorConsultationImage,
  test: bedsideDiagnosticsDetailImage,
  support: trustOutcomesImage,
  consultDetail: doctorConsultationImage,
  contactDetail: familySupportImage,
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
    imageAlt: "Code Blue nurse supporting a Ugandan family and older patient",
    icon: HousePlus,
  },
  {
    title: "Consult with doctor",
    href: "/consult",
    description: "Speak to a doctor online, in person, or at your home within Jinja.",
    image: imagery.doctor,
    imageAlt: "Ugandan doctor reviewing patient consultation details on a tablet",
    icon: Stethoscope,
  },
  {
    title: "Request bedside test",
    href: "/tests",
    description: "Share your request and we handle the rest, including home sample pickup.",
    image: imagery.test,
    imageAlt: "Ugandan clinician coordinating bedside diagnostics and home sample pickup",
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
  { label: "Online consultation", price: "UGX 10,000", icon: Stethoscope },
  { label: "In-person consultation", price: "UGX 20,000", icon: ShieldCheck },
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
  "In-person consultation",
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
  {
    href: "https://www.instagram.com/codebluemedicals?utm_source=qr&igsh=ZHNqbWx5YTRtanNt",
    label: "Instagram",
  },
  {
    href: "https://x.com/CodeBlumedicals",
    label: "X",
  },
];

export const contactMeta = [
  { label: contactInfo.phoneDisplay, href: contactInfo.phoneHref, icon: Phone },
  { label: "WhatsApp support", href: contactInfo.whatsappHref, icon: MessageCircleMore, external: true },
  { label: contactInfo.availability, href: "/contact", icon: Clock3 },
];

export const locationMeta = [
  { label: "Mafubira, Jinja", icon: MapPin },
  { label: "Uganda", icon: MapPin },
];
