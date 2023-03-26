import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8"/>
      <title>Platstack Challenge</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" type="image/png" href={'/images/favicon.png'} />
    </Head>
    );
};

export default Meta;
