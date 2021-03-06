import Head from 'next/head';
import { FC } from 'react';
import { Metas, Footer } from '../components/Structural';
import { Navbar } from '../components/ui';
import { MetaTags } from '../interfaces';

interface Props {
  children: JSX.Element;
  metaTags: MetaTags;
}

export const Main: FC<Props> = ({ metaTags, children }) => {
  return (
    <>
      <Head>
        <Metas metaTags={metaTags} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
