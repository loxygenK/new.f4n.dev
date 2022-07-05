import type { NextPage } from "next";

import styles from "~/pages/index.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="text-green-800">✨ It&apos;s working!</div>
      </main>
    </div>
  );
};

export default Home;
