import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import coffeeStoresData from '../../data/coffee-stores.json';
import Head from 'next/head';

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

  const { address, name, neighborhood } = props.coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighborhood}</p>
    </div>
  );
}
