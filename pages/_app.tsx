import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import useApolloClient from 'hooks/useApolloClient';
import Loading from '@components/Loading';
import 'nprogress/nprogress.css';
import 'styles/globals.scss';
import { NextComponentType, NextPageContext } from 'next';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from '@components/PrivateRoute';
import { TooltipProvider } from '@components/ui/tooltip';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { session, page, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>{`Instituto Gastroclínico | ${page?.name}`}</title>
        <link rel='shortcut icon' href='/public/img/logos/logoCirculo.svg' />
        <meta name='title' content='' />
        <meta name='description' content='' />

        <meta property='og:type' content='' />
        <meta property='og:url' content='' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='' />

        <meta property='twitter:card' content='' />
        <meta property='twitter:url' content='' />
        <meta property='twitter:title' content='' />
        <meta property='twitter:description' content='' />
        <meta property='twitter:image' content='' />
      </Head>
      <App Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}

function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}) {
  const { client } = useApolloClient();
  if (!client) return <Loading open />;
  return (
    <ApolloProvider client={client}>
      <TooltipProvider>
        <PrivateRoute
          rejected={pageProps?.rejected ?? false}
          isPublic={pageProps?.isPublic ?? false}
        >
          <Component {...pageProps} />
        </PrivateRoute>

        <ToastContainer />
      </TooltipProvider>
    </ApolloProvider>
  );
}

export default MyApp;
