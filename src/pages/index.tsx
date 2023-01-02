import { PortfolioLogo } from "~/features/asset/components/PortfolioLogo";
import { NavigateButton } from "~/features/ui/components/NavigateButton";
import { Page } from "~/features/ui/components/Page";

import styles from "./index.module.scss";

const shortIntroductionSet = [
  "Fluffy Front End Engineer, loving to make things more convenient",
  "Fluffy Front End Engineer, wishing to be full stack engineer",
  "Fluffy Front End Engineer, in study slamp",
  "Fluffy Front End Engineer, also Rustacean Apprentice",
  "Fluffy Front End Engineer, wanting to be fluffy (IRL)",
];

const TopPage = () => {
  const shortIntroduction =
    shortIntroductionSet[
      Math.floor(Math.random() * shortIntroductionSet.length)
    ];

  return (
    <Page>
      <div class={styles.titleSection}>
        <PortfolioLogo class={styles.logo} />
        <p class={styles.shortIntroduction}>{shortIntroduction}</p>
      </div>
      <nav class={styles.buttonList}>
        <ul class={styles.buttonListPrimary}>
          <li>
            <NavigateButton href="/about">About me</NavigateButton>
          </li>
          <li>
            <NavigateButton href="/works">Things I've created</NavigateButton>
          </li>
          <li>
            <NavigateButton href="/about">What can I do</NavigateButton>
          </li>
          <li>
            <NavigateButton href="/about">What I've done</NavigateButton>
          </li>
        </ul>
        <div class={styles.blogButton}>
          <NavigateButton href="/blog">Blogs</NavigateButton>
        </div>
      </nav>
    </Page>
  );
};

export default TopPage;
