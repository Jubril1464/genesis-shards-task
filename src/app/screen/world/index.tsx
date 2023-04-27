import { Button, Typography } from "@mui/material"
import { AppSpan, CustomContainer, FlexColumn, FlexRow } from "../../app-styles"
import Crystal from '../../../assets/img/cyrstal.png';
import Earth from '../../../assets/img/world.png';
import './index.scss'

const World:React.FC = () => {
    return (
        <CustomContainer topMargin="3" className="world" rightPadding="10" leftPadding="10" bottomPadding="5">
        <Typography variant="h2" color='#fff' fontFamily='Space Grotesk' align='center'>Your project belongs to the world.</Typography>
        <Typography variant="body2" color='#fff' fontFamily='Space Grotesk' align='center' gutterBottom letterSpacing='1px'>Let us help you get there.</Typography>
        <FlexRow topMargin="4" gap="4" className="flex-container">
            <FlexColumn alignItems="flex-start"  width="10" style={{alignSelf:"flex-start"}} className="world-member">
            <Typography variant="h3" color='#DB0968' fontFamily='Space Grotesk' align="left">110,000</Typography>
            <Typography variant="h3" color='#fff' fontFamily='Space Grotesk'>Members</Typography>

            </FlexColumn>

            <CustomContainer height="40" width="40" className="img-wrapper">
                <img src={Crystal} alt="" width='100%' height='100%' className='img-crystal' />
                <img src={Earth} alt="" className="img-earth"/>
            </CustomContainer>
            <FlexColumn alignItems="flex-start"  width="10" style={{alignSelf:"flex-end"}}  className="world-continent">
            <Typography variant="h3" color='#DB0968' fontFamily='Space Grotesk' >Across 6</Typography>
            <Typography variant="h3" color='#fff' fontFamily='Space Grotesk'>Continents</Typography>

            </FlexColumn>

        </FlexRow>

        <FlexRow gap="3" topMargin="6" className="world-card-container">
            <FlexColumn width="15" height="9" borderColor="#2F2F2F" bgColor="rgba(68, 68, 68, 0.25)" radius="2" gap=".5" className="world-card">
            <Typography variant="h3" color='#fff' fontFamily='Space Grotesk' className='people-no'>75M</Typography>
            <Typography variant="body2" color='#fff' fontFamily='Space Grotesk'>Total GS Staked</Typography>

            </FlexColumn>
            <FlexColumn width="15" height="9" borderColor="#2F2F2F" bgColor="rgba(68, 68, 68, 0.25)" radius="2" gap=".5" className="world-card">
            <Typography variant="h3" color='#fff' fontFamily='Space Grotesk' className='people-no'>720</Typography>
            <Typography variant="body2" color='#fff' fontFamily='Space Grotesk'>Avg. Locked Days</Typography>

            </FlexColumn>
            <FlexColumn width="15" height="9" borderColor="#2F2F2F" bgColor="rgba(68, 68, 68, 0.25)" radius="2" gap=".5" className="world-card">
            <Typography variant="h3" color='#fff' fontFamily='Space Grotesk' className='people-no'>7M</Typography>
            <Typography variant="body2" color='#fff' fontFamily='Space Grotesk'>GS Earned by Stakers</Typography>

            </FlexColumn>
        </FlexRow>
  <FlexRow topMargin="3">
  <Button variant="outlined" className="btn btn-launch" >Stake your GS now</Button>

  </FlexRow>
        </CustomContainer>
    )
}
export default World