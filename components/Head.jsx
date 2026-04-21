import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Diego Bravo's Portfolio — ML Engineer & Researcher."
      />
      <meta
        name="keywords"
        content="diego bravo, machine learning engineer, computer vision, medical imaging, deep learning, pytorch, edge ai, portfolio"
      />
      <meta property="og:title" content="Diego Bravo's Portfolio" />
      <meta
        property="og:description"
        content="Diego Bravo's Portfolio — ML Engineer & Researcher."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://diegobravoh.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Diego Bravo',
};
