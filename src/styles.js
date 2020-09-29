import styled from "styled-components";
import sky from "img/sky.gif";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  background: url(${sky}) center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TicketContainer = styled.div`
  width: 80vw;

  max-width: 800px;

  border-radius: 25px;
  background-color: red;

  -webkit-box-shadow: 10px 10px 0px 2px rgba(87, 87, 87, 0.59);
  -moz-box-shadow: 10px 10px 0px 2px rgba(87, 87, 87, 0.59);
  box-shadow: 10px 10px 0px 2px rgba(87, 87, 87, 0.59);
`;

export const SuperiorWrapper = styled.div`
  background-color: red;
  padding: 30px 0 5px;
  border-radius: 40px 40px 0 0;
  color: white;
  font-weight: 700;
  font-size: 32px;
  padding-left: 20px;
`;

export const CentralWrapper = styled.div`
  background-color: white;
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
  align-items: center;
  justify-content: center;
  padding: ${({ isMobile }) => (isMobile ? "21" : "10")}px;
`;

export const ImgBarCodeWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const CentrateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconsMobileWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const BarCodeMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transform: rotate(-90deg);
  height: 80px;
`;

export const InferiorBlock = styled.div`
  background-color: red;
  height: 10px;
  padding: 10px;
  border-radius: 0 0 40px 40px;
`;
