import Head from 'next/head';
import { FC } from 'react';
import { Metas, Footer } from '../components/Structural';
import { Navbar } from '../components/ui';
import { MetaTags } from '../interfaces';
import log from '../components/images/favicon.ico'
import styles from '../styles/Home.module.css'

interface Props {
  children: JSX.Element;
  metaTags: MetaTags;
}

export const Main: FC<Props> = ({ metaTags, children }) => {
  return (
    <div className={styles.main}>
      <Head>
        <Metas metaTags={metaTags} />
        <link rel="icon" href={'favicon.ico'} />
      </Head>
      {/* <header>
        <Navbar />
      </header> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
