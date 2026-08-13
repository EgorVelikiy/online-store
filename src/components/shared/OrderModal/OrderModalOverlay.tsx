'use client';

import { ReactNode } from 'react';

type ModalOverlayProps = {
  children: ReactNode;
  onClose: () => void;
};

export function ModalOverlay({
  children,
  onClose,
}: ModalOverlayProps) {
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
    >
        {children}
    </div>
  );
}