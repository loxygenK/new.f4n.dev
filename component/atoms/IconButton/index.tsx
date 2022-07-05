import React from "react";

import { addClass, removeClass } from "~/helper/className";

import { ClassNameAcceptable, Icon } from "../Icon";
import styles from "./index.module.scss";

type Props = {
  icon: ClassNameAcceptable;
  children: React.ReactNode;
  className?: string;
};
export const IconButton: React.FC<Props> = ({ icon, children, className }) => {
  const [timeOutInstance, setTimeOutInstance] = React.useState<NodeJS.Timeout>();
  const [childrenInitialWidth, setChildrenInitialWidth] = React.useState<number>(0);
  const [ready, setReady] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const childrenRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const rect = childrenRef.current?.getBoundingClientRect();
    if(rect === undefined) {
      return;
    }

    setChildrenInitialWidth(rect.width);
    setReady(true);
  }, [childrenRef]);

  const onHovered = () => {
    const button = buttonRef.current;
    if(button === null) {
      return;
    }

    addClass(button, styles.onHover);
  }

  const onUnhovered = () => {
    const button = buttonRef.current;
    if(button === null) {
      return;
    }

    const timeOut = setTimeout(() => {
      removeClass(button, styles.onHover);
    }, 250);

    setTimeOutInstance(timeOut);
  }

  React.useEffect(() => () => {
    clearTimeout(timeOutInstance);
  }, [timeOutInstance]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={onHovered}
      onMouseLeave={onUnhovered}
      className={`${styles.button} ${className}`}
    >
      <Icon provider={icon} className={styles.icon} />
      <div style={{ marginRight: ready ? undefined : "-100vw", overflow: "hidden" }}>
        <div
          ref={childrenRef}
          className={styles.description}
          style={{
            marginRight: `-${childrenInitialWidth}px`,
            transition: ready ? "all 0.5s" : undefined
          }}
        >
          {children}
        </div>
      </div>
    </button>
  );
};
