import Image from "next/image";

import { classNames } from "~/helper/className";
import { StylableFC, styled } from "~/helper/style";

import styles from "./avatar.module.scss";

export const Avatar: StylableFC = styled(({ className }) => {
  return (
    <div className={classNames(styles.image_container, className)}>
      <Image
        src="/img/avatar.png"
        alt="Flisan's avatar"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
});
