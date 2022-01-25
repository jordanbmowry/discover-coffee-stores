import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';

import coffeeStoresData from '../../data/coffee-stores.json';

import styles from '../../styles/coffee-stores.module.css';

export async function getStaticProps(staticProps) {
  const { params } = staticProps;

  return {
    props: {
      coffeeStore: coffeeStoresData.find(
        (store) => store.id.toString() === params.id //dynamicId
      ),
    },
  };
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map((store) => ({
    params: { id: store.id.toString() },
  }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export default function CoffeeStore(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, name, neighborhood, imgUrl } = props.coffeeStore;

  const handleUpvoteButtonClick = () => {
    console.log('handle upvote');
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href='/'>
              <a>Back to Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={clsx('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/places.svg' width='24' height='24' />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/nearMe.svg' width='24' height='24' />
            <p className={styles.text}>{neighborhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/star.svg' width='24' height='24' />
            <p className={styles.text}>{1}</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={handleUpvoteButtonClick}
          >
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
}
