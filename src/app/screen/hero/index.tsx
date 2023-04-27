import { Typography, Button, Stack,Card } from "@mui/material";
import { CustomContainer, FlexColumn, FlexRow, ImageWrapper } from "../../app-styles";
import "./index.scss";
import Arbitrum from "../../../assets/img/arbitrum.png";
import { MdLaunch } from "react-icons/md";
import BgColor from "../../../assets/img/bg-4.png";
import Rectangle from "../../../assets/img/rectangle.png";
import {SlRocket} from 'react-icons/sl'
import {GiEnlightenment,GiLightningSpanner,GiCandleLight} from 'react-icons/gi'
const Hero: React.FC = () => {
  return (
    <CustomContainer
      topMargin="13"
      leftPadding="10"
      className="hero"
      rightPadding="10"
    >
      <FlexRow justifyContent="space-between" alignItems="flex-start">
        <Stack direction="column" spacing={3} width={450}>
          <Typography variant="h5" color="#fff" className="hero-text">
            A Multi-Chain Launchpad like no other
          </Typography>
          <Typography variant="h1" color="#fff" className="hero-heading">
            Moonshots are all we do, Jump in
          </Typography>
          <FlexRow justifyContent="flex-start">
            <Typography
              variant="h5"
              color="#fff"
              className="hero-text color-text"
              textTransform="uppercase"
            >
              Now live on
            </Typography>
            <img src={Arbitrum} className='hero-arb'/>
          </FlexRow>
          <Button
            variant="outlined"
            endIcon={<MdLaunch size={20} color="#fff" />}
            className="btn btn-launch"
          >
            Go to Lunchpad
          </Button>
        </Stack>
        
          <ImageWrapper height="50" width="70" className="hero-img">
            <img src={BgColor} alt="" height="100%" width="100%" />

           
          </ImageWrapper>
    
      </FlexRow>

      <FlexRow  gap="5" topMargin="6" wrap="wrap" className="hero__card-container">
       <FlexColumn className='hero__card' gap='2' width="20" radius="2" bottomPadding="2" height="20">
        <SlRocket className="hero__card-icon" color="#fff" size={40}/>
        <Typography className='hero__card-no' variant="h1">50+</Typography>

        <Typography className='hero__card-text' color='#fff' align="center">Project Launches</Typography>

       </FlexColumn>
       <FlexColumn className='hero__card' gap='2' width="20" radius="2" bottomPadding="2" height="20">
        <GiEnlightenment className="hero__card-icon" color="#fff" size={40}/>
        <Typography className='hero__card-no' variant="h1">$1.6M+</Typography>
        <Typography className='hero__card-text' color='#fff' align="center">Raised</Typography>
       </FlexColumn>
       <FlexColumn className='hero__card' gap='2' width="20" radius="2" bottomPadding="2" height="20">
        <GiLightningSpanner className="hero__card-icon" color="#fff" size={40}/>
        <Typography className='hero__card-no' variant="h1">450+</Typography>
        <Typography className='hero__card-text' color='#fff' align="center">Partners</Typography>
       </FlexColumn>
       <FlexColumn className='hero__card' gap='2' width="20" radius="2" bottomPadding="2" height="20">
        <GiCandleLight className="hero__card-icon" color="#fff" size={40}/>
        <Typography className='hero__card-no' variant="h1">110k+</Typography>
        <Typography className='hero__card-text' color='#fff' align="center">Global Community</Typography>
       </FlexColumn>
        

      </FlexRow>
    </CustomContainer>
  );
};
export default Hero;
