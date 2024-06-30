import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { Button } from '@components/ui/button';
import { LinkItemCard } from 'types';

function CardComponent({ info }: { info: LinkItemCard }) {
  return (
    <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
      <CardHeader className='pb-3'>
        <CardTitle>{info.name}</CardTitle>
        <CardDescription className='max-w-lg text-balance leading-relaxed'>
          {info.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={info.link}>
          <Button>Ver</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
