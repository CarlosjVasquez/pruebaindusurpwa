import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext } from 'react-redux';
import '../styles/main.scss';
import { wrapper } from '../redux/store';

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Indusur</title>
      </Head>
      <main>
        <ReactReduxContext.Consumer>
          {({ store }: any) => (
            <PersistGate persistor={store.__persistor} loading={<div></div>}>
              <Component {...pageProps} />
            </PersistGate>
          )}
        </ReactReduxContext.Consumer>
      </main>
    </>
  );
}
export default wrapper.withRedux(MyApp);
