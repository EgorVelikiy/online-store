import CustomSizeForm from '@/components/forms/CustomSizeForm/CustomSizeForm';

export function CustomSizeSection() {
  return (
    <section
      className="animate-fade-up [animation-delay:200ms] overflow-hidden rounded-3xl border border-border bg-surface"
      aria-labelledby="custom-size-heading"
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(47,93,50,0.1), transparent 45%), radial-gradient(circle at 100% 100%, rgba(198,40,40,0.08), transparent 40%)',
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-brown uppercase">
              Индивидуальный размер
            </p>
            <h2
              id="custom-size-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Подбор коробки под ваши размеры
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Укажите длину, ширину и высоту — подберём подходящий вариант. Отправка формы
              появится позже.
            </p>
          </div>
        </div>

        <CustomSizeForm />
      </div>
    </section>
  );
}

