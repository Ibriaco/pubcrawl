import React from "react";

import {
  PageContainer,
  TicketContainer,
  SuperiorWrapper,
  ImgBarCodeWrapper,
  IconsMobileWrapper,
  CentralWrapper,
  BarCodeMobileWrapper,
  InferiorBlock,
  CentrateWrapper,
} from "./styles.js";

import barCodeImg from "img/barCode.png";
import { CustomizedSteppers } from "components/Stepper";

import { useWindowSize } from "utils/sizeHook";
import { ProhibitionIcons } from "components/ProhibitionIcons";
import { MOBILE_SIZE, TABLET_SIZE } from "./constants/size.js";
import {
  DATE,
  LOCATION_PLACE,
  START,
  START_DATE,
  START_TIME,
  TITLE,
  LOCATION,
  STEPS,
  TIP,
} from "./constants/labels.js";

const App = () => {
  const { width } = useWindowSize();

  const isMobile = width < TABLET_SIZE;
  const isMiniMobile = width < MOBILE_SIZE;

  return (
    <PageContainer>
      <TicketContainer>
        <SuperiorWrapper>{TITLE}</SuperiorWrapper>
        <CentralWrapper isMobile={isMobile}>
          {!isMobile && (
            <ImgBarCodeWrapper>
              <img src={barCodeImg} alt="barcode" style={{ height: 200 }}></img>
            </ImgBarCodeWrapper>
          )}
          <div
            style={{ width: isMobile ? "100%" : "80%", position: "relative" }}
          >
            {!isMobile && <ProhibitionIcons />}
            <CentrateWrapper>
              <div style={{ marginRight: 10 }}>{`${DATE}:`}</div>
              <div style={{ fontWeight: 600 }}>{START_DATE}</div>
            </CentrateWrapper>
            <CentrateWrapper>
              <div style={{ marginRight: 10 }}>{`${LOCATION}:`}</div>
              <div style={{ fontWeight: 600 }}>{LOCATION_PLACE}</div>
            </CentrateWrapper>
            <CentrateWrapper>
              <div style={{ marginRight: 10 }}>{`${START}:`}</div>
              <div style={{ fontWeight: 600 }}>{START_TIME}</div>
            </CentrateWrapper>
            <div
              style={{
                display: isMobile ? "block" : "flex",
              }}
            >
              <div
                style={{
                  marginRight: 10,
                  marginTop: isMobile ? 0 : "20px",
                  marginBottom: isMobile ? 20 : 0,
                }}
              >
                {`${STEPS}:`}
              </div>
              <CustomizedSteppers
                isMobile={isMobile}
                isMiniMobile={isMiniMobile}
              />
            </div>
            <div
              style={{
                borderTop: "1px solid black",
                opacity: 0.1,
                marginTop: isMobile ? 30 : 10,
              }}
            />
            <div style={{ fontSize: 8, marginTop: 20 }}>{TIP}</div>
          </div>
          {isMobile && (
            <IconsMobileWrapper>
              <ProhibitionIcons />
            </IconsMobileWrapper>
          )}
          {isMobile && (
            <BarCodeMobileWrapper>
              <img
                alt="barcode-mobile"
                src={barCodeImg}
                style={{ height: 200 }}
              ></img>
            </BarCodeMobileWrapper>
          )}
        </CentralWrapper>
        <InferiorBlock />
      </TicketContainer>
    </PageContainer>
  );
};

export default App;
