import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicRoute() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      Hello {router.query.dynamic}
    </div>
  );
}
