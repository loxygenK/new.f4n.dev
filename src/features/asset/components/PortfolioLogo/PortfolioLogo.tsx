import "./PortfolioLogo.scss";

import LogoSvg from "~/assets/Logo.svg?component-solid";
import { JSX } from "solid-js";

export type PortfolioLogoProps = JSX.SvgSVGAttributes<SVGSVGElement>;

export const PortfolioLogo = (props: PortfolioLogoProps): JSX.Element => {
  return <LogoSvg class="portfolio-logo" {...props} />;
};
