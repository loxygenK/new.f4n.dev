import type { NextPage } from "next";
import { ChevronRight, GitHub, Mail, Twitter, User } from "react-feather";

import { IconButton } from "~/component/atoms/IconButton";
import styles from "~/pages/index.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className="text-green-800">✨ It&apos;s working!</div>
        <span className={styles.button_list}>
          <IconButton icon={Twitter}>loxygen_k</IconButton>
          <IconButton icon={GitHub}>loxygenK</IconButton>
          <IconButton icon={Mail}>me@f4n.dev</IconButton>
        </span>
      </main>
    </div>
  );
};

export default Home;
