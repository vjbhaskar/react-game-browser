import { Icon, Tooltip } from "@mui/material";
import { Platform } from "../utilities/types";
import {
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { SiPlatformio } from "react-icons/si";
import React from "react";
interface PlatformProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformProps) => {
  const icons: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    linux: FaLinux,
    xbox: FaXbox,
    apple: FaApple,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    default: SiPlatformio,
  };
  //   const iconMapper = (name) => {};

  return (
    <>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} title={platform.name}>
          <Icon sx={{ mr: 2 }}>
            {React.createElement(icons[platform.slug] || icons.default)}
          </Icon>
        </Tooltip>
      ))}
    </>
  );
};

export default PlatformIconList;
