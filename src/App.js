import React from "react";
import "./App.css";

import { PageContainer, TicketContainer, Circle } from "./styles.js";

import barCodeImg from "./barCode.png";
import { CustomizedSteppers } from "./steppe";

import Mascherina from "./mascherina.png";
import Condom from "./condom.png";
import Birra from "./birra.png";
import { useWindowSize } from "./sizeHook";

const App = () => {
  const { width } = useWindowSize();

  const isMobile = width < 650;
  const isMiniMobile = width < 375;

  const prohibitionIcons = () => (
    <div
      style={{
        position: isMobile ? "block" : "absolute",
        right: 0,
        display: "flex",
      }}
    >
      <Circle>
        <img src={Mascherina} style={{ height: 30, width: 30 }} />
      </Circle>
      <Circle>
        <img src={Condom} style={{ height: 30, width: 30 }} />
      </Circle>
      <Circle>
        <img src={Birra} style={{ height: 28, width: 28 }} />
      </Circle>
    </div>
  );

  return (
    <PageContainer>
      <TicketContainer>
        <div
          style={{
            backgroundColor: "red",
            padding: "30px 0 5px",
            borderRadius: "40px 40px 0 0 ",
            color: "white",
            fontWeight: 700,
            fontSize: 32,
            paddingLeft: 20,
          }}
        >
          PUB CRAWL
        </div>
        <div
          style={{
            backgroundColor: "white",
            display: isMobile ? "block" : "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 21 : 10,
          }}
        >
          {!isMobile && (
            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 0",
              }}
            >
              <img src={barCodeImg} style={{ height: 200 }}></img>
            </div>
          )}
          <div
            style={{ width: isMobile ? "100%" : "80%", position: "relative" }}
          >
            {!isMobile && prohibitionIcons()}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 10 }}>Data:</div>
              <div style={{ fontWeight: 600 }}>Venerdì 25 SETTEMBRE</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 10 }}>Location:</div>
              <div style={{ fontWeight: 600 }}>LAMBRATE</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 10 }}>Inizio ore:</div>
              <div style={{ fontWeight: 600 }}>21.00</div>
            </div>
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
                Steps:
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
            <div style={{ fontSize: 8, marginTop: 20 }}>
              A ogni tappa verrà imposta una regola diversa che tutti dovranno
              rispettare. Le pub rules verranno rivelate all'inizio di ogni
              tappa.
            </div>
          </div>
          {isMobile && (
            <div
              style={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              {prohibitionIcons()}
            </div>
          )}
          {isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 0 0 0px",
                transform: "rotate(-90deg)",
                height: 80,
              }}
            >
              <img src={barCodeImg} style={{ height: 200 }}></img>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundColor: "red",
            height: 10,
            padding: 10,
            borderRadius: "0 0 40px 40px",
          }}
        />
      </TicketContainer>
    </PageContainer>
  );
};

export default App;
