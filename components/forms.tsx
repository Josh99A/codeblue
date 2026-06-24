"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import { FileText, MessageCircleMore, Phone } from "lucide-react";
import { consultationModes, consultationPricing, contactInfo, imagery, pickupModes, preferredContactOptions, testPricing } from "@/lib/site-content";
import { FadeIn } from "@/components/motion";
import { ButtonAnchor, cn, ContentWidth, SectionCard, SoftCard, Tag } from "@/components/ui";

type UploadedFile = {
  name: string;
  size: string;
};

type SubmissionState = {
  submitted: boolean;
  summary: string;
  whatsappHref: string;
};

function formatFiles(files: FileList | null) {
  if (!files) return [];

  return Array.from(files).map((file) => ({
    name: file.name,
    size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
  }));
}

function buildWhatsappMessage(path: string, summary: string) {
  return `${contactInfo.whatsappHref}?text=${encodeURIComponent(
    `Hello Code Blue Medical Consultancy. I have completed the ${path} form.\n\n${summary}`,
  )}`;
}

function FormField({
  label,
  hint,
  children,
  span = false,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  span?: boolean;
}) {
  return (
    <label className={cn("field-block", span && "sm:col-span-2")}>
      <span className="field-label">{label}</span>
      {hint ? <span className="field-hint">{hint}</span> : null}
      {children}
    </label>
  );
}

