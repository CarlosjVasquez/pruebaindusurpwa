import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const FormInput = styled.input`
  width: 100%;
  min-height: 3.44vw;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-left: none;
  border-right: none;

  &:focus {
    box-shadow: inset;
    outline: none;
    background: #ffffff;
    border: transparent;
  }

  //text
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.18vw;
  color: #737373;

  ${Responsive.SM} {
    min-height: 11.11vw;

    //text
    font-size: 2.43vw;
    line-height: 2.95vw;

    &:focus {
      box-shadow: inset;
      outline: none;
      background: #ffffff;
      border: 1px solid transparent;
    }
  }
`;

export const FormSpan = styled.span`
  height: 3.61vw;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #2d3748;

  ${Responsive.SM} {
    min-height: 13.87vw;
  }
`;

export const FormSpanPsw = styled.span`
  min-height: 3.44vw;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #2d3748;
  border-top: 0;
  border-right: 0;

  ${Responsive.SM} {
    min-height: 10.87vw;
  }
`;

export const FormLabel = styled.label`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1c2533;
  font-size: 0.97vw;
  line-height: 1.18vw;
  margin-bottom: 0.5vw;

  ${Responsive.SM} {
    font-size: 2.43vw;
    line-height: 2.95vw;
    margin-bottom: 1.5vw;
  }
`;

export const ContainerImg = styled.img`
  width: 1.92vw;
  min-height: 2.44vw;

  ${Responsive.SM} {
    width: 4.65vw;
    min-height: 8.11vw;
  }
`;
