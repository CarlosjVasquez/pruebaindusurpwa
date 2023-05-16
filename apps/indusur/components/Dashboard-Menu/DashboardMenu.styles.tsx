import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import Navbar from 'react-bootstrap/Navbar';

export const StyleNavar = styled(Navbar)`
  width: 20vw;
  background: white;

  ${Responsive.SM} {
    width: 20vw;
  }
`;

export const StyleNavarTog = styled(Navbar.Toggle)`
  ${Responsive.SM} {
    width: 10vw;
    display: flex;
  }
`;

export const StyleNavarBrand = styled(Navbar.Brand)`
  ${Responsive.SM} {
    display: none;
  }
`;

export const TextActive = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #000000;
  font-size: 0.76vw;
  line-height: 0.83vw;

  ${Responsive.SM} {
    font-size: 1.91vw;
    line-height: 2.08vw;
  }
`;

export const TextEnterprice = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: #000000;
  font-size: 0.9vw;
  line-height: 0.97vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 2.43vw;
  }
`;

export const TextOption = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #737373;
  font-size: 1.2vw;
  line-height: 1.39vw;
  padding-inline-start: 10px;

  ${Responsive.SM} {
    font-size: 3.26vw;
    line-height: 3.47vw;
  }
`;

export const TextSelect = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #737373;
  font-size: 1.2vw;
  line-height: 1.39vw;

  ${Responsive.SM} {
    font-size: 3.26vw;
    line-height: 3.47vw;
  }
`;
