import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import Table from 'react-bootstrap/Table';

export const DivContainerEnd = styled.div`
  ${Responsive.SM} {
    display: none;
  }
`;

export const DivTable = styled(Table)`
  ${Responsive.SM} {
    display: none;
  }
`;

export const TextSubtitleCard1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
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
