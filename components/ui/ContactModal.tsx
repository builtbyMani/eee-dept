"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { settleSpring, tactileSpring } from "@/components/motion/SpringPhysics";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function openContactModal(inquiryType?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { inquiryType } })
    );
  }
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("Student Project Team Slot");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpen = useCallback((event: Event) => {
    const customEvent = event as CustomEvent<{ inquiryType?: string }>;
    if (customEvent.detail?.inquiryType) {
      setInquiryType(customEvent.detail.inquiryType);
    }
    setIsSuccess(false);
    setErrors({});
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrors({});
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("open-contact-modal", handleOpen);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleOpen, handleClose]);

  // Lock scroll while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = "Please provide your full name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid academic or professional email.";
    }
    if (!message.trim()) {
      newErrors.message = "Message details cannot be empty.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate telemetry transmission to department backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#181113]/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={settleSpring}
            className="relative w-full max-w-xl bg-[#F5EBD0] border border-[#D9CAA8] shadow-[0_20px_60px_-15px_rgba(70,25,35,0.25)] p-6 sm:p-8 z-10 my-auto text-left rounded-2xl overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7F011F] via-[#9B1832] to-[#7F011F]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-[#6E5D61] hover:text-[#181113] transition-colors p-2 cursor-pointer font-mono text-base"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#7F011F]/15 border border-[#7F011F] flex items-center justify-center text-[#7F011F] text-2xl mb-5 shadow-sm font-bold">
                  ✓
                </div>
                <div className="mono-label text-[#7F011F] justify-center mb-2 font-semibold">
                  TRANSMISSION RECORDED
                </div>
                <h3
                  id="contact-modal-title"
                  className="text-2xl sm:text-3xl font-semibold text-[#181113] font-heading tracking-tight mb-3"
                >
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#3E3033] max-w-md mx-auto leading-relaxed mb-8 font-normal">
                  Your message has been logged into the Department of EEE telemetry queue.
                  Faculty coordinators and the student machine leads will review your inquiry
                  and respond to your email.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#7F011F] hover:bg-[#9B1832] text-white font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md rounded-lg"
                >
                  Return to Department Portal
                </button>
              </div>
            ) : (
              <div>
                <div className="mono-label text-[#7F011F] mb-2 font-semibold">
                  TELEMETRY DISPATCH // INQUIRY
                </div>
                <h3
                  id="contact-modal-title"
                  className="text-2xl sm:text-3xl font-semibold text-[#181113] font-heading tracking-tight mb-2"
                >
                  Connect With The Department
                </h3>
                <p className="text-xs sm:text-sm text-[#3E3033] mb-6 leading-relaxed font-normal">
                  Apply for student engineering openings (Formula Student, Aëtos, AV, Rover),
                  propose technical collaboration, or inquire regarding lab research.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#554347] mb-1.5 font-medium">
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#EAE0C5]/80 border border-[#D9CAA8] focus:border-[#7F011F] text-[#181113] font-mono text-xs px-3.5 py-2.5 outline-none transition-colors cursor-pointer rounded-lg"
                    >
                      <option value="Student Project Team Slot">
                        Student Team Slot Application (Formula EV / Drone / AV / Rover)
                      </option>
                      <option value="Industry & Alumni Technical Collaboration">
                        Industry &amp; Alumni Technical Collaboration
                      </option>
                      <option value="Lab Equipment Sponsorship & Grant">
                        Lab Equipment Sponsorship &amp; Research Grant
                      </option>
                      <option value="General Academic & Department Inquiries">
                        General Academic &amp; Department Inquiries
                      </option>
                    </select>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#554347] mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Aditi Sharma"
                      className={`w-full bg-[#EAE0C5]/80 border ${
                        errors.name ? "border-[#7F011F]" : "border-[#D9CAA8]"
                      } focus:border-[#7F011F] text-[#181113] placeholder:text-[#8E7E82] font-mono text-xs px-3.5 py-2.5 outline-none transition-colors rounded-lg`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] font-mono text-[#7F011F] flex items-center gap-1 font-medium">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#554347] mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="e.g. student@jntuh.ac.in"
                      className={`w-full bg-[#EAE0C5]/80 border ${
                        errors.email ? "border-[#7F011F]" : "border-[#D9CAA8]"
                      } focus:border-[#7F011F] text-[#181113] placeholder:text-[#8E7E82] font-mono text-xs px-3.5 py-2.5 outline-none transition-colors rounded-lg`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] font-mono text-[#7F011F] flex items-center gap-1 font-medium">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#554347] mb-1.5 font-medium">
                      Technical Focus / Message *
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Summarize your engineering background, project interest, or proposal..."
                      className={`w-full bg-[#EAE0C5]/80 border ${
                        errors.message ? "border-[#7F011F]" : "border-[#D9CAA8]"
                      } focus:border-[#7F011F] text-[#181113] placeholder:text-[#8E7E82] font-mono text-xs px-3.5 py-2.5 outline-none transition-colors resize-none rounded-lg`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] font-mono text-[#7F011F] flex items-center gap-1 font-medium">
                        <span>⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#6E5D61] hover:text-[#181113] transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={tactileSpring}
                      className="px-6 py-2.5 bg-[#7F011F] hover:bg-[#9B1832] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_4px_16px_rgba(127,1,31,0.25)] disabled:opacity-50 cursor-pointer flex items-center gap-2 rounded-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Routing...</span>
                        </>
                      ) : (
                        <span>Transmit Inquiry →</span>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
