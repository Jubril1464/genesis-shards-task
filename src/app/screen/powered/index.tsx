import Layer from "../../../assets/img/layer.png";
import Layer2 from "../../../assets/img/layer-2.png";
import Lock from "../../../assets/img/lock.png";
import { Container, FlexColumn, FlexRow, ImageWrapper } from "../../app-styles";
import "./index.scss";
import { Typography } from "@mui/material";
import Senital from "../../../assets/img/senital.png";
const Powered = () => {
  return (
    <div className="powered">
      <FlexRow
        gap="2"
        justifyContent="space-between"
        height="70"
        alignItems="flex-start"
        className="powered-container"
      >
        <div className="wrapper-container">
          <div className="wrapper-1">
            <img src={Layer2} alt="" width="100%" height="100%" />
          </div>
          <div className="wrapper-2">
            <img src={Layer} alt="" width="100%" height="100%" />
          </div>
        </div>
        <FlexColumn
          gap="2"
          alignItems="flex-start"
          width="30"
          className="powered-text-container"
        >
          <ImageWrapper height="4" width="3.5">
            <img src={Lock} alt="" width="100%" height="100%" />
          </ImageWrapper>
          <Typography variant="h2" color="#fff" className="powered-title">
            Powered by a robust app ecosystem
          </Typography>
          <FlexRow
            width="auto"
            height="auto"
            gap=".3"
            radius="20"
            bgColor="rgba(68, 68, 68, 0.25);"
            borderColor="#DB0968"
            rightPadding="1"
            bottomPadding=".5"
            leftPadding="1"
            topPadding=".5"
          >
            <Typography variant="body2" color="#fff">
              Platform Audited by{" "}
            </Typography>
            <img src={Senital} alt="" height="30px" width="30px" />
            <Typography variant="h4" color="#fff" textTransform="uppercase">
              Sentnl
            </Typography>
          </FlexRow>
          <Typography variant="body1" letterSpacing="1px" color="#fff">
            Access Symbiote incubation projects, top tier sales and NFT projects
            before they hit the market. Stake to unlock maximum benefits in the
            Symbiote ecosystem. Participate in token staking and liquidity
            farms. Monitor liquidity locks, distributions, and vesting
            schedules. Discover projects and vote for future launches, while
            earning token allocations and free token bribes.
          </Typography>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
export default Powered;
