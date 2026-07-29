'use client';

import { useState, type FormEvent } from 'react';
import { CustomSizeFormField } from './CustomSizeFormField';

type SizeFields = {
    length: string;
    width: string;
    height: string;
};

const initialValues: SizeFields = {
    length: '',
    width: '',
    height: '',
};

export default function CustomSizeForm() {
    const [values, setValues] = useState<SizeFields>(initialValues);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
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
            </div>

            <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
                Подобрать коробку
            </button>
        </form>
    )
}
