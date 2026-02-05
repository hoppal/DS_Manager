import React from 'react';
import { Card, CardContent } from '@oppal/ui';

export default function TypographyManager() {
    return (
        <Card>
            <CardContent className="divide-y divide-neutral-100">
                <div className="py-6 first:pt-0">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 2.25rem / Extrabold</p>
                    <h1 className="text-4xl font-extrabold text-neutral-900">Sphinx of black quartz, judge my vow.</h1>
                </div>
                <div className="py-6">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 1.5rem / Bold</p>
                    <h2 className="text-2xl font-bold text-neutral-900">Pack my box with five dozen liquor jugs.</h2>
                </div>
                <div className="py-6">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 1rem / Regular</p>
                    <p className="text-base text-neutral-700">
                        The quick brown fox jumps over the lazy dog. Designers use this text to see how their typography looks in real-world scenarios. It helps in assessing spacing, weight, and readability.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
