import React from "react";
import SportsHockeyIcon from "@material-ui/icons/SportsHockey";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";

const Header = () => {
  return (
    <div className="row mt-3 header-icon-align">
      <div className="col-md-6">
        <SportsHockeyIcon />
      </div>
      <div class="col-md-5">
        <AccountBoxIcon />
        <SettingsPowerIcon />
      </div>
      <div className="col-md-12 text-center border-bottom-new mt-4 border-dark">
        <h5>
            DEMO - 2
        </h5>
      </div>
    </div>
  );
};

export default Header;
