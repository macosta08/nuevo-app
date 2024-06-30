import { Home, LineChart, Package2, Users2 } from 'lucide-react';
import { LinkItem, LinkItemCard } from 'types';

export const links: LinkItem[] = [
  { name: 'Inicio', link: '/', icon: <Home className='h-5 w-5' /> },
  {
    name: 'Ingresos y egresos',
    link: '/ingresos-egresos',
    icon: <LineChart className='h-5 w-5' />,
  },
  { name: 'Usuarios', link: '/usuarios', icon: <Users2 className='h-5 w-5' /> },
  {
    name: 'Graficas',
    link: '/graficas',
    icon: <Package2 className='h-5 w-5' />,
  },
];

export const linksCards: LinkItemCard[] = [
  {
    name: 'Ingresos y egresos',
    link: '/ingresos-egresos',
    description:
      'Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.',
    icon: <LineChart className='h-5 w-5' />,
  },
  {
    name: 'Usuarios',
    link: '/usuarios',
    description:
      'Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.',
    icon: <Users2 className='h-5 w-5' />,
  },
  {
    name: 'Graficas',
    link: '/graficas',
    description:
      'Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.',
    icon: <Package2 className='h-5 w-5' />,
  },
];
