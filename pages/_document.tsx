import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: App => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: Component => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>

          <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&family=Kdam+Thmor+Pro&family=League+Gothic&family=Lora&family=Montserrat:wght@100&family=Mukta:wght@200&family=Nunito:wght@200&family=Oswald:wght@200&family=Raleway:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
