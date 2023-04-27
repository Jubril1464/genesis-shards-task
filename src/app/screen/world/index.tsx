import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import {
  AppSpan,
  CustomContainer,
  FlexColumn,
  FlexRow,
  ImageWrapper,
} from "../../app-styles";
import Crystal from "../../../assets/img/cyrstal.png";
import Earth from "../../../assets/img/world.png";
import "./index.scss";
import WorldCryptoids from "../../../assets/img/world-cryptoids.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { partner } from "../../../utils/mock-data";

const World: React.FC = () => {
  const [cardPerView, setCardPerView] = useState<number>(3);

  return (
    <CustomContainer topMargin="3" className="world" bottomPadding="5">
      <Typography
        variant="h2"
        color="#fff"
        fontFamily="Space Grotesk"
        align="center"
        className="world-heading"
      >
        Your project belongs to the world.
      </Typography>
      <Typography
        variant="body2"
        color="#fff"
        fontFamily="Space Grotesk"
        align="center"
        gutterBottom
        letterSpacing="1px"
      >
        Let us help you get there.
      </Typography>
      <FlexRow topMargin="4" gap="4" className="flex-container">
        <FlexColumn
          alignItems="flex-start"
          width="10"
          style={{ alignSelf: "flex-start" }}
          className="world-member"
        >
          <Typography
            variant="h3"
            color="#DB0968"
            fontFamily="Space Grotesk"
            align="left"
          >
            110,000
          </Typography>
          <Typography variant="h3" color="#fff" fontFamily="Space Grotesk">
            Members
          </Typography>
        </FlexColumn>

        <CustomContainer height="40" width="40" className="img-wrapper">
          <img
            src={Crystal}
            alt=""
            width="100%"
            height="100%"
            className="img-crystal"
          />
          <img src={Earth} alt="" className="img-earth" />
        </CustomContainer>
        <FlexColumn
          alignItems="flex-start"
          width="10"
          style={{ alignSelf: "flex-end" }}
          className="world-continent"
        >
          <Typography variant="h3" color="#DB0968" fontFamily="Space Grotesk">
            Across 6
          </Typography>
          <Typography variant="h3" color="#fff" fontFamily="Space Grotesk">
            Continents
          </Typography>
        </FlexColumn>
      </FlexRow>

      <FlexRow gap="3" topMargin="6" className="world-card-container">
        <FlexColumn
          width="15"
          height="9"
          borderColor="#2F2F2F"
          bgColor="rgba(68, 68, 68, 0.25)"
          radius="2"
          gap=".5"
          className="world-card"
        >
          <Typography
            variant="h3"
            color="#fff"
            fontFamily="Space Grotesk"
            className="people-no"
          >
            75M
          </Typography>
          <Typography variant="body2" color="#fff" fontFamily="Space Grotesk">
            Total GS Staked
          </Typography>
        </FlexColumn>
        <FlexColumn
          width="15"
          height="9"
          borderColor="#2F2F2F"
          bgColor="rgba(68, 68, 68, 0.25)"
          radius="2"
          gap=".5"
          className="world-card"
        >
          <Typography
            variant="h3"
            color="#fff"
            fontFamily="Space Grotesk"
            className="people-no"
          >
            720
          </Typography>
          <Typography variant="body2" color="#fff" fontFamily="Space Grotesk">
            Avg. Locked Days
          </Typography>
        </FlexColumn>
        <FlexColumn
          width="15"
          height="9"
          borderColor="#2F2F2F"
          bgColor="rgba(68, 68, 68, 0.25)"
          radius="2"
          gap=".5"
          className="world-card"
        >
          <Typography
            variant="h3"
            color="#fff"
            fontFamily="Space Grotesk"
            className="people-no"
          >
            7M
          </Typography>
          <Typography variant="body2" color="#fff" fontFamily="Space Grotesk">
            GS Earned by Stakers
          </Typography>
        </FlexColumn>
      </FlexRow>
      <FlexRow topMargin="3">
        <Button variant="outlined" className="btn btn-launch">
          Stake your GS now
        </Button>
      </FlexRow>
      <CustomContainer
        bgColor="rgba(0,0,0,.7)"
        topMargin="5"
        leftPadding="2"
        rightPadding="2"
        topPadding="2"
        bottomPadding="2"
      >
        <Typography
          variant="h2"
          color="#fff"
          className="world-heading"
          fontFamily="Space Grotesk"
          align="center"
          gutterBottom
        >
          A thriving partner ecosystem
        </Typography>
        <Typography
          variant="body2"
          color="#fff"
          fontFamily="Space Grotesk"
          align="center"
          gutterBottom
          letterSpacing="1"
        >
          Look no further than hundreds of our curated Ecosystem partners
        </Typography>
        <FlexRow>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={cardPerView}
            spaceBetween={1}
          >
            {partner.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <FlexColumn
                  gap="2"
                  width="70"
                  height="12"
                  bgColor="rgba(68, 68, 68, 0.25)"
                  radius="1.5"
                  rightPadding="1"
                  topPadding="1"
                  bottomPadding="1"
                  leftPadding="1"
                  topMargin="3"
                >
                  <ImageWrapper height="8" width="10">
                    <img src={item.img} alt="" width="100%" height="100%" />
                  </ImageWrapper>
                  <Typography
                    variant="body2"
                    color="#fff"
                    fontFamily="Space Grotesk"
                    align="center"
                    gutterBottom
                    letterSpacing="1"
                  >
                    {item.text}
                  </Typography>
                </FlexColumn>
              </SwiperSlide>
            ))}
          </Swiper>
        </FlexRow>
        <FlexRow gap="2">
          <Typography
            variant="body2"
            color="#fff"
            fontFamily="Space Grotesk"
            align="center"
            gutterBottom
            letterSpacing="1"
          >
            Are you a project interested in partnering with us?
          </Typography>
          <Button variant="outlined" className="btn btn-launch">
            Let's talk
          </Button>
        </FlexRow>
      </CustomContainer>
      <FlexRow  gap="3" topMargin="3" leftPadding="2" rightPadding="2" >
        <CustomContainer width="25">
        <Typography
            variant="h2"
            color="#fff"
            fontFamily="Space Grotesk"
            align="center"
            gutterBottom
            letterSpacing="1"
            width='60px'
          >
           We’re better. Together.
          </Typography>
        </CustomContainer>
      
          <CustomContainer width=".1" height="15" bgColor="#fff"></CustomContainer>
          <FlexColumn width="30" style={{justifySelf:"left"}} alignItems="flex-start" gap="2">
          <Typography
            variant="body2"
            color="#fff"
            fontFamily="Space Grotesk"
            align="left"
            gutterBottom
            letterSpacing="1"
          >
           Contact Us
          </Typography>
          <Typography
            variant="body2"
            color="#fff"
            fontFamily="Space Grotesk"
            align="left"
            gutterBottom
            letterSpacing="1"
          >
          Our expert Crypto team is always available except on full moons where we moonlight as Werewolves hunting down vampires from Twilight. Want to launch with us? Just want to say Hi? Grab a chai?
          </Typography>
          <Button variant="contained" className="btn-moon btn">To the Moon!</Button>
          </FlexColumn>
      </FlexRow>
    </CustomContainer>
  );
};
export default World;
