import {
  CustomContainer,
  FlexColumn,
  FlexRow,
  ImageWrapper,
} from "../../app-styles";
import { SlRocket } from "react-icons/sl";
import Fifty from "../../../assets/img/50.png";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { HiOutlineLink } from "react-icons/hi";
import Polygon from "../../../assets/img/polygon.png";
import Binance from "../../../assets/img/binance.png";
import Eth from "../../../assets/img/eth.png";
import Avan from "../../../assets/img/avalanche.png";
import Harmony from "../../../assets/img/harmony.png";
import Arb from "../../../assets/img/arbitrum.png";
import "./index.scss";
const Project: React.FC = () => {
  return (
    <FlexRow
      className="project"
      leftPadding="10"
      rightPadding="10"
      gap="2"
      justifyContent="center"
    >
      <FlexColumn gap="1" alignItems="flex-start">
        <SlRocket color="#FFB800" size={30} />
        <Typography
          color="#fff"
          variant="h2"
          fontWeight="500"
          className="project-text"
        >
          Over
        </Typography>

        <ImageWrapper className="image-wrapper" height="30" width="30">
          <img src={Fifty} alt="" width="100%" height="100%" />
        </ImageWrapper>
        <Typography
          color="#fff"
          variant="h2"
          fontWeight="500"
          className="project-text"
        >
          successful project launches
        </Typography>
        <Button variant="outlined" className="btn btn-find">
          Find out how to launch with us
        </Button>
      </FlexColumn>
      <FlexColumn gap="2">
        <HiOutlineLink size={40} color="#76D6FF" />
        <Typography
          color="#fff"
          variant="h2"
          fontWeight="500"
          className="project-text"
        >
          Chains we work with
        </Typography>
        <div className="grid">
          <CustomContainer
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            className="grid-item"
          >
            <img src={Eth} alt="" width="100%" height="100%" />
          </CustomContainer>

          <CustomContainer
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            className="grid-item"
          >
            <img src={Binance} alt="" width="100%" height="100%" />
          </CustomContainer>
          <CustomContainer
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            className="grid-item"
          >
            <img src={Polygon} alt="" width="100%" height="100%" />
          </CustomContainer>
          <FlexRow
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            gap=".6"
            className="grid-item"
          >
            <img src={Avan} alt="" width="30px" height="30px" />
            <Typography color="#fff" variant="h5" letterSpacing="2px">
              Avalanche
            </Typography>
          </FlexRow>
          <CustomContainer
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            className="grid-item"
          >
            <img src={Harmony} alt="" width="100%" height="100%" />
          </CustomContainer>
          <CustomContainer
            width="18"
            height="5"
            radius="2.5"
            borderColor="#2F2F2F"
            bgColor="rgba(68, 68, 68, 0.25);"
            rightPadding="1.2"
            leftPadding="1.2"
            topPadding="1.2"
            bottomPadding="1.2"
            className="grid-item"
          >
            <img src={Arb} alt="" width="100%" height="100%" />
          </CustomContainer>
        </div>
        <Typography variant="body2" color="#fff">
          ...and we’re always working on adding more!
        </Typography>
      </FlexColumn>
    </FlexRow>
  );
};
export default Project;
