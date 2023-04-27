import { AppLink, CustomContainer, FlexColumn, FlexRow } from "../../style";
import { Typography } from "@mui/material";
import "./index.scss";

const Footer: React.FC = () => {
  return (
    <FlexRow className="footer">
      <FlexRow
        width="150"
        gap="5"
        bgColor="rgba(68, 68, 68, 0.25)"
        radius="2"
        leftPadding="2"
        rightPadding="2"
        topPadding="2"
        bottomPadding="2"
        alignItems="flex-start"
        className="footer-container"
        
      >
        <FlexColumn width="40" className="text-container">
          <Typography
            variant="h2"
            color="#fff"
            fontFamily="Space Grotesk"
            align="center"
            gutterBottom
            letterSpacing="1"
          >
            Symbiote
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            fontFamily="Space Grotesk"
            align="left"
            gutterBottom
            letterSpacing="1"
          >
            * Past performances do not indicate future success.
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            fontFamily="Space Grotesk"
            align="left"
            gutterBottom
            letterSpacing="1"
          >
            This web page and any other contents published on this website shall
            not constitute investment advice, financial advice, trading advice,
            or any other kind of advice, and you should not treat any of the
            website’s content as such. You alone assume the sole responsibility
            of evaluating the merits and risks associated with using any
            information or other content on this website before making any
            decisions based on such information. You understand that the crypto
            market is characterised by high volatility, and you should be aware
            of the concrete possibility of losing the entirety of the funds you
            allocated in the crypto market. You should refrain from using funds
            you can’t afford to lose when purchasing cryptocurrencies and other
            digital tokens.
          </Typography>
        </FlexColumn>

        <FlexRow gap="2">
          <FlexColumn alignItems="flex-start" gap="2">
            <Typography
              variant="h4"
              color="#fff"
              fontFamily="Space Grotesk"
              align="left"
              gutterBottom
              letterSpacing="1"
            >
              Product
            </Typography>

            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Symbiote LaunchPad
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Staking
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Roulette
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Spaceport
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Your Portfolio
            </AppLink>
          </FlexColumn>
          <FlexColumn alignItems="flex-start" gap="2">
            <Typography
              variant="h4"
              color="#fff"
              fontFamily="Space Grotesk"
              align="left"
              gutterBottom
              letterSpacing="1"
            >
              Our Secret
            </Typography>

            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Passive Income
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Documentation
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              About Us
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              CoinMarketCap
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              CoinGecko
            </AppLink>
          </FlexColumn>
          <FlexColumn alignItems="flex-start" gap="2">
            <Typography
              variant="h4"
              color="#fff"
              fontFamily="Space Grotesk"
              align="left"
              gutterBottom
              letterSpacing="1"
            >
              Social Media
            </Typography>

            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
             Discord
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
              Twitter
            </AppLink>
            <AppLink
              color="#fff"
              decoration="none"
              hasBottomBorder
              align="left"
              className="footer-link"
              fontWeight="300"
            >
             Linktree
            </AppLink>
          </FlexColumn>
        </FlexRow>
      </FlexRow>
    </FlexRow>
  );
};
export default Footer;
