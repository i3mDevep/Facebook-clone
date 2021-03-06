import React from "react";
import { Avatar } from '@material-ui/core'
import "./SidebarRow.css";

function SidebarRow({ title, Icon, src }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarRow;
