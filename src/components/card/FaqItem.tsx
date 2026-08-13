'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-surface transition-colors duration-300',
        isOpen ? 'border-brand-green' : 'border-border',
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-ink">{question}</span>

        <ChevronDown
          className={cn(
            'size-5 transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 py-5">
            <p className="leading-7 text-muted">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}