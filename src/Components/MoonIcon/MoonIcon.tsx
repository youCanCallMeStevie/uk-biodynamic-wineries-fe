import {
  WiMoonWaxingGibbous2,
  WiMoonWaningGibbous6,
  WiMoonFirstQuarter,
  WiMoonThirdQuarter,
  WiMoonWaxingCrescent4,
  WiMoonWaningCrescent5,
  WiMoonFull,
  WiMoonNew,
} from "react-icons/wi";
import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const MoonPhases = {
  "New Moon": WiMoonNew,
  "Waxing Crescent": WiMoonWaxingCrescent4,
  "First Quarter": WiMoonFirstQuarter,
  "Waxing Gibbous": WiMoonWaxingGibbous2,
  "Waning Gibbous": WiMoonWaningGibbous6,
  "Last Quarter": WiMoonThirdQuarter,
  "Waning Crescent": WiMoonWaningCrescent5,
  Full: WiMoonFull,
};

function MoonIcon() {
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);

  if (!moonInfo) return null;
  const { moonPhase } = moonInfo;

  const Icon = styled(MoonPhases[moonPhase])`
    margin-right: 0.25em;
    margin-left: 0.25em;
    &:hover {
      color: #c06014;
      transition: all 0.3s ease;
    }
  `;

  return <Icon />;
}

export default MoonIcon;
