import React from 'react';
import { Suspense } from 'react';
import { PictureSkeleton } from '../skeletons';
import { GalleryItem } from '@/app/lib/definitions';
import GalleryPicture from './gallery-picture';


interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="max-w-[30rem] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <Suspense key={item.id} fallback={<PictureSkeleton />}>
            <GalleryPicture src={item.src} alt={item.alt} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

