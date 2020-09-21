import styled from "styled-components";
import sky from "./sky.gif";

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

export const Circle = styled.div`
  border-radius: 50%;
  background-color: white;
  border: 5px solid red;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
