import { Typography } from "@mui/material";
import { CustomContainer, FlexColumn, ImageWrapper } from "../../app-styles";
import Stator from "../../../assets/img/stator.png";
import { performance } from "../../../utils/mock-data";
import './index.scss';

const Performance: React.FC = () => {
  return (
    <CustomContainer topMargin="3" leftPadding="10" rightPadding="10" className="performance">
      <Typography color="#fff" variant="h2" align="center" fontFamily='Space Grotesk'>
        Past Performance
      </Typography>

      <div className="grid">
        {performance.map((item: any, index: number) => (
          <FlexColumn borderColor="#FEC201" padding="1" bgColor="rgba(68, 68, 68, 0.2)" radius="2" gap="2" key={index}> 
            <ImageWrapper width="25" height="8">
            <img src={item.img} alt=""  width='100%' height='100%'/>

            </ImageWrapper>
            <Typography variant="h3" color="#fff" fontFamily='Space Grotesk'>
              {item.boost}x
            </Typography>
            <Typography variant="body2" color="#fff" fontFamily='Space Grotesk'>
              ATH ROI
            </Typography>
            <Typography variant="h3" color="#fff" fontFamily='Space Grotesk'>
              {`$${item.amount}`}
            </Typography>
            <Typography variant="body2" color="#fff" fontFamily='Space Grotesk'>
            Total Raise
            </Typography>
          </FlexColumn>
        ))}
      </div>
      <Typography variant="body2" color="#fff" fontFamily='Space Grotesk' align="center" >
      And so many more! We’re just getting started! 
            </Typography>
    </CustomContainer>
  );
};
export default Performance;
