import style from './style.module.css';
import React from "react";
import NavItem from "../NavItem/NavItem";
import homeIcon from "../../assets/icon/home-icon.svg";
import messagesIcon from "../../assets/icon/message.svg";
import createIcon from "../../assets/icon/post.svg";
import profileIcon from "../../assets/icon/user.svg";

export const Footer = () => {
  return (
    <div className={style.bottom}>
      <NavItem label="Home" icon={homeIcon} />
      <NavItem label="Messages" icon={messagesIcon} />
      <NavItem label="Create" icon={createIcon} />
      <NavItem label="Profile" icon={profileIcon} />
    </div>
  );
};

