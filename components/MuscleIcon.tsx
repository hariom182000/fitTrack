import React from "react";

import {
  ABS,
  BACK,
  BICEP,
  CALVES,
  CHEST,
  FOREARMS,
  GLUTES,
  LEGS,
  SHOULDERS,
  TRICEP,
} from "@/constants";

import ChestSvg from "./svgs/ChestSvg";
import BicepSvg from "./svgs/BicepSvg";
import TricepSvg from "./svgs/TricepSvg";
import GlutesSvg from "./svgs/GlutesSvg";
import ForeArmSvg from "./svgs/ForeArmSvg";
import LegSvg from "./svgs/LegSvg";
import AbsSvg from "./svgs/AbsSvg";
import BackSvg from "./svgs/BackSvg";
import ShoulderSvg from "./svgs/ShoulderSvg";
import CalveSvg from "./svgs/CalveSvg";

const muscleIcons = {
  [CHEST]: ChestSvg,
  [BICEP]: BicepSvg,
  [TRICEP]: TricepSvg,
  [GLUTES]: GlutesSvg,
  [FOREARMS]: ForeArmSvg,
  [LEGS]: LegSvg,
  [ABS]: AbsSvg,
  [BACK]: BackSvg,
  [CALVES]: CalveSvg,
  [SHOULDERS]: ShoulderSvg,
};

export default function MuscleIcon({ muscle, width = 300, height = 300 }) {
  const IconComponent = muscleIcons[muscle];
  return IconComponent ? (
    <IconComponent width={width} height={height} fill={"#C2C2C2"} />
  ) : null;
}
