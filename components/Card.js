import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card(props) {
  return (
    <Link href={props.href}>
      <a>
        <h2>{props.name}</h2>
        <Image alt='coffee shop' src={props.imgUrl} width={260} height={160} />
      </a>
    </Link>
  );
}
