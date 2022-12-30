import { PortfolioLogo } from "~/features/asset/components/PortfolioLogo";
import { Page } from "~/features/ui/components/Page";

const TopPage = () => {
  return (
    <Page title="My first Solid Project">
      <p>Hello, world!</p>
      <PortfolioLogo style={{ width: "33vw", height: "fit-content" }} />
    </Page>
  );
};

export default TopPage;
