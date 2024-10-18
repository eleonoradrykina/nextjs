import { Suspense } from 'react';
import { SlowDataSkeleton, GallerySkeleton } from '@/app/ui/skeletons';
import SlowData from '@/app/ui/streaming/slow-data';
import Gallery from '@/app/ui/streaming/gallery';
import { GalleryItem } from '@/app/lib/definitions';
import Header from '@/app/ui/header';

const items: GalleryItem[] = [
  { id: 1, src: '/img/1.png', alt: 'Korgi or loaf' },
  { id: 2, src: '/img/2.png', alt: 'Korgi or loaf' },
  { id: 3, src: '/img/3.png', alt: 'Korgi or loaf' },
  { id: 4, src: '/img/4.png', alt: 'Korgi or loaf' },
  { id: 5, src: '/img/5.png', alt: 'Korgi or loaf' },
  { id: 6, src: '/img/6.png', alt: 'Korgi or loaf' },
  { id: 7, src: '/img/7.png', alt: 'Korgi or loaf' },
  { id: 8, src: '/img/8.png', alt: 'Korgi or loaf' },
  { id: 9, src: '/img/9.png', alt: 'Korgi or loaf' },
  { id: 10, src: '/img/10.png', alt: 'Korgi or loaf' },
  { id: 11, src: '/img/11.png', alt: 'Korgi or loaf' },
  { id: 12, src: '/img/12.png', alt: 'Korgi or loaf' },
  { id: 13, src: '/img/13.png', alt: 'Korgi or loaf' },
  { id: 14, src: '/img/14.png', alt: 'Korgi or loaf' },
  { id: 15, src: '/img/15.png', alt: 'Korgi or loaf' },
  { id: 16, src: '/img/16.png', alt: 'Korgi or loaf' },
];

export default function Streaming() {
  return (
        <div className="container mx-auto">
        <Header title="Streaming Demo" />
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">Quote of the day</h2>
                <Suspense fallback={<SlowDataSkeleton />}>
                <SlowData />
                </Suspense>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
                {/* New widget placeholder */}
                <h2 className="text-xl font-semibold mb-2">New Widget</h2>
                <p>Content for the new widget goes here.</p>
            </div>
            </div>
            <div className="md:w-2/3 bg-white rounded-lg shadow-md p-4">
             <h2 className="text-xl font-semibold mb-2">Corgie or a loaf?</h2>
            <Suspense fallback={<GallerySkeleton />}>
                <Gallery items={items} />
            </Suspense>
            </div>
        </div>
        </div>
  );
}
