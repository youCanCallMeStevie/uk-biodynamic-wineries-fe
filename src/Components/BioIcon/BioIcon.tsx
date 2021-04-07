import React from "react";

import {
  GiFallingLeaf,
  GiTreeRoots,
  GiGrapes,
  GiSunflower,
} from "react-icons/gi";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const BioTypes = {
  Leaf: GiFallingLeaf,
  Flower: GiSunflower,
  Fruit: GiGrapes,
  Root: GiTreeRoots,
};

function BioIcon() {
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);

  if (!moonInfo) return null;
  const { bioDay } = moonInfo;

  const Icon = styled(BioTypes[bioDay])`
    margin-right: 0.25em;
    margin-left: 0.25em;
    &:hover {
      color: #c06014;
      transition: all 0.3s ease;
    }
  `;

  return <Icon />;
}

export default BioIcon;
