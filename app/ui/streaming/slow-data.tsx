import { use } from 'react';
import { quotePromise } from '@/app/lib/data';
import { Quote } from '@/app/lib/definitions';

export default function SlowData() {
  const quote = use(quotePromise) as Quote;

  return (
    <div className="max-w-md mx-auto bg-blue-100 rounded-xl overflow-hidden md:max-w-2xl m-4 p-6">
      <div className="text-center">
        <p className="text-gray-600 italic text-lg mb-4">
          &ldquo;{quote.quote}&rdquo;
        </p>
        <p className="text-gray-800 font-semibold">
          - {quote.author}
        </p>
      </div>
    </div>
  );
}
