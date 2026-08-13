import { FAQItem } from "@/components/card/FaqItem";
import { faq } from "@/constants/faq";

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold text-ink">
          Часто задаваемые вопросы
        </h1>

        <p className="mt-3 max-w-2xl text-muted">
          Здесь собраны ответы на самые популярные вопросы наших покупателей.
          Если вы не нашли нужную информацию, свяжитесь с нами любым удобным
          способом.
        </p>
      </header>

      <div className="space-y-4">
        {faq.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
