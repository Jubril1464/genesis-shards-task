import {
  CustomContainer,
  FlexColumn,
  FlexRow,
  ImageWrapper,
} from "../../app-styles";
import { Typography, Button, Stack, Card } from "@mui/material";
import One from "../../../assets/img/1.png";
import Two from "../../../assets/img/2.png";
import Three from "../../../assets/img/3.png";
import "./index.scss";

const Work: React.FC = () => {
  return (
    <CustomContainer
      topMargin="5"
      className="work"
      leftPadding="10"
      rightPadding="10"
    >
      <FlexColumn
        className="work-container"
        bgColor="rgba(0,0,0,.7)"
        topMargin="13"
        justifyContent="flex-start"
        topPadding="2"
        bottomPadding="2"
      >
        <Typography variant="h3" className="work-heading" align="center">
          How We Work
        </Typography>
        <FlexRow gap="5" topMargin="3" className="work-card-container">
          <FlexColumn className="work-card" alignItems="flex-start" gap="2">
            <ImageWrapper height="9" width="5">
              <img src={One} alt="" />
            </ImageWrapper>
            <Typography
              variant="h2"
              className="work-card-title"
              textTransform="uppercase"
              align="left"
            >
              Stake
            </Typography>
            <Typography variant="h4" className="work-card-text" align="left">
              Stake GS to unleash the ecosystem's full potential
            </Typography>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Exclusive IDOs
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
                Stake a minimum of 2500 GS tokens to get access to exclusive
                IDOs - the higher you stake, the higher your allocation
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Earn High Reward
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
                Get disproportionate gains by increasing your staked amount and
                lock-in duration
              </Typography>
            </div>
            <Button variant="outlined" className="work-card-btn">
              Explore
            </Button>
          </FlexColumn>
          <FlexColumn className="work-card" alignItems="flex-start" gap="2">
            <ImageWrapper height="9" width="5">
              <img src={Two} alt="" />
            </ImageWrapper>
            <Typography
              variant="h2"
              className="work-card-title"
              textTransform="uppercase"
              align="left"
            >
              VOTE DAO
            </Typography>
            <Typography variant="h4" className="work-card-text" align="left">
              Vote for your favourite projects to get them launched on Symbiote
            </Typography>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Vote
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
             
                Vote for a single project among a cohort of projects
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Win
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
                If your chosen project wins, you win a guaranteed allocation in
                its IDO
              </Typography>
            </div>
            <Button variant="outlined" className="work-card-btn">
              Explore
            </Button>
          </FlexColumn>
          <FlexColumn className="work-card" alignItems="flex-start" gap="2">
            <ImageWrapper height="9" width="5">
              <img src={Three} alt="" />
            </ImageWrapper>
            <Typography
              variant="h2"
              className="work-card-title"
              textTransform="uppercase"
              align="left"
            >
              Launchpad
            </Typography>
            <Typography variant="h4" className="work-card-text" align="left">
              Participate in the latest IDOs and earn exponential returns
            </Typography>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Vote
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
                Vote in the Vote DAO section for your favourite projects
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="work-card-text" align="left">
                Participate
              </Typography>
              <Typography variant="h6" className="work-card-text" align="left">
                Win guaranteed allocations for the projects you voted
              </Typography>
            </div>
            <Button variant="outlined" className="work-card-btn">
              Explore
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexColumn>
    </CustomContainer>
  );
};
export default Work;
