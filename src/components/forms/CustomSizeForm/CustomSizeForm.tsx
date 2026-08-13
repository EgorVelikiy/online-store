'use client';

import { useState, type FormEvent } from 'react';
import { CustomSizeFormField } from './CustomSizeFormField';
import { CustomBoxData } from '@/types/order';

export type SizeFields = {
    length: string;
    width: string;
    height: string;
    cover: string;
};

type CoverType = CustomBoxData['cover'];

const initialValues: CustomBoxData = {
    length: '',
    width: '',
    height: '',
    cover: '',
};

type CustomSizeFormProps = {
    onSubmit: (values: CustomBoxData) => void;
};

export default function CustomSizeForm({
    onSubmit,
}: CustomSizeFormProps) {
    const [values, setValues] = useState<CustomBoxData>(initialValues);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (
            !values.length ||
            !values.width ||
            !values.height
        ) {
            return;
        }

        onSubmit(values);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border-t border-border bg-surface-muted/50 p-6 sm:p-8 lg:border-t-0 lg:border-l"
            noValidate
        >
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <CustomSizeFormField
                    id="box-length"
                    label="Длина"
                    value={values.length}
                    onChange={(length) => setValues((prev) => ({ ...prev, length }))}
                />
                <CustomSizeFormField
                    id="box-width"
                    label="Ширина"
                    value={values.width}
                    onChange={(width) => setValues((prev) => ({ ...prev, width }))}
                />
                <CustomSizeFormField
                    id="box-height"
                    label="Высота"
                    value={values.height}
                    onChange={(height) => setValues((prev) => ({ ...prev, height }))}
                />

                <label htmlFor='box-cover' className='block'>
                    <span className="mb-1.5 block text-sm font-medium text-ink">Тип крышки</span>
                    <select
                        id="box-cover"
                        value={values.cover}
                        onChange={(event) =>
                            setValues((prev) => ({
                                ...prev,
                                cover: event.target.value as CoverType,
                            }))
                        }
                        className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-[box-shadow,border-color] placeholder:text-muted/70 focus:border-brand-green focus:shadow-[0_0_0_3px_var(--ring)]"
                    >

                        <option value="">
                            Выберите тип крышки
                        </option>

                        <option value="hinged">
                            Откидная
                        </option>

                        <option value="separate">
                            Отдельная
                        </option>

                        <option value="window">
                            С окном
                        </option>
                    </select>
                </label>
            </div>


            <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
                Подобрать коробку
            </button>
        </form >
    )
}
