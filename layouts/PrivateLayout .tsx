
import { Loading } from '@components/AtomicDesign/Atoms/Loading';
import Layout from '@components/Layout';
import { useSession, signIn } from 'next-auth/react';

interface PrivateLayoutProps {
  children: React.ReactNode;
  rejected: boolean;
}

const PrivateLayout = ({ children, rejected }: PrivateLayoutProps) => {
  const { data: session, status } = useSession();
  if (status === 'loading') return <Loading open />;

  // if (!session) {
  //   signIn('auth0');
  //   return <Loading open />;
  // }

  return <Layout>{children}</Layout>;

  // return <div>You are not authorized to view this site.</div>;
  // return <Layout>{children}</Layout>;
};

export { PrivateLayout };