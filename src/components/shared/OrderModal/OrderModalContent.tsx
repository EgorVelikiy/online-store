'use client';

import { ReactNode } from 'react';
import { X } from 'lucide-react';

type ModalContentProps = {
  children: ReactNode;
  onClose: () => void;
};

export function ModalContent({
  children,
  onClose,
}: ModalContentProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(event) => event.stopPropagation()}
      className="
        relative
        w-full
        max-w-lg
        rounded-3xl
        bg-surface
        p-8
        shadow-2xl
        animate-in
        fade-in
        zoom-in-95
        duration-200
      "
    >
      <button
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
        className="
          absolute
          right-5
          top-5
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          text-muted
          transition
          hover:bg-surface-muted
          hover:text-ink
        "
      >
        <X className="h-5 w-5" />
      </button>
      {children}
    </div>
  );
}