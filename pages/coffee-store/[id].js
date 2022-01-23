import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

export default function CoffeeStore() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <Link href='/coffee-store/dynamic'>
        <a>go to page dynamic</a>
      </Link>
    </div>
  );
}
