'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent } from './OrderModalContent';
import { ModalOverlay } from './OrderModalOverlay';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Modal({
    open,
    onClose,
    children,
}: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const { overflow } = document.body.style;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = overflow;
        };
    }, [open]);

    if (!mounted || !open) {
        return null;
    }

    return createPortal(
        <ModalOverlay onClose={onClose}>
            <ModalContent onClose={onClose}>
                {children}
            </ModalContent>
        </ModalOverlay>,
        document.body,
    );
}