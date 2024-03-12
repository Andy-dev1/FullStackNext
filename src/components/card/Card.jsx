import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vel
          officia quas, culpa dicta reprehenderit. Dolor vel eveniet iure,
          possimus nihil modi ipsum voluptates quidem, aspernatur optio rem
          fugit accusamus?
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
