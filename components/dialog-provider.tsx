"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Modal } from "./modal";
import { ContactForm, RequestDemoForm } from "./forms";

type DialogKind = "demo" | "contact" | null;

interface DialogContextValue {
  openDemo: () => void;
  openContact: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [kind, setKind] = useState<DialogKind>(null);

  const openDemo = useCallback(() => setKind("demo"), []);
  const openContact = useCallback(() => setKind("contact"), []);
  const close = useCallback(() => setKind(null), []);

  return (
    <DialogContext.Provider value={{ openDemo, openContact }}>
      {children}
      <Modal
        open={kind === "demo"}
        onClose={close}
        title="Request a demo"
        subtitle="See the Grevya ecosystem in action."
      >
        <RequestDemoForm />
      </Modal>
      <Modal
        open={kind === "contact"}
        onClose={close}
        title="Contact us"
        subtitle="We'd love to hear from you."
      >
        <ContactForm />
      </Modal>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within DialogProvider");
  return ctx;
}