function UploadField({
  label,
  hint,
  accept,
  onFilesChange,
}: {
  label: string;
  hint: string;
  accept: string;
  onFilesChange: (files: UploadedFile[]) => void;
}) {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  return (
    <div className="field-block sm:col-span-2">
      <span className="field-label">{label}</span>
      <span className="field-hint">{hint}</span>
      <label className="upload-card">
        <input
          type="file"
          accept={accept}
          multiple
          className="sr-only"
          onChange={(event) => {
            const nextFiles = formatFiles(event.target.files);
            setFiles(nextFiles);
            onFilesChange(nextFiles);
          }}
        />
        <div className="flex items-center gap-3">
          <div className="upload-icon">
            <FileText size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : "Upload supporting files"}
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              Images, PDFs, prescriptions, or requisitions.
            </p>
          </div>
        </div>
      </label>
      {files.length ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {files.map((file) => (
            <div key={`${file.name}-${file.size}`} className="upload-file-tile">
              <p className="truncate text-sm font-semibold text-[var(--foreground)]">{file.name}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{file.size}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SuccessPanel({ state }: { state: SubmissionState }) {
  if (!state.submitted) return null;

  return (
    <FadeIn className="mt-6">
      <SoftCard className="p-5 sm:p-6">
        <p className="section-label">Request captured</p>
        <p className="mt-3 max-w-[680px] text-sm leading-7 text-[var(--muted)]">{state.summary}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonAnchor href={state.whatsappHref} target="_blank" rel="noreferrer" tone="primary">
            <MessageCircleMore size={16} />
            Continue on WhatsApp
          </ButtonAnchor>
          <ButtonAnchor href={contactInfo.phoneHref} tone="secondary">
            <Phone size={16} />
            Call {contactInfo.phoneDisplay}
          </ButtonAnchor>
        </div>
      </SoftCard>
    </FadeIn>
  );
}

function SidePanel({
  title,
  imageAlt,
  imageSrc,
  items,
  helperTitle,
  helperBody,
}: {
  title: string;
  imageAlt: string;
  imageSrc: string;
  items: Array<{ label: string; price: string }>;
  helperTitle: string;
  helperBody: string;
}) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-6">
      <SectionCard className="editorial-card overflow-hidden p-0">
        <div className="hero-image-wrap">
          <Image src={imageSrc} alt={imageAlt} width={960} height={960} priority className="hero-image" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="section-label">{title}</p>
          <div className="mt-4 grid gap-3">
            {items.map((item) => (
              <div key={item.label} className="price-row">
                <p className="text-sm text-[var(--muted)]">{item.label}</p>
                <p className="text-base font-semibold text-[var(--foreground)]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
      <SoftCard className="p-5 sm:p-6">
        <p className="section-label">{helperTitle}</p>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{helperBody}</p>
      </SoftCard>
    </aside>
  );
}

export function ConsultationForm() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [submission, setSubmission] = useState<SubmissionState>({
    submitted: false,
    summary: "",
    whatsappHref: contactInfo.whatsappHref,
  });

  return (
    <ContentWidth className="pb-10 pt-8 sm:pb-14">
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <SectionCard className="editorial-card p-6 sm:p-8">
            <Tag>Consultation details</Tag>
            <div className="form-intro">
              <h2 className="section-title mt-5 max-w-[560px]">Consult with a doctor</h2>
              <p className="section-copy mt-3 max-w-[620px]">
                The revised intake reduces visual noise, keeps the key choices visible, and makes
                the next handoff feel immediate instead of hidden behind the form.
              </p>
            </div>
            <form
              className="mt-5"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const summary = [
                  `Patient: ${data.get("patientName") || "Not provided"}`,
                  `Symptoms: ${data.get("symptoms") || "Not provided"}`,
                  `Consultation mode: ${data.get("consultationMode") || "Not provided"}`,
                  `Preferred contact: ${data.get("contactMethod") || "Not provided"}`,
                  `Uploads: ${files.length ? files.map((file) => file.name).join(", ") : "None"}`,
                ].join("\n");

                startTransition(() => {
                  setSubmission({
                    submitted: true,
                    summary,
                    whatsappHref: buildWhatsappMessage("doctor consultation intake", summary),
                  });
                });
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Patient name">
                  <input className="form-field" name="patientName" placeholder="Patient full name" required />
                </FormField>
                <FormField label="Consultation mode">
                  <select className="form-field" name="consultationMode" defaultValue={consultationModes[0]}>
                    {consultationModes.map((mode) => (
                      <option key={mode}>{mode}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Phone number">
                  <input className="form-field" name="phone" placeholder="Patient phone number" />
                </FormField>
                <FormField label="Preferred contact">
                  <select className="form-field" name="contactMethod" defaultValue={preferredContactOptions[0]}>
                    {preferredContactOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Location">
                  <input className="form-field" name="location" placeholder="Current location in Jinja or beyond" />
                </FormField>
                <FormField label="Age">
                  <input className="form-field" name="age" placeholder="Age" />
                </FormField>
                <FormField label="Current symptoms or history" span>
                  <textarea
                    className="form-field min-h-36"
                    name="symptoms"
                    placeholder="Describe symptoms, timing, current treatment, or anything the doctor should review first."
                    required
                  />
                </FormField>
                <UploadField
                  label="Medical uploads"
                  hint="Share photos, PDFs, prescriptions, or previous reports to speed up review."
                  accept="image/*,.pdf,.doc,.docx"
                  onFilesChange={setFiles}
                />
              </div>

              <div className="consent-panel mt-6">
                <p className="section-label text-white/88">Send request with confidence</p>
                <p className="mt-2 max-w-[620px] text-sm leading-7 text-white/72">
                  By submitting this intake, you confirm the shared details are accurate to the
                  best of your knowledge and may be used to coordinate consultation and follow-up
                  care.
                </p>
                <label className="mt-5 flex items-start gap-3 text-sm text-white/82">
                  <input type="checkbox" required className="mt-1 size-4 rounded border-white/40" />
                  <span>I consent to review of my submitted information and supporting files.</span>
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="button-base button-primary">
                  Proceed after intake
                </button>
                <ButtonAnchor href={contactInfo.phoneHref} tone="secondary">
                  Call instead
                </ButtonAnchor>
              </div>
            </form>
            <SuccessPanel state={submission} />
          </SectionCard>
        </FadeIn>

        <FadeIn delay={0.08}>
          <SidePanel
            title="Consultation pricing"
            imageAlt="Doctor consulting with a patient"
            imageSrc={imagery.doctor}
            items={consultationPricing}
            helperTitle="Current priorities"
            helperBody="Online review, physical consultation, and in-home doctor visits stay visible without overwhelming the intake."
          />
        </FadeIn>
      </div>
    </ContentWidth>
  );
}

export function TestRequestForm() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [submission, setSubmission] = useState<SubmissionState>({
    submitted: false,
    summary: "",
    whatsappHref: contactInfo.whatsappHref,
  });

  return (
    <ContentWidth className="pb-10 pt-8 sm:pb-14">
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <SectionCard className="editorial-card p-6 sm:p-8">
            <Tag>Test request details</Tag>
            <div className="form-intro">
              <h2 className="section-title mt-5 max-w-[560px]">Request a bedside test</h2>
              <p className="section-copy mt-3 max-w-[620px]">
                Patients can upload requisitions, confirm pickup details, and continue directly to
                WhatsApp without feeling lost in a generic form layout.
              </p>
            </div>
            <form
              className="mt-5"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const summary = [
                  `Patient: ${data.get("patientName") || "Not provided"}`,
                  `Requested test: ${data.get("testName") || "Not provided"}`,
                  `Pickup date: ${data.get("pickupDate") || "Not provided"}`,
                  `Location: ${data.get("location") || "Not provided"}`,
                  `Pickup mode: ${data.get("pickupNeeded") || "Not provided"}`,
                  `Uploads: ${files.length ? files.map((file) => file.name).join(", ") : "None"}`,
                ].join("\n");

                startTransition(() => {
                  setSubmission({
                    submitted: true,
                    summary,
                    whatsappHref: buildWhatsappMessage("bedside test request", summary),
                  });
                });
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Patient name">
                  <input className="form-field" name="patientName" placeholder="Patient full name" required />
                </FormField>
                <FormField label="Requested test">
                  <input className="form-field" name="testName" placeholder="Requested test name" required />
                </FormField>
                <FormField label="Phone number">
                  <input className="form-field" name="phone" placeholder="Phone number" />
                </FormField>
                <FormField label="Location">
                  <input className="form-field" name="location" placeholder="Pickup or patient location" required />
                </FormField>
                <FormField label="Pickup date">
                  <input className="form-field" name="pickupDate" type="date" />
                </FormField>
                <FormField label="Pickup mode">
                  <select className="form-field" name="pickupNeeded" defaultValue={pickupModes[0]}>
                    {pickupModes.map((mode) => (
                      <option key={mode}>{mode}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Notes" span>
                  <textarea
                    className="form-field min-h-36"
                    name="notes"
                    placeholder="Add requisition notes, fasting instructions, symptoms, or other coordination details."
                  />
                </FormField>
                <UploadField
                  label="Reports and requisitions"
                  hint="Upload request notes, lab forms, scan summaries, or prior reports."
                  accept="image/*,.pdf,.doc,.docx"
                  onFilesChange={setFiles}
                />
              </div>

              <div className="consent-panel mt-6">
                <p className="section-label text-white/88">Confirm request with confidence</p>
                <p className="mt-2 max-w-[620px] text-sm leading-7 text-white/72">
                  This flow keeps home sample pickup, popular pricing, and the next coordination
                  step visible instead of ending in a dead form.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="button-base button-primary">
                  Confirm request
                </button>
                <ButtonAnchor href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" tone="secondary">
                  WhatsApp directly
                </ButtonAnchor>
              </div>
            </form>
            <SuccessPanel state={submission} />
          </SectionCard>
        </FadeIn>

        <FadeIn delay={0.08}>
          <SidePanel
            title="Sample pickup flow"
            imageAlt="Clinician ready for bedside diagnostics"
            imageSrc={imagery.test}
            items={testPricing}
            helperTitle="Before you send"
            helperBody="Popular tests, upload-first document handling, and home pickup for Jinja patients remain easy to scan."
          />
        </FadeIn>
      </div>
    </ContentWidth>
  );
}
