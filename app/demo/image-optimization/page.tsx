import Image from "next/image"
import renePic from '../../../public/img/rene.png'
import styles from './ImageOptimization.module.css'
import Header from '@/app/ui/header';

export default function ImageOptimization() {
  return (
    <div className="">
      <Header title="Image Optimization" />
      <main className="flex flex-col gap-8">
        <div className={styles.imageWrapper}>
        <p>Picture of snowy Estonia from AirBaltic blog:</p>
        <Image
            src="https://blog.airbaltic.com/wp-content/uploads/2022/09/plan-a-perfect-winter-holiday-in-estonia.jpg"
            alt="Picture of snowy Estonia"
            width={1920}
            height={1080}
        />
        </div>
        <div className={styles.imageWrapper}>
        <p>Picture of my chihuahua from my public folder:</p>
        <Image
            src={renePic}
            alt="Picture of Rene"
        />
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
