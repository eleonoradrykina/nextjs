'use client'

import Header from '@/app/ui/header';

export default function Page() {
    return <div>
        <Header title="Demo for Routing" />
        <p>
        <button
            onClick={() => {
                throw new Error("This is a deliberately thrown error!");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
            Throw Error
        </button>
        </p>
    </div>
}