import React, { useState, useRef, ChangeEvent, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiMail, FiSend, FiMapPin, FiLoader, FiAlertCircle, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/constants";
import { toast } from "@/components/ui/sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<FormData>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COLLABORATION_TOPICS = [
  "Research collaborations in AI/ML",
  "Speaking opportunities at conferences",
  "Consulting on production ML systems",
  "Open-source contributions & tooling",
  "Mentoring & technical knowledge sharing",
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const lastSubmitRef = useRef<number>(0);

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPending, startTransition] = useTransition();

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

  const isEmailJsConfigured = emailJsPublicKey && emailJsServiceId && emailJsTemplateId;

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Please enter your email address";
    else if (!EMAIL_REGEX.test(formData.email)) newErrors.email = "Please enter a valid email address";

    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    else if (formData.subject.trim().length < 3) newErrors.subject = "Subject must be at least 3 characters";

    if (!formData.message.trim()) newErrors.message = "Please enter your message";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;
    if (!isValid) {
      requestAnimationFrame(() => {
        errorSummaryRef.current?.focus();
      });
    }
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const triggerConfetti = async () => {
    try {
      const { default: confetti } = await import("canvas-confetti");
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error("Failed to load confetti module:", err);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    if (!isEmailJsConfigured) {
      toast("Configuration Error", {
        description: "Email service is not configured. Please email realsanjeev2@gmail.com directly.",
      });
      return;
    }

    if (isPending) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      toast("Please wait", {
        description: "You just sent a message.",
      });
      return;
    }

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("x_bot_trap_field") as HTMLInputElement)?.value;

    if (honeypot) return;

    startTransition(async () => {
      try {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: "Sanjeev Bhandari",
          },
          emailJsPublicKey
        );

        lastSubmitRef.current = now;

        triggerConfetti();
        setSuccess(true);

        toast("Message Sent", {
          description: "Thanks for reaching out! I'll get back to you soon.",
        });

        resetForm();

        setTimeout(() => setSuccess(false), 4000);
      } catch (err) {
        console.error("EmailJS Error:", err);
        toast("Failed to send", {
          description: "Please try again later. Error: " + (err instanceof Error ? err.message : "Unknown error"),
        });
      }
    });
  };

  const errorEntries = Object.entries(errors).filter(([, msg]) => Boolean(msg)) as [keyof FormData, string][];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-background text-foreground border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Let's <span className="text-emerald-600 dark:text-emerald-400">Connect</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
            Interested in discussing ML opportunities, research collaborations, or AI engineering? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a
                href="mailto:realsanjeev2@gmail.com"
                title="Send an email to Sanjeev Bhandari (@realsanjeev)"
                className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-200"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <FiMail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="text-sm sm:text-base font-medium break-all text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    realsanjeev2@gmail.com
                  </span>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm">
                <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0">
                  <FiMapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Social Profiles
              </h3>
              <div className="grid grid-cols-5 gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.ariaLabel}
                    aria-label={social.ariaLabel}
                    className={`p-3 bg-muted/60 rounded-xl border border-border/80 ${social.color} transition-all duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center gap-1.5`}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-[10px] font-medium truncate max-w-full">
                      {social.name.split('/')[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h3 className="text-base font-bold mb-4 text-foreground">
                Open to Collaboration
              </h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm">
                {COLLABORATION_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="lg:col-span-7 space-y-5 p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-sm"
          >
            {/* Focusable Error Summary for keyboard & screen-reader accessibility */}
            {errorEntries.length > 0 && (
              <div
                ref={errorSummaryRef}
                role="alert"
                tabIndex={-1}
                aria-labelledby="contact-error-summary-title"
                className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm space-y-1.5"
              >
                <p id="contact-error-summary-title" className="font-semibold flex items-center gap-2">
                  <FiAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Please fix the following before sending:
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm">
                  {errorEntries.map(([field, msg]) => (
                    <li key={field}>
                      <a href={`#contact-${field}`} className="underline hover:opacity-80">
                        {msg}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Honeypot */}
            <label htmlFor="x_bot_trap_field" className="sr-only">
              Do not fill this field
            </label>
            <input
              id="x_bot_trap_field"
              type="text"
              name="x_bot_trap_field"
              tabIndex={-1}
              autoComplete="new-password"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-1.5">
                  Full Name <span className="text-emerald-600 dark:text-emerald-400">*</span>
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Sanjeev Bhandari"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={
                    errors.name
                      ? "h-11 rounded-xl border-destructive focus-visible:ring-destructive/30"
                      : "h-11 rounded-xl bg-background border-input hover:border-emerald-500/40 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                  }
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="text-destructive text-xs flex items-center gap-1 mt-1.5 font-medium">
                    <FiAlertCircle aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-1.5">
                  Email Address <span className="text-emerald-600 dark:text-emerald-400">*</span>
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={
                    errors.email
                      ? "h-11 rounded-xl border-destructive focus-visible:ring-destructive/30"
                      : "h-11 rounded-xl bg-background border-input hover:border-emerald-500/40 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                  }
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="text-destructive text-xs flex items-center gap-1 mt-1.5 font-medium">
                    <FiAlertCircle aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-semibold text-foreground mb-1.5">
                Subject <span className="text-emerald-600 dark:text-emerald-400">*</span>
              </label>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="Research collaboration / ML opportunity"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className={
                  errors.subject
                    ? "h-11 rounded-xl border-destructive focus-visible:ring-destructive/30"
                    : "h-11 rounded-xl bg-background border-input hover:border-emerald-500/40 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                }
              />
              {errors.subject && (
                <p id="contact-subject-error" role="alert" className="text-destructive text-xs flex items-center gap-1 mt-1.5 font-medium">
                  <FiAlertCircle aria-hidden="true" /> {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-1.5">
                Message <span className="text-emerald-600 dark:text-emerald-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, team, or question..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`w-full px-3.5 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 resize-y transition-colors ${
                  errors.message
                    ? "border-destructive focus-visible:ring-destructive/30"
                    : "border-input hover:border-emerald-500/40 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20"
                }`}
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="text-destructive text-xs flex items-center gap-1 mt-1.5 font-medium">
                  <FiAlertCircle aria-hidden="true" /> {errors.message}
                </p>
              )}
            </div>

            <Button
              disabled={isPending}
              type="submit"
              size="lg"
              className="w-full"
            >
              {isPending ? (
                <>
                  <FiLoader className="animate-spin mr-2" aria-hidden="true" />
                  Sending...
                </>
              ) : success ? (
                <>
                  <FiCheck className="mr-2" aria-hidden="true" />
                  Sent Successfully
                </>
              ) : (
                <>
                  <FiSend className="mr-2" aria-hidden="true" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
