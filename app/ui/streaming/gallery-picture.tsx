import Image from "next/image";

interface GalleryPictureProps {
    src: string;
    alt: string;
}

export default function GalleryPicture({ src, alt }: GalleryPictureProps) {
    return (
        <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
            />
        </div>
    )
}