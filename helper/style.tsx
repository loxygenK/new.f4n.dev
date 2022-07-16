import React from "react";

export type MaybeStyledProps<P> = { className?: string } & P;
export type StyledProps<P> = { className: string } & P;
export type StylableFC<P = {}> = React.FC<MaybeStyledProps<P>>;
export type StyledFC<P = {}> = React.FC<StyledProps<P>>;

export const styled = <P,>(component: StyledFC<P>): StylableFC<P> => {
  const styler = ({ className, ...props }: MaybeStyledProps<P>) => {
    const Component = component;
    const newProps: StyledProps<P> = {
      ...(props as P),
      className: className ?? "",
    };

    return <Component {...newProps} />;
  };

  return styler;
};
