import { useState } from "react";
import { Container } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { FlexRow } from "../../style";
import "./index.scss";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";

const Nav: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <FlexRow
      leftPadding="3"
      rightPadding="3"
      topPadding="3"
      gap="5"
      justifyContent="space-between"
      className="nav-container"
    >
      <Typography variant="h2" color="#fff" className="logo-title">
        Symbiote
      </Typography>

      <ul className={`nav-item-container ${checked && 'active'}`}>
        <li>
        
          <Typography
            variant="h5"
            color="#fff"
            fontSize={20}
            className="nav-items"
          >
            Lunch Pad
          </Typography>
        </li>

        <li>
        
        <Typography
          variant="h5"
          color="#fff"
          fontSize={20}
          className="nav-items"
        >
          Vote DAO
        </Typography>
      </li>

      <li>
        
        <Typography
          variant="h5"
          color="#fff"
          fontSize={20}
          className="nav-items"
        >
          Stake
        </Typography>
      </li>

      <li>
        
        <Typography
          variant="h5"
          color="#fff"
          fontSize={20}
          className="nav-items"
        >
          Ecosystem
        </Typography>
      </li>

      <li>
        
        <Typography
          variant="h5"
          color="#fff"
          fontSize={20}
          className="nav-items"
        >
          Profile
        </Typography>
      </li>

        <div className="nav-icon-container">
          <FlexRow
            height="3"
            width="3"
            leftPadding=".2"
            rightPadding=".2"
            topPadding=".2"
            bottomPadding=".2"
            bgColor="#fff"
            radius="5"
          >
            <BsMedium className="nav-icon" size={30} />
          </FlexRow>
          <FlexRow
            height="3"
            width="3"
            leftPadding=".2"
            rightPadding=".2"
            topPadding=".2"
            bottomPadding=".2"
            bgColor="#fff"
            radius="5"
          >
            <BsTwitter className="nav-icon" size={20} />
          </FlexRow>
          <Button
            variant="outlined"
            startIcon={<FaWallet className="nav-icon" color="#fff" size={20} />}
            className="btn btn-wallet"
          >
            <Typography
              variant="h5"
              color="#fff"
              fontSize={20}
              className="btn-text"
            >
              Connect Wallet
            </Typography>
          </Button>
        </div>
      </ul>

      <div className="nav__icon">
        <input
          type="checkbox"
          className={`navigation__checkbox`}
          id="navi-toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="navi-toggle" className={`navigation__button`}>
          <span className={`navigation__icon`}>&nbsp;</span>
        </label>
      </div>
    </FlexRow>
  );
};
export default Nav;
