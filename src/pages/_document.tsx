// _document.jsx
import { StyleProvider, createCache } from '@ant-design/cssinjs';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const ATTR_TOKEN = 'data-token-hash';
const ATTR_MARK = 'data-css-hash';

function extractStyle(cache: any) {
  const styleKeys = Array.from(cache.cache.keys()).filter((key: any) => key.startsWith('style%'));

  const styleText: any[] = [];
  styleKeys.forEach((key) => {
    const [styleStr, tokenKey, styleId] = cache.cache.get(key)[1];

    styleText.push(
      <style
        key={tokenKey + styleId}
        {...{ [ATTR_TOKEN]: tokenKey, [ATTR_MARK]: styleId }}
        dangerouslySetInnerHTML={{ __html: styleStr }}
      />,
    );
  });

  return styleText;
}

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const antdCache = createCache();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (AppComp: any) => (props: any) => (
          <StyleProvider cache={antdCache}>
            <AppComp {...props} />
          </StyleProvider>
        ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.styles.push(...extractStyle(antdCache));
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
