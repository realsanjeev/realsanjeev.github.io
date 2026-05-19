import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FiMail, FiSend, FiMapPin, FiLoader, FiAlertCircle, FiCheck } from "react-icons/fi";
import { SOCIAL_LINKS, type SocialLink } from "@/constants";

import { toast } from "@/components/ui/sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<FormData>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const lastSubmitRef = useRef<number>(0);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact-specific styling for social links (themed background with brand colors for visual weight)
  const contactSocialLinks: SocialLink[] = SOCIAL_LINKS.map(link => {
    let customStyle = "";
    if (link.name === "LinkedIn") {
      customStyle = "text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-500/10 border-blue-200 dark:border-blue-900/40 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-xs";
    } else if (link.name === "GitHub") {
      customStyle = "text-slate-800 dark:text-slate-200 bg-slate-500/5 dark:bg-slate-400/10 border-slate-200 dark:border-slate-800 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 hover:border-gray-900 dark:hover:border-white shadow-xs";
    } else if (link.name === "Twitter/X") {
      customStyle = "text-slate-800 dark:text-slate-200 bg-slate-500/5 dark:bg-slate-400/10 border-slate-200 dark:border-slate-800 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 hover:border-gray-900 dark:hover:border-white shadow-xs";
    } else if (link.name === "Medium") {
      customStyle = "text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-900/40 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-xs";
    } else {
      customStyle = "text-yellow-600 dark:text-yellow-400 bg-yellow-500/5 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-900/40 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 shadow-xs";
    }
    return {
      ...link,
      color: customStyle
    };
  });

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

  const isEmailJsConfigured = emailJsPublicKey && emailJsServiceId && emailJsTemplateId;

  useEffect(() => {
    const firstInput = formRef.current?.querySelector("input");
    firstInput?.focus();
  }, []);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2) newErrors.name = "Minimum 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!EMAIL_REGEX.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject required";
    else if (formData.subject.length < 3) newErrors.subject = "Minimum 3 characters";

    if (!formData.message.trim()) newErrors.message = "Message required";
    else if (formData.message.length < 10) newErrors.message = "Minimum 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      toast("Configuration Error", {
        description: "Email service is not configured. Please contact the site administrator."
      });
      return;
    }

    if (isSubmitting) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      toast("Please wait", {
        description: "You just sent a message."
      });
      return;
    }

    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)
      ?.value;

    if (honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Sanjeev Bhandari"
        },
        emailJsPublicKey
      );

      lastSubmitRef.current = now;

      triggerConfetti();
      setSuccess(true);

      toast("Message Sent", {
        description: "Thanks for reaching out!"
      });

      resetForm();

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast("Failed to send", {
        description: "Please try again later. Error: " + (err instanceof Error ? err.message : "Unknown error")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted text-foreground border-t border-border scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Let's{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-xl text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto px-2">
            I'm always interested in discussing new opportunities, research collaborations,
            or just chatting about the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT COLUMN */}

          <div className="space-y-8">

            <a
              href="mailto:realsanjeev2@gmail.com"
              title="Send an email to Sanjeev Bhandari (@realsanjeev)"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:bg-muted/50 transition-all duration-200"
            >
              <FiMail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="text-sm sm:text-base break-all text-foreground">realsanjeev2@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
              <FiMapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-foreground">Kathmandu, Nepal</span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {contactSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.ariaLabel}
                  className={`p-2 sm:p-3 md:p-4 bg-card rounded-xl border ${social.color} transition-all duration-200 hover:scale-105 flex items-center justify-center`}
                >
                  <social.icon className="mx-auto h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>

            {/* Areas of Interest */}
            <div className="p-4 sm:p-6 bg-card rounded-xl border border-border shadow-md">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Open to</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  Research collaborations in AI/ML
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  Speaking opportunities at conferences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  Consulting on ML projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  Open source contributions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                  Mentoring and knowledge sharing
                </li>
              </ul>
            </div>
          </div>


          {/* RIGHT COLUMN */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-4 p-4 sm:p-6 bg-card rounded-2xl border border-border shadow-lg"
          >

            {/* honeypot */}

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              <div>
                <Input
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500 focus-visible:ring-red-500" : "bg-background border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-foreground placeholder:text-muted-foreground focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-colors"}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500 focus-visible:ring-red-500" : "bg-background border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-foreground placeholder:text-muted-foreground focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-colors"}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                    <FiAlertCircle /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "border-red-500 focus-visible:ring-red-500" : "bg-background border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-foreground placeholder:text-muted-foreground focus-visible:ring-emerald-500 focus-visible:border-emerald-500 transition-colors"}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                  <FiAlertCircle /> {errors.subject}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={6}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-background border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none transition-colors ${errors.message ? "border-red-500 focus:ring-emerald-500 focus:border-emerald-500" : ""}`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs flex items-center gap-1 mt-1 font-medium">
                  <FiAlertCircle /> {errors.message}
                </p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 sm:py-6 text-sm sm:text-base rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  Sending...
                </>
              ) : success ? (
                <>
                  <FiCheck className="mr-2" />
                  Sent Successfully
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
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