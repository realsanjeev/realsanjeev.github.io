import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FiMail, FiSend, FiMapPin, FiLoader, FiAlertCircle, FiCheck } from "react-icons/fi";
import { SiHuggingface } from "react-icons/si";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaMedium } from "react-icons/fa6";

import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<FormData>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { toast } = useToast();

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

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/realsanjeev",
      icon: FaLinkedinIn,
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/realsanjeev",
      icon: FaGithub,
      color: "hover:bg-gray-900 hover:text-white hover:border-gray-900"
    },
    {
      name: "Twitter/X",
      url: "https://x.com/realsanjeev2",
      icon: FaXTwitter,
      color: "hover:bg-gray-900 hover:text-white hover:border-gray-900"
    },
    {
      name: "Medium",
      url: "https://medium.com/@sanjeev-bhandari",
      icon: FaMedium,
      color: "hover:bg-green-600 hover:text-white hover:border-green-600"
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/sanjeev-bhandari01",
      icon: SiHuggingface,
      color: "hover:bg-yellow-500 hover:text-white hover:border-yellow-500"
    }
  ];

  useEffect(() => {
    if (emailJsPublicKey) emailjs.init(emailJsPublicKey);

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

    if (isSubmitting) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      toast({
        title: "Please wait",
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
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Sanjeev Bhandari"
        },
        emailJsPublicKey
      );

      lastSubmitRef.current = now;

      triggerConfetti();
      setSuccess(true);

      toast({
        title: "Message Sent 🚀",
        description: "Thanks for reaching out!"
      });

      resetForm();

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Let's{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations,
            or just chatting about the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}

          <div className="space-y-8">

            <a
              href="mailto:075bei033.sanjeev@pcampus.edu.np"
              className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <FiMail className="w-5 h-5 text-emerald-400" />
              <span>075bei033.sanjeev@pcampus.edu.np</span>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <FiMapPin className="w-5 h-5 text-emerald-400" />
              <span>Kathmandu, Nepal</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 ${social.color} transition-all duration-200 hover:scale-105`}
                >
                  <social.icon className="mx-auto h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Areas of Interest */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="text-lg font-semibold mb-4">Open to</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Research collaborations in AI/ML
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Speaking opportunities at conferences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Consulting on ML projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Open source contributions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
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
            className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10"
          >

            {/* honeypot */}

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-4">

              <div>
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500 focus-visible:ring-red-500" : "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-emerald-500"}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500 focus-visible:ring-red-500" : "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-emerald-500"}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
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
                className={errors.subject ? "border-red-500 focus-visible:ring-red-500" : "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-emerald-500"}
              />
              {errors.subject && (
                <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
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
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? "border-red-500 focus-visible:ring-red-500" : "border-white/10 focus-visible:ring-emerald-500"} text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 resize-none`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <FiAlertCircle /> {errors.message}
                </p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-6 rounded-xl"
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