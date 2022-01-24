import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';
import clsx from 'clsx';

export default function Card(props) {
  console.log(styles);
  return (
    <Link href={props.href}>
      <a className={styles.cardLink}>
        <div className={clsx('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              alt='coffee shop'
              src={props.imgUrl}
              width={260}
              height={160}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
