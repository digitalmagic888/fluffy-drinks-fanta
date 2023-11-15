import React from 'react';
import Head from 'next/head';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
      <link rel="icon" href="./favicon.ico" />
        <title>Fluffy Drinks Fanta</title>
      </Head>
      <header className={styles.header}>
        <h1>🍊Fluffy Drinks Fanta🍊</h1>
        <div className={styles.imageContainer}>
          <img src="./fluffy-coin-logo.jpg" alt="Fluffy Coin Logo" />
          <div className={styles.imageText}>
            <p>Total Supply: 4.20B</p>
            <p>6% tax tokenomics</p>
            <p>3% HOA Burn</p>
            <p>2% LP</p>
            <p>1% HOA Rewards</p>
            <a href="https://app.pulsex.com/swap?outputCurrency=0x01287409d65Afb751261e5A7AB8B286770753734&chain=pulsechain" className={styles.btn}>Buy $FLUFFY</a>
          </div>
        </div>
      </header>
      <main>
        <div id="dexscreener-embed">
          <iframe src="https://dexscreener.com/pulsechain/0x4e3b22eD9D630353888A830EA2bC25c9419Bd03A?embed=1&info=0"></iframe>
        </div>
      </main>
      <footer>
        <p>Contract Address: 0x01287409d65Afb751261e5A7AB8B286770753734</p>
      </footer>
    </div>
  );
};

export default Home;
