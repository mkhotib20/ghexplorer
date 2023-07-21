import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import apolloClient from '@/utils/apollo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider theme={{ token: { colorPrimary: '#444' } }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </ApolloProvider>
  );
}
