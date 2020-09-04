import React from "react";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreIcon from "@material-ui/icons/Store";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import "./index.css";

function index() {
  return (
    <div className="sidebar">
      <div>
        <SidebarRow
          src="https://lh3.googleusercontent.com/a-/AOh14GgHHrF00BOoIaZ3WstcFohrQCMdlt-2FP5l8K63gA=s88-c-k-c0x00ffffff-no-rj-mo"
          title="Michael Atehortua"
        />
        <SidebarRow
          title="COVID-19 Information Center"
          Icon={LocalHospitalIcon}
        />
        <SidebarRow title="Page" Icon={EmojiFlagsIcon} />
        <SidebarRow title="Friends" Icon={PeopleIcon} />
        <SidebarRow title="Messenger" Icon={ChatIcon} />
        <SidebarRow title="Marketplace" Icon={StoreIcon} />
        <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
        <SidebarRow />
      </div>
    </div>
  );
}

export default index;
