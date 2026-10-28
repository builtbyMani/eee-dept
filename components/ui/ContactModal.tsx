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
            className="fixed inset-0 bg-[#090909]/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={settleSpring}
            className="relative w-full max-w-xl bg-[#120A0C] border border-[#7F011F]/50 shadow-[0_20px_60px_-15px_rgba(127,1,31,0.5)] p-6 sm:p-8 z-10 my-auto text-left"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7F011F] via-[#FF4D6D] to-[#7F011F]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-[#A0828A] hover:text-white transition-colors p-2 cursor-pointer font-mono text-base"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#7F011F]/20 border border-[#7F011F] flex items-center justify-center text-[#FF4D6D] text-2xl mb-5 shadow-[0_0_30px_rgba(127,1,31,0.4)]">
                  ✓
                </div>
                <div className="mono-label text-[#FF4D6D] justify-center mb-2">
                  TRANSMISSION RECORDED
                </div>
                <h3
                  id="contact-modal-title"
                  className="text-2xl sm:text-3xl font-semibold text-white font-heading tracking-tight mb-3"
                >
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#E8DCE0] max-w-md mx-auto leading-relaxed mb-8">
                  Your message has been logged into the Department of EEE telemetry queue.
                  Faculty coordinators and the student machine leads will review your inquiry
                  and respond to your email.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_20px_rgba(127,1,31,0.4)]"
                >
                  Return to Department Portal
                </button>
              </div>
            ) : (
              <div>
                <div className="mono-label text-[#FF4D6D] mb-2 font-medium">
                  TELEMETRY DISPATCH // INQUIRY
                </div>
                <h3
                  id="contact-modal-title"
                  className="text-2xl sm:text-3xl font-semibold text-white font-heading tracking-tight mb-2"
                >
                  Connect With The Department
                </h3>
                <p className="text-xs sm:text-sm text-[#E8DCE0] mb-6 leading-relaxed">
                  Apply for student engineering openings (Formula Student, Aëtos, AV, Rover),
                  propose technical collaboration, or inquire regarding lab research.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#E2B6BD] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#1A0E12] border border-[#2D141A] focus:border-[#7F011F] text-white font-mono text-xs px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
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
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#E2B6BD] mb-1.5">
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
                      className={`w-full bg-[#1A0E12] border ${
                        errors.name ? "border-[#FF4D6D]" : "border-[#2D141A]"
                      } focus:border-[#7F011F] text-white font-mono text-xs px-3.5 py-2.5 outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] font-mono text-[#FF4D6D] flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#E2B6BD] mb-1.5">
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
                      className={`w-full bg-[#1A0E12] border ${
                        errors.email ? "border-[#FF4D6D]" : "border-[#2D141A]"
                      } focus:border-[#7F011F] text-white font-mono text-xs px-3.5 py-2.5 outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] font-mono text-[#FF4D6D] flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#E2B6BD] mb-1.5">
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
                      className={`w-full bg-[#1A0E12] border ${
                        errors.message ? "border-[#FF4D6D]" : "border-[#2D141A]"
                      } focus:border-[#7F011F] text-white font-mono text-xs px-3.5 py-2.5 outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] font-mono text-[#FF4D6D] flex items-center gap-1">
                        <span>⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#A0828A] hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={tactileSpring}
                      className="px-6 py-2.5 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(127,1,31,0.35)] disabled:opacity-50 cursor-pointer flex items-center gap-2"
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
