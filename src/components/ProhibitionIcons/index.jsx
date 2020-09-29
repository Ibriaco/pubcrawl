import React from "react";
import { useWindowSize } from "utils/sizeHook";

import { Circle } from "./styles";

import Mascherina from "img/mascherina.png";
import Condom from "img/condom.png";
import Birra from "img/birra.png";
import { TABLET_SIZE } from "constants/size";

export const ProhibitionIcons = () => {
  const { width } = useWindowSize();

  const isMobile = width < TABLET_SIZE;

  return (
    <div
      style={{
        position: isMobile ? "block" : "absolute",
        right: 0,
        display: "flex",
      }}
    >
      <Circle>
        <img
          alt="mascherina"
          src={Mascherina}
          style={{ height: 30, width: 30 }}
        />
      </Circle>
      <Circle>
        <img alt="condom" src={Condom} style={{ height: 30, width: 30 }} />
      </Circle>
      <Circle>
        <img alt="birra" src={Birra} style={{ height: 28, width: 28 }} />
      </Circle>
    </div>
  );
};
