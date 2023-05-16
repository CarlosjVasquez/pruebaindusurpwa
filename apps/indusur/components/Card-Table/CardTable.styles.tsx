import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import Table from 'react-bootstrap/Table';

export const DivCard = styled.div`
  width: 100%;
  min-height: 21.39vw;

  .CircularProgressbar-path {
    stroke: #1253c9;
  }
  .CircularProgressbar-trail {
    stroke: #e9eef3;
  }
  .CircularProgressbar-text {
    fill: #1253c9;
  }

  ${Responsive.SM} {
    min-height: 53.47vw;
  }
`;

export const DivCardT = styled.div`
  width: 100%;
  min-height: 15.39vw;

  .CircularProgressbar-path {
    stroke: #1253c9;
  }
  .CircularProgressbar-trail {
    stroke: #e9eef3;
  }
  .CircularProgressbar-text {
    fill: #1253c9;
  }

  ${Responsive.SM} {
    min-height: 53.47vw;
  }
`;

export const DivCardBody = styled.div``;

export const TextTitleCard = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 1.67vw;
  line-height: 1.67vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 4.17vw;
    line-height: 4.17vw;
    padding-left: 4.17vw;
  }
`;

export const TextSubtitleCard = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #737373;
  font-size: 0.9vw;
  line-height: 1.39vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 4.17vw;
    padding-bottom: 3vw;
  }
`;

export const TextSubtitleCard1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #737373;
  font-size: 0.9vw;
  line-height: 1.39vw;
  padding-left: 0.5vw;
  padding-top: 0.5vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 1vw;
    padding-top: 1.5vw;
    display: none;
  }
`;

export const TextNumber1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #737373;
  font-size: 2.22vw;
  line-height: 2.71vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 6.77vw;
    padding-left: 0vw;
    display: none;
  }
`;

export const TextFooterCard = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 0.98vw;
  line-height: 1.39vw;
  color: #1253c9;
  text-decoration: none;
  text-align: end;

  ${Responsive.SM} {
    font-size: 2.55vw;
    line-height: 3.47vw;
  }
`;

export const DivCardUnits = styled.div`
  width: 10vw;
  min-height: 7.43vw;
  margin-inline-end: 40px;

  ${Responsive.SM} {
    width: 30%;
    min-height: 18.58vw;
    margin-inline-end: 0px;
    margin-bottom: 10px;
    margin-inline-start: 34px;
    padding-top: 5vw;
  }
`;

export const TextSubtitleCardUnits = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #737373;
  font-size: 0.9vw;
  line-height: 1.39vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
  }
`;

export const DivCardAmounts = styled.div`
  width: 14.79vw;
  min-height: 7.43vw;

  ${Responsive.SM} {
    width: 50%;
    min-height: 18.58vw;
  }
`;

export const DivAmountsTotal = styled.div`
  width: 14.79vw;
  min-height: 7.43vw;

  ${Responsive.SM} {
    width: 100%;
    min-height: 18.58vw;
  }
`;

export const DivCardAmountActive = styled.div`
  width: 17vw;
  min-height: 7.43vw;
  border: 2px solid rgba(18, 83, 201, 0.25);

  ${Responsive.SM} {
    width: 50%;
    min-height: 18.58vw;
    margin-inline-start: 7.5vw;
  }
`;

export const TextSubtitle2 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.9vw;
  line-height: 1.39vw;
  text-align: start !important;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 0vw;
  }
`;

export const TextAmount = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1253c9;
  font-size: 2.22vw;
  line-height: 2.71vw;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 6.77vw;
    padding-left: 0vw;
  }
`;

export const TextAmountDisabled = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #737373;
  font-size: 2.22vw;
  line-height: 2.71vw;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 6.77vw;
    padding-left: 0vw;
  }
`;

export const DivContainerCards = styled.div`
  padding-inline: 4vw;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;

  ${Responsive.SM} {
    padding-inline: 0vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: contents;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  padding-inline: 2.71vw;

  ${Responsive.SM} {
    padding-inline: 6.77vw;
  }
`;

export const DivCardPercentTotal = styled.div`
  width: 10vw;
  min-height: 7.43vw;
  margin-inline-end: 40px;

  ${Responsive.SM} {
    width: 30%;
    min-height: 18.58vw;
    margin-inline-end: 0px;
    margin-bottom: 10px;
    margin-inline-start: 110px;
    padding-top: 4vw;
  }
`;
